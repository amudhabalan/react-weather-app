const initialState = {
  weather: {
    consolidated_weather: [
      {
        id: 5814427125284864,
        weather_state_name: "Light Cloud",
        weather_state_abbr: "lc",
        wind_direction_compass: "SSE",
        created: "2020-02-05T09:41:55.018446Z",
        applicable_date: "2020-02-05",
        min_temp: 14.245,
        max_temp: 21.66,
        the_temp: 20.700000000000003,
        wind_speed: 6.767499617808002,
        wind_direction: 156.17734157789738,
        air_pressure: 1019.5,
        humidity: 69,
        visibility: 13.588455917442138,
        predictability: 70
      },
      {
        id: 6157473436139520,
        weather_state_name: "Heavy Cloud",
        weather_state_abbr: "hc",
        wind_direction_compass: "SSE",
        created: "2020-02-05T09:41:57.976968Z",
        applicable_date: "2020-02-06",
        min_temp: 16.91,
        max_temp: 25.975,
        the_temp: 25.66,
        wind_speed: 4.707816743625229,
        wind_direction: 166.38977692035832,
        air_pressure: 1014.5,
        humidity: 71,
        visibility: 13.558940785810865,
        predictability: 71
      },
      {
        id: 5648493748158464,
        weather_state_name: "Light Rain",
        weather_state_abbr: "lr",
        wind_direction_compass: "S",
        created: "2020-02-05T09:42:01.539080Z",
        applicable_date: "2020-02-07",
        min_temp: 15.725000000000001,
        max_temp: 23.66,
        the_temp: 23.14,
        wind_speed: 5.0334715475065614,
        wind_direction: 189.00078370133372,
        air_pressure: 1018.5,
        humidity: 62,
        visibility: 14.12128171478565,
        predictability: 75
      },
      {
        id: 6198419884343296,
        weather_state_name: "Light Cloud",
        weather_state_abbr: "lc",
        wind_direction_compass: "ESE",
        created: "2020-02-05T09:42:04.050586Z",
        applicable_date: "2020-02-08",
        min_temp: 17.305,
        max_temp: 24.805,
        the_temp: 24.395,
        wind_speed: 6.802287179174951,
        wind_direction: 106.6296805717491,
        air_pressure: 1022,
        humidity: 60,
        visibility: 13.912811679790027,
        predictability: 70
      },
      {
        id: 6510808961908736,
        weather_state_name: "Heavy Cloud",
        weather_state_abbr: "hc",
        wind_direction_compass: "E",
        created: "2020-02-05T09:42:07.056757Z",
        applicable_date: "2020-02-09",
        min_temp: 19.54,
        max_temp: 24.47,
        the_temp: 23.81,
        wind_speed: 7.071792601664943,
        wind_direction: 93.47625571165976,
        air_pressure: 1021,
        humidity: 68,
        visibility: 12.729410244174023,
        predictability: 71
      },
      {
        id: 4681221613289472,
        weather_state_name: "Light Rain",
        weather_state_abbr: "lr",
        wind_direction_compass: "ESE",
        created: "2020-02-05T09:42:10.066577Z",
        applicable_date: "2020-02-10",
        min_temp: 19.705,
        max_temp: 23.895,
        the_temp: 21.34,
        wind_speed: 4.327069116360455,
        wind_direction: 107.00000000000001,
        air_pressure: 1023,
        humidity: 82,
        visibility: 9.999726596675416,
        predictability: 75
      }
    ],
    time: "2020-02-05T22:47:53.124563+11:00",
    sun_rise: "2020-02-05T06:38:30.306210+11:00",
    sun_set: "2020-02-05T20:30:07.421803+11:00",
    timezone_name: "LMT",
    parent: {
      title: "Australia",
      location_type: "Country",
      woeid: 23424748,
      latt_long: "-24.912100,133.397552"
    },
    sources: [
      {
        title: "BBC",
        slug: "bbc",
        url: "http://www.bbc.co.uk/weather/",
        crawl_rate: 360
      },
      {
        title: "Forecast.io",
        slug: "forecast-io",
        url: "http://forecast.io/",
        crawl_rate: 480
      },
      {
        title: "HAMweather",
        slug: "hamweather",
        url: "http://www.hamweather.com/",
        crawl_rate: 360
      },
      {
        title: "Met Office",
        slug: "met-office",
        url: "http://www.metoffice.gov.uk/",
        crawl_rate: 180
      },
      {
        title: "OpenWeatherMap",
        slug: "openweathermap",
        url: "http://openweathermap.org/",
        crawl_rate: 360
      },
      {
        title: "Weather Underground",
        slug: "wunderground",
        url: "https://www.wunderground.com/?apiref=fc30dc3cd224e19b",
        crawl_rate: 720
      },
      {
        title: "World Weather Online",
        slug: "world-weather-online",
        url: "http://www.worldweatheronline.com/",
        crawl_rate: 360
      }
    ],
    title: "Melbourne",
    location_type: "City",
    woeid: 1103816,
    latt_long: "-37.817532,144.967148",
    timezone: "Australia/Melbourne"
  }
};

const reducer = (state = initialState, action) => {
  return state;
};

export default reducer;
