const express = require('express');
const fetch = require('node-fetch');
const app = express();

app.use(express.json());

app.get('/fetch-data', async (req, res) => {
  const { url } = req.query;

  try {
    const response = await fetch(url);
    const data = await response.text();
    res.send(data);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
