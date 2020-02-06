import React from "react";
import { Grid, Typography } from "@material-ui/core";
import Moment from "react-moment";

const DailyWeather = ({ weather }) => (
  <Grid item xs={2}>
    <Typography variant="h6">
      <Moment date={weather.applicable_date} format="dddd" />
    </Typography>
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
    <Typography variant="overline">
      <span>{Math.round(weather.max_temp)}&#8451;</span>{" "}
      <span>{Math.round(weather.min_temp)}&#8451;</span>
    </Typography>
    <br></br>
    <Typography variant="body2">Humidity {weather.humidity}%</Typography>
  </Grid>
);

export default DailyWeather;
