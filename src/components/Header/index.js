import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <div className="header">
        <p className="header__page-name">Wallet</p>
        <h2 className="header__cash-amount">$ 12,349.12</h2>
        <p className="header__cash-differ">+$ 342.12 (53%) <span className="arrow-up">&#8593;</span></p>
      </div>
    );
  }
}

export default Header;