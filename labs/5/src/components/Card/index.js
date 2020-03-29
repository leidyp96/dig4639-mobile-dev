import React from 'react'
import './index.css'


class Card extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      name: '',
      temperature: '',
      temperatureUnit:'',
      detailedForecast:''
    };

}
  render () {
    return (
      <div className="card">
        <h2>{this.props.temperature} {this.props.temperatureUnit}</h2>
        <h3>{this.props.name}</h3>
        <p>{this.props.detailedForecast}</p>

      </div>
    )
  }
}
export default Card;