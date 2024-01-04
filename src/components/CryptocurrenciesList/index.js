import React from 'react'
import CryptocurrencyItem from './components/CryptocurrencyItem'

const CryptocurrenciesList = ({cryptocurrencies}) => (
  <ul>
    {cryptocurrencies.map(crypto => (
      <CryptocurrencyItem key={crypto.id} crypto={crypto} />
    ))}
  </ul>
)

export default CryptocurrenciesList
