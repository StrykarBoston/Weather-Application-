const express = require('express');
const axios = require('axios');
const app = express();

// Set EJS as the view engine
app.set('view engine', 'ejs');

// Middleware to serve static files
app.use(express.static('public'));

// Routes
app.get('/', (req, res) => {
    res.render('index');
});

app.get('/weather', async (req, res) => {
    const city = req.query.city;
    const apiKey = 'f3abbdd14468e3cb7dec995eb6115e04';
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await axios.get(url);
        const weatherData = response.data;
        res.render('weather', { weather: weatherData });
    } catch (error) {
        res.render('error', { message: 'City not found. Please try again.' });

    }
});

app.listen(3000, () => {
    console.log('Server started on port 3000');
});