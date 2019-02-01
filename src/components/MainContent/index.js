import React, { Component } from 'react';

import MainCryptos from './MainCryptos';
import CryptosList from './CryptosList';

class MainContent extends Component {
  render() {
    return (
      <div className="additional">
        <MainCryptos mainCryptos={this.props.mainCryptos} />
        <CryptosList cryptosList={this.props.cryptosList} />
      </div>
    );
  }
}

export default MainContent;