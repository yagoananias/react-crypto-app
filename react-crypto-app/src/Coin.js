import React from 'react'

const Coin = ({name, image, symbol, price, volume, priceChange, marketcap}) => {
  return (
    <div className="coin-container">
      <div className="coin-row">
        <div className="coin">
          <img src={image} alt="crypto"/>
          <h1>{name}</h1>
          <p className="coin-symbol">{symbol}</p>
        </div>
        <div className="coin-data">
          <p className="coin-price">R${price}</p>
          <p className="coin-volume">R${volume.toLocaleString()}</p>
          {priceChange < 0 ? (
            <p className="coin-percent red">{priceChange}%</p>
          ) : (
            <p className="coin-percent green">{priceChange}%</p>
          )}
          <p className="coin-marketcap">
            Mkt Cap: R${marketcap.toLocaleString()}
          </p>
        </div>
      </div>
      
    </div>
  )
}

export default Coin
