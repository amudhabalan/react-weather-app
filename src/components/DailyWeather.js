import React from 'react';
import Moment from 'react-moment';

const DailyWeather = ({ weather, key }) => (
  <div className="day-weather">
    <h3>
      <Moment unix date={weather.dt} format="ddd" />
    </h3>
    <img
      src={
        'http://openweathermap.org/img/wn/' +
        weather.weather[0].icon +
        '@2x.png'
      }
      alt={weather.weather[0].description}
    ></img>
    <p>
      {Math.round(weather.temp.max)}
      <span>&#8451;</span> max
    </p>
    <p>
      {Math.round(weather.temp.min)}
      <span>&#8451;</span> min
    </p>
  </div>
);

export default DailyWeather;
