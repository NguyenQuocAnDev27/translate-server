const express = require('express');
const { translate } = require('google-translate-api-browser');
const cors = require('cors');

const app = express();
const PORT = 9000;

// Enable CORS for all routes
app.use(cors());

// Middleware to parse JSON
app.use(express.json());

// Translation API endpoint
app.post('/translate', async (req, res) => {
  const { text, targetLang } = req?.body;
  console.log(`Request: ${text} - ${targetLang}`);

  if (!text || !targetLang) {
    return res.status(400).json({ error: 'Missing required parameters' });
  }

  if (text == null || targetLang == null) {
    return res.status(400).json({ error: 'Parameters is null. Can\'t read' });
  }

  try {
    const result = await translate(text, {
      to: targetLang,
      corsUrl: 'http://cors-anywhere.herokuapp.com/'
    });

    return res.json({
      originalText: text,
      translatedText: result.text,
    });
  } catch (error) {
    console.error('Translation error:', error);
    return res.status(500).json({ error: 'Translation failed' });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
