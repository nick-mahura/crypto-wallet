import React, { Component } from 'react';
import Item from './Item';

class MainCryptos extends Component {
  render() {
    return (
      <div className="main-cryptos">
        {this.props.mainCryptos.map(crypto => {
          return <Item cryptoBG={crypto.color} name={crypto.name} amount={crypto.amount} imgSrc={crypto.imgSrc} />
        })}
      </div>
    )
  }
}

export default MainCryptos;