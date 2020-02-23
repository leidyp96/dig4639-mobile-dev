import React from 'react';
import './index.css'

class Card extends React.Component{
  render () {
    return (
      <div className="card">
      <p>{this.props.content}</p>
      </div>
    );
  }
}
export default Card;