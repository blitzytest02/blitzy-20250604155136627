// Node.js Express Tutorial Server
// This file demonstrates Express.js framework with multiple HTTP endpoints

// Section 1: Framework Import and Initialization
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Section 2: Existing Endpoint Preservation - GET /hello
// Returns "Hello world" response as specified in requirements
app.get('/hello', (req, res) => {
  console.log(`${new Date().toISOString()} - GET /hello`);
  res.send('Hello world');
});

// Section 3: New Endpoint Addition - GET /evening
// Returns "Good evening" response as specified in requirements
app.get('/evening', (req, res) => {
  console.log(`${new Date().toISOString()} - GET /evening`);
  res.send('Good evening');
});

// Section 4: Optional Root Endpoint - GET /
// Provides endpoint documentation for users accessing base URL
app.get('/', (req, res) => {
  console.log(`${new Date().toISOString()} - GET /`);
  res.send('Node.js Express Tutorial - Available endpoints: GET /hello, GET /evening');
});

// Section 5: Server Activation
// Bind Express application to configured port and start accepting connections
app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
  console.log(`Available endpoints:`);
  console.log(`  - GET /hello  -> Returns "Hello world"`);
  console.log(`  - GET /evening -> Returns "Good evening"`);
});
