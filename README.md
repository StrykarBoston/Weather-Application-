
# Weather App 🌤️

This is a simple **Weather App** built using **Node.js**, **Express.js**, and **EJS**. The app allows users to get the current weather information of any city around the world by fetching data from the **OpenWeatherMap API**.

## Features

- Users can search for the current weather of any city.
- Displays temperature, weather conditions, humidity, and more.
- Responsive design with mobile-first approach (CSS used for styling).
- Error handling for invalid city names or API issues.

## Demo

You can try the live version of the app here: [Live Weather App](https://your-app-url.onrender.com)

## Screenshots


![Screenshot 2024-09-13 150223](https://github.com/user-attachments/assets/a0dc4f25-1807-42b4-8356-b0ff703ffef2)



## Tech Stack

- **Node.js** - Server-side JavaScript runtime.
- **Express.js** - Web framework for Node.js.
- **EJS** - Embedded JavaScript templates for rendering dynamic web pages.
- **OpenWeatherMap API** - Used to fetch weather data.
- **CSS** - For responsive styling.

## Installation and Setup

To get a local copy up and running, follow these simple steps:

### Prerequisites

- **Node.js** (version 14+)
- **NPM** (Node Package Manager)
- OpenWeatherMap API Key. You can get it by signing up [here](https://openweathermap.org/api).

### Installation

1. Clone the repository to your local machine:

    ```bash
    git clone https://github.com/StrykarBoston/Weather-Application-
    ```

2. Change directory to the project folder:

    ```bash
    cd weather-app
    ```

3. Install the required NPM packages:

    ```bash
    npm install
    ```

4. Create a `.env` file in the root directory and add your **OpenWeatherMap API Key**:

    ```
    OPENWEATHER_API_KEY=your_api_key_here
    ```

### Running the App

1. Start the server locally:

    ```bash
    npm start
    ```

2. Open your browser and visit `http://localhost:3000`.

## Project Structure

```
/weather-app
│
├── /views
│   ├── index.ejs         # Main page template
│   ├── result.ejs        # Weather result page template
│   ├── error.ejs         # Error page template
│
├── /public
│   └── /css
│       └── style.css     # Stylesheet
│
├── server.js             # Main server-side code
├── package.json          # NPM dependencies and scripts
├── Procfile              # For deployment on platforms like Heroku or Render
└── README.md             # Project documentation
```

## Environment Variables

The following environment variables need to be set up in the `.env` file:

- `OPENWEATHER_API_KEY`: Your API key from OpenWeatherMap.

## Deployment

This app can be easily deployed on **Render**, **Heroku**, or similar platforms.

1. Ensure your `Procfile` is correctly set up with the following line:

    ```
    web: node server.js
    ```

2. Push your project to GitHub and follow the platform-specific deployment instructions.

## License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

---
