const {
  CognitoUserPool,
  CognitoUserAttribute,
  AuthenticationDetails,
  CognitoUser
} = require('amazon-cognito-identity-js');

const poolData = {
  UserPoolId: 'ap-southeast-1_seavR9fhf',
  ClientId: '4hll0j22rr496fb0sp5salgt1u'
};

const userPool = new CognitoUserPool(poolData);

const signUpUser = async (email, password, callback) => {
  const attributeList = [];

  const dataEmail = {
    Name: 'email',
    Value: email
  };

  const attributeEmail = new CognitoUserAttribute(dataEmail);
  attributeList.push(attributeEmail);

  const result = await new Promise((resolve, reject) => {
    userPool.signUp(email, password, attributeList, null, (err, result) => {
      if (err) {
        reject(err);
        return;
      }
      resolve(result);
    });
  });

  const cognitoUser = result.user;
  callback(null, cognitoUser);
};

const loginUser = (email, password, callback) => {
  const authenticationDetails = new AuthenticationDetails({
    Username: email,
    Password: password
  });

  const userData = {
    Username: email,
    Pool: userPool
  };

  const cognitoUser = new CognitoUser(userData);

  cognitoUser.authenticateUser(authenticationDetails, {
    onSuccess: (result) => {
      callback(null, result);
    },
    onFailure: (err) => {
      callback(err, null);
    }
  });
};

module.exports = {
  signUpUser,
  loginUser
};
