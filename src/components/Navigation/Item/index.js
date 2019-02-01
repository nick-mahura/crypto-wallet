import React, { Component } from 'react';

class Item extends Component {
  render() {
    return (
      <li className="navigation__item">
        <img className="navigation__image" src={this.props.imgSrc} alt={this.props.name}/>
        <p>{this.props.name}</p>
      </li>
    )
  }
}

export default Item;