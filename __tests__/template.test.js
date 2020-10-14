// Write the tests here
const {apolloGraphQLClient} = require ("../client-setup"); 
const {retreiveBookings, userdetails} = require ("../queries/my-queries");
//const {fetchtoken} = require("../fetchToken")
let client;

/*const accountDetails = { 
  token: fetchtoken()
};*/
describe ("Tests the bookings query", () => { 
  beforeAll (() => { 
    client = apolloGraphQLClient (); 
  });
test ("Fetches all the bookings", async () => { 
    const graphQLdata = await client.query ({ 
      query: retreiveBookings, 
    }); 
    expect (graphQLdata) .toBeTruthy (); 
    console.log(graphQLdata.data.bookings.items[0].id);
  }); 
});

describe ("Tests the user details query", () => { 
  beforeAll (() => { 
    client = apolloGraphQLClient (); 
  });
test ("Fetches the user information", async () => { 
    const graphQLdata = await client.query ({ 
      query: userdetails, 
    }); 
    expect (graphQLdata) .toBeTruthy (); 
    console.log(graphQLdata.data.me.firstname);
    expect(graphQLdata.data.me.firstName).toBe('prashant');
  }); 
});