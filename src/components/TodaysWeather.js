import React from 'react';
import Moment from 'react-moment';

const TodaysWeather = ({ city, weather, toggleMode, max, min }) => (
  <React.Fragment>
    <div className="todays-weather-left">
      <h1>{city}</h1>
      <p>
        <Moment unix date={weather.dt} format="dddd MMM, Do" />
      </p>

      <h2>
        {Math.round(weather.temp)}
        <span>&#8451;</span>{' '}
        <img
          src={
            'http://openweathermap.org/img/wn/' +
            weather.weather[0].icon +
            '@2x.png'
          }
          alt={weather.weather[0].description}
        ></img>
      </h2>
      <p>{weather.weather[0].main}</p>
    </div>
    <div className="todays-weather-right">
      <div className="mode-switch">
        <label className="switch">
          <input type="checkbox" onClick={toggleMode}></input>
          <span className="slider round"></span>
        </label>
      </div>
      <div className="weather-details">
        <p>
          Max: {Math.round(max)}
          <span>&#8451;</span>
        </p>
        <p>
          Min: {Math.round(min)}
          <span>&#8451;</span>
        </p>
        <p>Wind Speed: {Math.round(weather.wind_speed)} mph</p>
        <p>Humidity: {Math.round(weather.humidity)}%</p>
        <p>Pressure: {Math.round(weather.pressure)} mbar</p>
      </div>
    </div>
  </React.Fragment>
);

export default TodaysWeather;
