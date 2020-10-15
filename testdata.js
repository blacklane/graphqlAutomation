const urls = {
    test_env: 'https://graphql.blacklane.io/graphql',
    athena_test: 'http://athena-testing.int.blacklane.io/oauth/token'
}

const fetchTokenData = {
    clientId: "PFULgApKx9h3hvjxegR6hhWuipgWVmg9",
    client_secret: "buU5Kyw83EbXDroBIaoFLXaXBUOtCd92",
    email: "prashant.tiwari+passenger@blacklane.com",
    password: "blacklane",
    resourceOwnerType: "driver" ,
    grantType: "implicit"
}

const mutationData = {
    clientId: "u24XpG36M8EcZXp3OIO5LyeZLM6YMZj6",
    email: "prashant.tiwari+passenger@blacklane.com",
    password: "blacklane",
    resourceOwnerType: "driver" ,
    grantType: "implicit"
}

const names = {
    firstname: 'prashant',
    lastname: 'tiwari'
}

module.exports = {urls, mutationData, fetchTokenData, names}