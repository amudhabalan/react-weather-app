import React from "react";
import Grid from "@material-ui/core/Grid";
import Moment from "react-moment";

const TodaysWeather = ({ weather }) => (
  <React.Fragment>
    <Grid item xs={6}>
      <p>
        <Moment date={weather.applicable_date} format="dddd MMM, Do" />
        <br></br>
        {weather.weather_state_name}
        <br></br>
        <img
          src={
            "https://www.metaweather.com/static/img/weather/ico/" +
            weather.weather_state_abbr +
            ".ico"
          }
          alt={weather.weather_state_name}
        ></img><h1>{Math.round(weather.the_temp)}<span>&#8451;</span></h1>
      </p>
    </Grid>
    <Grid item xs={6}>
      <p>
        Wind Speed: {Math.round(weather.wind_speed)} mph
        <br></br>Humidity: {Math.round(weather.humidity)}%<br></br>Air Pressure:{" "}
        {Math.round(weather.air_pressure)} mbar
      </p>
    </Grid>
  </React.Fragment>
);

export default TodaysWeather;
