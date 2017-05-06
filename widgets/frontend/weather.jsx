import React from 'react';
class Weather extends React.Component {
  constructor() {
    super();
    this.state = { weather: { main: "" } };
  }

  componentDidMount() { this.getLocation(); }

  getLocation() {
    const success = (pos) => {
      const lat  = pos.coords.latitude;
      const lon = pos.coords.longitude;
      this.getWeather(lat, lon);
    };
    const error = () => {
      console.log('Could not retrieve weather information');
    };

    navigator.geolocation.getCurrentPosition(success, error);
  }

  getWeather(lat, lon) {
    const xmlHttpRequest = new XMLHttpRequest();
    const url = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=a72e20a5d5d6efde6ec971813e95359e`;
    xmlHttpRequest.open("GET", url);
    xmlHttpRequest.onload = () => {
      const res = JSON.parse(xmlHttpRequest.response);
      console.log(res.main);
      this.setState({ weather: res });
    };

    xmlHttpRequest.send();

  }

  render() {
    let weather = this.state.weather;
    console.log(weather);
    return (
        <div className="weather-container">
          <h1>Weather</h1>
          <div className="weather">
            <ul>
              <li>{ weather.name }</li>
            </ul>
            <ul>
              <li>{ Math.round(weather.main.temp - 273) + " °C" }</li>
            </ul>
          </div>
        </div>
    );
  }
}

module.exports = Weather;
