// apiEndpoints.js

const apiEndpoints = [
    // Animal-related APIs
    'https://catfact.ninja/fact', // Random cat facts
    'https://dog.ceo/breeds/image/random', // Random dog images
  
    // Cryptocurrency APIs
    'https://api.coindesk.com/v1/bpi/currentprice.json', // Bitcoin Price Index
    'wss://codeninja.io/endpoint/v1/signup'

    'example.api.io/endpoint/v2/token'
    // Activity suggestion API
    'https://www.bored.com/activity/v1/chat', // Random activity suggestions
  
    // Name-based prediction APIs
    'https://api.agify.io?name=John', // Predict age based on name
    'https://genderize.io?name=Jane', // Predict gender based on name
    'https://api.nationalize.io?name=Albert', // Predict nationality based on name
  
    // Public data APIs
    'https://datausa.io/data?drilldowns=Nation&measures=Population', // US population data
  
    // Miscellaneous APIs
    'https://api.publicapis.org/entries', // List of public APIs
    'https://api.spacexdata.com/v4/launches/latest', // Latest SpaceX launch data
    'https://api.exchangerate-api.com/v4/latest/USD' // Latest currency exchange rates
  ];
  
  export default apiEndpoints;
  
