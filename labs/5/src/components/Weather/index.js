import React from 'react';
import Card from '../Card/index.js'

class Weather extends React.Component {

  constructor(props) {
    super(props);

    this.state = {periods: []};

  }

  componentDidMount() {

    window.fetch("https://api.weather.gov/gridpoints/MLB/25,69/forecast")
    .then((res) => res.json())
    .then((data) => {
      this.setState({periods: data.properties.periods});
    });

  }

  render() {
    return (
      <div>
       {
         this.state.periods.map((v) => {
           return <Card  
           temperature={v.temperature}
           name={v.name}
           temperatureUnit={v.temperatureUnit}
           detailedForecast={v.detailedForecast} />;
         })
       }
      </div>
    );
  }
}

export default Weather;
