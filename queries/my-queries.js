
// Enter all the queries here
const {mutationData} = require("../testdata")
const gql = require ("graphql-tag");
const { parse } = require ("graphql")

const retreiveBookings = gql` 
{
  bookings(filter: {timeState: upcoming}) {
      items {
      id
      services {
          status
          date
          passengers {
          firstName
          lastName
          }
          pickup	{
          name
          address
          }
          dropoff	{
          name
          address
          }
          distance
          duration
          category
          serviceScope
      }
      }
  }
  }
`;

const chauffeurLogin = gql` 
mutation {
    chauffeurLogin(
      clientId: "${mutationData.clientId}",
      email: "${mutationData.email}",
      password: "${mutationData.password}",
      resourceOwnerType: ${mutationData.resourceOwnerType} ,
      grantType: ${mutationData.grantType}
    ){
      success,
      errors{message},
      accessToken {
        accessToken
        tokenType
        expiresIn
      }
    }
  }
`;

const userdetails = gql` 
{
  me{
    uuid,
    firstName,
    lastName,
    email,
    locale,
    corporationName
  }
}
`;

module.exports = {retreiveBookings, chauffeurLogin, userdetails}