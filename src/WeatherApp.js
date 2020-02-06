import React, { Component } from "react";
import { Grid, Typography } from "@material-ui/core";
import { connect } from "react-redux";
import DailyWeather from "./components/DailyWeather";
import TodaysWeather from "./components/TodaysWeather";
import IconButton from "@material-ui/core/IconButton";
import RefreshIcon from "@material-ui/icons/Refresh";
// import axios from "axios";

class WeatherApp extends Component {
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
    return (
      <Grid container>
        <Grid item xs={12}>
          <Typography variant="h4">
            {this.props.weather.title}
            <span>
              <IconButton>
                <RefreshIcon onClick={this.props.onRefresh}/>
              </IconButton>
            </span>
          </Typography>
        </Grid>
        <TodaysWeather weather={this.props.weather.consolidated_weather[0]} />
        {this.props.weather.consolidated_weather.map(dailyWeather => (
          <DailyWeather weather={dailyWeather} />
        ))}
      </Grid>
    );
  }
}

const mapStateToProps = state => {
  return {
    weather: state.weather
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onRefresh: () => dispatch({type: 'REFRESH'})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(WeatherApp);
