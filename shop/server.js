const express = require('express');
const path = require('path');

const app = express();

// Serve static files from the React build folder
app.use(express.static(path.join(__dirname, 'build')));

// Send React's index.html for all requests
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// Start the server on port 5000 (you can change the port number if needed)
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
