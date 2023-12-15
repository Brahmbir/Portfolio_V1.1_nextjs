const Airtable = require("airtable");

// Authenticate
Airtable.configure({
  apiKey: process.env.AIRTABLE_TOKEN,
});

// Initialize a base
const base = Airtable.base(process.env.AIRTABLE_BASE_ID);

export { base };