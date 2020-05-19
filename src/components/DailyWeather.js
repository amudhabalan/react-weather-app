import React from 'react';
import Moment from 'react-moment';

const DailyWeather = ({ weather, key }) => (
  <div className="day-weather">
    <h3>
      <Moment date={weather.applicable_date} format="ddd" />
    </h3>
    <img
      src={
        'https://www.metaweather.com/static/img/weather/ico/' +
        weather.weather_state_abbr +
        '.ico'
      }
      alt={weather.weather_state_name}
    ></img>
    <p>
      {Math.round(weather.max_temp)}
      <span>&#8451;</span> max
    </p>
    <p>
      {Math.round(weather.min_temp)}
      <span>&#8451;</span> min
    </p>
  </div>
);

export default DailyWeather;
