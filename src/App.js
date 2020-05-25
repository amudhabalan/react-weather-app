import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import DailyWeather from './components/DailyWeather';
import TodaysWeather from './components/TodaysWeather';
import axios from 'axios';

export class WeatherApp extends Component {
  // Melbourne's lat long values are hardcoded. and my OpenWeather API Key
  componentDidMount() {
    axios
      .get(
        'https://api.openweathermap.org/data/2.5/onecall?lat=37.8136&lon=-144.9631&exclude=minutely,hourly&appid=83fccf0f478797fd21d2b3595c839800&units=metric'
      )
      .then(response => {
        this.props.setWeather(response.data);
      });
  }

  render() {
    const theme = this.props.darkMode ? 'dark' : 'light';
    if (this.props.weather) {
      return (
        <div className="container">
          <div className={'inner-container ' + theme}>
            <TodaysWeather
              city="Melbourne"
              weather={this.props.weather.current}
              toggleMode={this.props.toggleMode}
              max={this.props.weather.daily[0].temp.max}
              min={this.props.weather.daily[0].temp.min}
            />
            <div className="daily-weather">
              {this.props.weather.daily.map((dailyWeather, key) => (
                <DailyWeather weather={dailyWeather} key={key} />
              ))}
            </div>
          </div>
        </div>
      );
    } else {
      return null;
    }
  }
}

const mapStateToProps = state => {
  return {
    weather: state.weather,
    darkMode: state.darkMode
  };
};

const mapDispatchToProps = dispatch => {
  return {
    toggleMode: () => dispatch({ type: 'TOGGLE_MODE' }),
    setWeather: weather => dispatch({ type: 'SET_WEATHER', payload: weather })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(WeatherApp);
