// Write your JS code here
// src/components/CryptocurrencyItem/index.js
import React from 'react'

const CryptocurrencyItem = ({crypto}) => (
  <li>
    <img src={crypto.currency_logo} alt={crypto.currency_name} />
    <p>Currency Name: {crypto.currency_name}</p>
    <p>USD Value: ${crypto.usd_value}</p>
    <p>Euro Value: €{crypto.euro_value}</p>
  </li>
)

export default CryptocurrencyItem
