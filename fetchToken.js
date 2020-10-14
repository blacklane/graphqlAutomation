const fetch = require ('isomorphic-fetch');
const {urls} = require('./testdata')
const {fetchTokenData} = require("./testdata") 

const fetchtoken = () => {
    fetch(urls.athena_test, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify({
          "client_id": fetchTokenData.clientId,
          "client_secret": fetchTokenData.client_secret,
          "username": fetchTokenData.email,
          "password": fetchTokenData.password,
          "grant_type": 'password'
        })
      })
      
        .then((response) => response.json())
            .then((responseJson) =>{
              //console.log("Res:" + JSON.stringify(responseJson));
              //console.log("The token is: " + JSON.stringify(responseJson.result.access_token));
              return responseJson.result.access_token
              //localStorage.setItem('id_token', user.id_token)
              //localStorage.setItem('id_token', user.access_token)
              
              //return history.push('/homepage')
          })
          .catch((error)=>{
              console.error(error);
          });
};

module.exports = {fetchtoken};