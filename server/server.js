const express = require('express')
const { OpenAI } =  require("openai");
const app = express()
const port = 3000
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

require('dotenv').config();

const configuration = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY 
});

app.post('/api/generator', async (req, res) => {
  const term = req.body.term || '';
  if (term.trim().length === 0 || term.trim().length > 30) {
      res.status(400).json({
          error: {
              message: "Please enter a valid term",
          }
      });
      return;
  }

  try {
      const completion = await configuration.chat.completions.create({
          model: "gpt-3.5-turbo-0125",
          messages: [
            {"role": "user", "content": `Explain what ${term} in investments is, in less than 15 words`}
          ]
      });
      res.status(200).json({ result: completion.choices[0].message.content });
  } catch(error) {
      if (error.response) {
          console.error(error.response.status, error.response.data);
          res.status(error.response.status).json(error.response.data);
      } else {
          console.error(`Error with OpenAI API request: ${error.message}`);
          res.status(500).json({
              error: {
              message: 'An error occurred during your request.',
              }
          });
      }
  }   
})

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})