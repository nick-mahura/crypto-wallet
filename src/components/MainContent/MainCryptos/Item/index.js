import React, { Component } from 'react';

class Item extends Component {
  render() {
    return (
      <div className={"main-cryptos__item main-cryptos__item--"+(this.props.cryptoBG)}>
        <img className="main-cryptos__currency-image" src={this.props.imgSrc} alt="" />
        <div>
          <p>{this.props.name}</p>
          <p>{this.props.amount} $</p>
        </div>
      </div>
    )
  }
}

export default Item;