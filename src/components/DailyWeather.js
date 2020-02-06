import React from "react";
import Grid from "@material-ui/core/Grid";
import Moment from "react-moment";

const DailyWeather = ({ weather }) => (
  <Grid item xs={2}>
    <p>
      <Moment date={weather.applicable_date} format="dddd" />
      <br></br>
      <img
        src={
          "https://www.metaweather.com/static/img/weather/ico/" +
          weather.weather_state_abbr +
          ".ico"
        }
        alt={weather.weather_state_name}
      ></img>
      <br></br>
      <span>{Math.round(weather.max_temp)}&#8451;</span> <span>{Math.round(weather.min_temp)}&#8451;</span>
      <br></br>Humidity {weather.humidity}%
    </p>
  </Grid>
);

export default DailyWeather;
