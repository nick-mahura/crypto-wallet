import React, { Component } from 'react';

class Item extends Component {
  render () {
    return (
      <li className="other-cryptos__item">
        <img className="other-cryptos__image" src={this.props.imgSrc} alt={this.props.name} />
        <table className="other-cryptos__table">
          <tr>
            <td>{this.props.name}</td>
            <td>$ {this.props.amountPrevious}</td>
            <td>$ {this.props.amountCurrent}</td>
          </tr>
          <tr>
            <td>{this.props.shortName}</td>
            <td>{this.props.currencyAmmount} BTC</td>
            <td>{this.props.percentage}%
                <span className="arrow-up">&#8593;</span>
            </td>
          </tr>
        </table>
      </li>
    )
  }
}

export default Item;