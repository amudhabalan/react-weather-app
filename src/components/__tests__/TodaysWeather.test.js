import React from 'react';
import TodaysWeather from '../TodaysWeather';
import Adapter from 'enzyme-adapter-react-16';
import { configure, shallow } from 'enzyme';

configure({ adapter: new Adapter() });

const weather = {
  dt: 1590387700,
  sunrise: 1590330189,
  sunset: 1590382241,
  temp: 16.98,
  feels_like: 14.62,
  pressure: 1021,
  humidity: 93,
  dew_point: 15.84,
  uvi: 9.92,
  clouds: 100,
  wind_speed: 6.12,
  wind_deg: 221,
  weather: [
    {
      id: 804,
      main: 'Clouds',
      description: 'overcast clouds',
      icon: '04n'
    }
  ]
};

describe('TodaysWeather', () => {
  it('should Match Snapshot', () => {
    const wrapper = shallow(
      <TodaysWeather city="Melbourne" weather={weather} max="17" min="13" />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
