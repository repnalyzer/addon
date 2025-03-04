// apiEndpoints.js

const apiEndpoints = [
    // Animal-related APIs
    'https://catfact.ninja/fact', // Random cat facts
    'https://dog.ceo/api/breeds/image/random', // Random dog images
  
    // Cryptocurrency APIs
    'https://api.coindesk.com/v1/bpi/currentprice.json', // Bitcoin Price Index
  
    // Activity suggestion API
    'https://www.boredapi.com/api/activity', // Random activity suggestions
  
    // Name-based prediction APIs
    'https://api.agify.io?name=John', // Predict age based on name
    'https://api.genderize.io?name=Jane', // Predict gender based on name
    'https://api.nationalize.io?name=Albert', // Predict nationality based on name
  
    // Public data APIs
    'https://datausa.io/api/data?drilldowns=Nation&measures=Population', // US population data
  
    // Miscellaneous APIs
    'https://api.publicapis.org/entries', // List of public APIs
    'https://api.spacexdata.com/v4/launches/latest', // Latest SpaceX launch data
    'https://api.exchangerate-api.com/v4/latest/USD' // Latest currency exchange rates
  ];
  
  export default apiEndpoints;
  