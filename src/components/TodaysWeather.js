import React from "react";
import { Grid, Typography } from "@material-ui/core";
import Moment from "react-moment";

const TodaysWeather = ({ weather }) => (
  <React.Fragment>
    <Grid item xs={6}>
      <Typography>
        <Typography variant="h6"><Moment date={weather.applicable_date} format="dddd MMM, Do" /></Typography>
        {weather.weather_state_name}
        <br></br>
        <img
          src={
            "https://www.metaweather.com/static/img/weather/ico/" +
            weather.weather_state_abbr +
            ".ico"
          }
          alt={weather.weather_state_name}
        ></img><Typography variant="h5">{Math.round(weather.the_temp)}<span>&#8451;</span></Typography>
      </Typography>
    </Grid>
    <Grid item xs={6}>
      <Typography variant="body1">
        Wind Speed: {Math.round(weather.wind_speed)} mph
        <br></br>Humidity: {Math.round(weather.humidity)}%<br></br>Air Pressure:{" "}
        {Math.round(weather.air_pressure)} mbar
      </Typography>
    </Grid>
  </React.Fragment>
);

export default TodaysWeather;
