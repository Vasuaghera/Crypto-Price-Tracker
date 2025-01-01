# Crypto Price Tracking Project

This project is a simple **Crypto Price Tracking** application built using **React**. It allows users to view the top 10 cryptocurrencies, search for any cryptocurrency, and analyze its price and historical data by showing a chart. This project is a **frontend-only** project, so functionalities like signup, login, etc., are not operational.

## Preview

You can view the live version of this project here:

[Crypto Price Tracker - Live Preview](https://crypto-price-tracker-chi.vercel.app)


## Features

- **Home Screen**: Displays the top 10 cryptocurrencies with their current price.
- **Search Functionality**: Allows users to search for a specific cryptocurrency by name.
- **Crypto Analysis**: On selecting a cryptocurrency, users can see detailed information about that coin, including charts and additional data.
- **Chart Display**: Displays a graphical chart showing the cryptocurrency's price trend over time (using charting libraries like Chart.js or similar).

## Technologies Used

- **React**: JavaScript library for building the user interface.
- **Chart.js**: Used to display charts and graphs.
- **React Context API**: Used for global state management to store cryptocurrency data and pass it throughout the app.
- **React Router**: For navigation between components.

## How It Works

1. **Top 10 Cryptos**: The home page loads the top 10 cryptocurrencies based on their current market price using a public API.
2. **Search Function**: Users can type the name of a cryptocurrency in the search bar to find its details.
3. **Crypto Details**: Upon clicking on a cryptocurrency, users are redirected to a detailed view showing its current price, market cap, volume, and a historical price chart.
4. **Chart Display**: The chart shows the price trend of the selected cryptocurrency over time.

## Setup and Installation

1. **Clone the repository**:
    - You can clone this repository to your local machine using:

2. **Install dependencies**:
    - Navigate to the project folder and install the necessary dependencies:
    ```bash
    npm install
    ```

3. **Run the app**:
    - Once the dependencies are installed, start the development server:
    ```bash
    npm run dev 
    ```
    - This will run the app locally at `http://localhost:5173/`.
