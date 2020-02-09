import React from "react";
import TodaysWeather from "../TodaysWeather";
import Adapter from "enzyme-adapter-react-16";
import { configure, shallow } from "enzyme";

configure({ adapter: new Adapter() });

const weather = {
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
};

describe("TodaysWeather", () => {
  it("should Match Snapshot", () => {
    const wrapper = shallow(<TodaysWeather weather={weather}/>);
    expect(wrapper).toMatchSnapshot();
  });
});
