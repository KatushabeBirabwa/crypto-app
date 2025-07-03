// src/components/CryptoDashboard.tsx

import React, { useEffect, useState } from "react";

import axios from "axios"; // Import axios for API requests

const CryptoDashboard = () => {
  const [cryptoData, setCryptoData] = useState<any>(null); // State to store the fetched data
  const [error, setError] = useState<string>(""); // State for any errors

  useEffect(() => {
    // Function to fetch real-time data
    const fetchCryptoData = async () => {
      try {
        const response = await axios.get("https://api.coingecko.com/api/v3/coins/markets", {
          params: {
            vs_currency: "usd", // Fetch in USD
            ids: "bitcoin,ethereum,litecoin", // Add more coins as needed
          },
        });
        setCryptoData(response.data); // Set the fetched data into state
      } catch (err) {
        setError("Failed to fetch data."); // Set error state
        console.error(err);
      }
    };

    // Fetch data on component mount
    fetchCryptoData();

    // Optionally, refresh data every 30 seconds
    const intervalId = setInterval(fetchCryptoData, 30000); // Refresh every 30 seconds

    // Cleanup the interval when component unmounts
    return () => clearInterval(intervalId);
  }, []); // Empty dependency array to fetch only once when component mounts

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="crypto-dashboard">
      <h1 className="title">Crypto Dashboard</h1>
      {cryptoData ? (
        <div className="crypto-list">
          <ul>
            {cryptoData.map((coin: any) => (
              <li key={coin.id} className="crypto-item">
                <div className="crypto-header">
                  <h2>{coin.name} ({coin.symbol.toUpperCase()})</h2>
                </div>
                <div className="crypto-details">
                  <p><strong>Current Price:</strong> ${coin.current_price}</p>
                  <p><strong>Market Cap:</strong> ${coin.market_cap.toLocaleString()}</p>
                  <p><strong>24h Change:</strong> {coin.price_change_percentage_24h.toFixed(2)}%</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p>Loading...</p>
      )}
      <footer className="author-footer">
      <p>Copyright 2025</p>
        <p>Author: Katu Birabwa</p>
      </footer>
    </div>
  );
};

export default CryptoDashboard;
