const fetch = require ('isomorphic-fetch');
const {urls} = require('./testdata')
const ApolloClient = require ("apollo-boost"). default;

const apolloGraphQLClient = () => { 
  return new ApolloClient ({ 
    uri: urls.test_env, 
    fetch: fetch, 
    headers: { 
      Authorization: `Bearer qJUdE9JeSC2SulvhraQjz3MMfJdOuWUs`, 
      UserType: "guest"
    }, 
    request: (operation) => { 
      operation.setContext ({ 
      }); 
    }, 
  }) ; 
};

module.exports = {apolloGraphQLClient};