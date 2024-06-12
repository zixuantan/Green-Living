import OpenAI from 'openai';
import Constants from 'expo-constants';

const uploadFile = async (client, path) => {
  const form = new FormData();
  form.append('file', fs.createReadStream(path));
  form.append('purpose', 'assistants');

  const response = await client.files.create({
    body: form,
    headers: form.getHeaders()
  });

  return response;
};

const createVs = async (client, fileid) => {
  const vectorStore = await client.beta.vectorStores.create({
    name: 'Sustainable Products',
    file_ids: [fileid]
  });
  return vectorStore;
};

const createAssistant = async (client, vsid) => {
  const assistant = await client.beta.assistants.create({
    name: 'Sustainable Products Recommender',
    instructions: `You are a sustainable product recommending chatbot. The user will indicate his/her interest to buy something. Respond by providing multiple products of the same type that matches the user's request.
    
    The output should be a list of dictionaries where each product is represented as a dictionary with the following keys:
    
    - Brand: The brand name of the product
    - Carbon Footprint: The carbon footprint of the product in kg CO2e
    - Comparison to average: The comparison of the product's carbon footprint to the average, expressed as a percentage
    - Sustainability Points: The sustainability points of the product
    
<Output>
    
    [
      {
        "Brand": "Brand A",
        "Carbon Footprint": "8kg CO2e",
        "Comparison to average": "60% below the average!",
        "Sustainability Points": 45
      },
      {
        "Brand": "Brand B",
        "Carbon Footprint": "10kg CO2e",
        "Comparison to average": "50% below the average!",
        "Sustainability Points": 40
      },
      {
        "Brand": "Brand C",
        "Carbon Footprint": "9kg CO2e",
        "Comparison to average": "55% below the average!",
        "Sustainability Points": 43
      }
      </OUTPUT>

    ]`,
    model: 'gpt-3.5-turbo-0125'
  });
  return assistant;
};

const runAssistant = async (client, message) => {
  const thread = await client.beta.threads.create();
  await client.beta.threads.messages.create(thread.id, {
    role: 'user',
    content: message
  });
  let run = await client.beta.threads.runs.createAndPoll(thread.id, {
    assistant_id: 'asst_ckh9hMbrLGrcH9Sf536DQOxg'
    // assistant_id:assistant.id
  });
  if (run.status === 'completed') {
    const messages = await client.beta.threads.messages.list(run.thread_id);
    console.log(messages)
    var output=JSON.parse(messages.data[0].content[0].text.value)
    console.log(output)
    return output
  } else {
    console.log(run.status);
  }
};

const main = async (message) => {
  const client = new OpenAI({ apiKey: Constants.expoConfig.extra.env });
  // const assistant = await createAssistant(client);
  output=await runAssistant(client,message);
  return output
};
export default main;
