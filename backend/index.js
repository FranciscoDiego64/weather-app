// Import express module
const express = require('express');
const axios = require('axios');
const cors = require('cors');

// Create an instance of express
const app = express();

app.use(cors());


// Set the port
const port = 3000;


const ACCUWEATHER_API_KEY = 'md8GA5bWpHoIT2sjQIZ3PWY4kxsfLSuj';

app.get('/weather', async (req, res) => {
    try {
        // Replace 'YOUR_LOCATION_KEY' with the location key for the place you want to get weather information.
        const response = await axios.get(`http://dataservice.accuweather.com/forecasts/v1/daily/5day/178087?apikey=${ACCUWEATHER_API_KEY}`);

        res.send(response.data);
    } catch (error) {
        res.status(500).send('An error occurred while fetching weather data');
    }
});


// Setup a simple route
app.get('/', (req, res) => {
  res.send('Testing weather app!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
