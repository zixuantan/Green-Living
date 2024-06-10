import OpenAI from 'openai';
import Constants from 'expo-constants';

const uploadFile = async (path) => {
  const file = await client.files.create(
    (file = open(path, 'rb')),
    (purpose = 'assistants')
  );
  return file;
};

const createVs = async (fileid) => {
  const vectorStore = await client.beta.vectorStores.create({
    name: 'Sustainable Products.',
    file_ids: [fileid]
  });
  return vectorStore;
};

const createAssistant = async (vsid) => {
  const assistant = await client.beta.assistants.create({
    name: 'Sustainable Products Reccomender.',
    instructions:
      'You are a sustaainable product reccomending chatbot. The user',
    tools: [{ type: 'file_search' }],
    tool_resources: {
      file_search: {
        vector_store_ids: [{ vsid }]
      }
    },
    model: 'gpt-4-turbo'
  });
};

const runAssistant = async (assistant, message) => {
  const thread = await client.beta.threads.create();
  const message = await client.beta.threads.messages.create(thread.id, {
    role: 'user',
    content: message
  });
  let run = await client.beta.threads.runs.createAndPoll(thread.id, {
    assistant_id: assistant.id
  });
  if (run.status === 'completed') {
    const messages = await client.beta.threads.messages.list(run.thread_id);
    for (const message of messages.data.reverse()) {
      console.log(`${message.role} > ${message.content[0].text.value}`);
    }
  } else {
    console.log(run.status);
  }
};

const main = async (message) => {
  const client = new OpenAI((openai_api_key = Constants.expoConfig.extra.env));
  file = uploadFile('../utils/chatbot.txt');
  const vectorStore = createVs(file.id);
  const assistant = createAssistant(vectorStore.id);
  runAssistant(assistant, message);
};

export default main;
