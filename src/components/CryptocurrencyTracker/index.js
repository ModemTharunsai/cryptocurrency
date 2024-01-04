import React, { Component } from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import CryptocurrenciesList from './components/CryptocurrenciesList'

class CryptocurrencyTracker extends Component {
  state = {
    cryptocurrencies: [],
    isLoading: true,
  }

  componentDidMount() {
    this.getCryptocurrenciesData()
  }

  getCryptocurrenciesData = async () => {
    try {
      const response = await fetch(
        'https://apis.ccbp.in/crypto-currency-converter'
      )
      const data = await response.json()
      this.setState({ cryptocurrencies: data, isLoading: false })
    } catch (error) {
      console.error('Error fetching data:', error)
      this.setState({ isLoading: false })
    }
  }

  renderCryptocurrenciesList = () => {
    const { cryptocurrencies } = this.state
    return (
      <div>
        <h1>Cryptocurrency Tracker</h1>
        <CryptocurrenciesList cryptocurrencies={cryptocurrencies} />
      </div>
    )
  }

  render() {
    const { isLoading } = this.state

    return (
      <div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
          alt="cryptocurrency"
        />
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="Rings" color="#ffffff" height={80} width={80} />
          </div>
        ) : (
          this.renderCryptocurrenciesList()
        )}
      </div>
    )
  }
}

export default CryptocurrencyTracker
