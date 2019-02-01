import React, { Component } from 'react';

import Item from './Item';

class CryptosList extends Component {
  render () {
    return (
      <div className="other-cryptos">
        <div className="other-cryptos__buttons">
          <button>Highest Holdings <span>&#x02228;</span></button>
          <button>Last 24h <span>&#x02228;</span></button>
        </div>
        <ul className="other-cryptos__list">
          {this.props.cryptosList.map(crypto => {
            return (
              <Item name={crypto.name} shortName={crypto.nameShort} amountPrevious={crypto.amountPrevious} currencyAmmount={crypto.currencyAmmount} amountCurrent={crypto.amountCurrent} percentage={crypto.percentage} imgSrc={crypto.imgSrc} />
            )
          })}
        </ul>
      </div>
    )
  }
}

export default CryptosList;