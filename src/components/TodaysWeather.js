import React from 'react';
import Moment from 'react-moment';

const TodaysWeather = ({ city, weather, toggleMode }) => (
  <React.Fragment>
    <div className="todays-weather-left">
      <h1>{city}</h1>
      <p>
        <Moment date={weather.applicable_date} format="dddd MMM, Do" />
      </p>

      <h2>
        {Math.round(weather.the_temp)}
        <span>&#8451;</span>{' '}
        <img
          src={
            'https://www.metaweather.com/static/img/weather/ico/' +
            weather.weather_state_abbr +
            '.ico'
          }
          alt={weather.weather_state_name}
        ></img>
      </h2>
      <p>{weather.weather_state_name}</p>
    </div>
    <div className="todays-weather-right">
      <div className="mode-switch">
        <label class="switch">
          <input type="checkbox" onClick={toggleMode}></input>
          <span class="slider round"></span>
        </label>
      </div>
      <div className="weather-details">
        <p>Wind Speed: {Math.round(weather.wind_speed)} mph</p>
        <p>Humidity: {Math.round(weather.humidity)}%</p>
        <p>Air Pressure: {Math.round(weather.air_pressure)} mbar</p>
      </div>
    </div>
  </React.Fragment>
);

export default TodaysWeather;
