import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import DailyWeather from './components/DailyWeather';
import TodaysWeather from './components/TodaysWeather';

// import axios from "axios";

export class WeatherApp extends Component {
  // Unable to  use the API request as the MetaWeather site does not allow cross domain requests. So using a sample response
  // componentDidMount() {
  //   axios
  //     .get("https://www.metaweather.com/api/location/1103816/")
  //     .then(response => {
  //       this.setState({
  //         weather: response.data
  //       });
  //     });
  // }

  render() {
    const theme = this.props.darkMode ? 'dark' : 'light';
    return (
      <div className="container">
        <div className={'inner-container ' + theme}>
          <TodaysWeather
            city={this.props.weather.title}
            weather={this.props.weather.consolidated_weather[0]}
            toggleMode={this.props.toggleMode}
          />
          <div className="daily-weather">
            {this.props.weather.consolidated_weather.map(
              (dailyWeather, key) => (
                <DailyWeather weather={dailyWeather} key={key} />
              )
            )}
          </div>
        </div>
      </div>
    );
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
    toggleMode: () => dispatch({ type: 'TOGGLE_MODE' })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(WeatherApp);
