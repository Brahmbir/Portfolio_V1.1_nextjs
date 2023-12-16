const Airtable = require("airtable");

const Base = new Airtable({endpointUrl: 'https://api.airtable.com',apiKey:  process.env.AIRTABLE_TOKEN}).base(process.env.AIRTABLE_BASE_ID);

export default Base ;