import React from 'react';
import DailyWeather from '../DailyWeather';
import Adapter from 'enzyme-adapter-react-16';
import { configure, shallow } from 'enzyme';

configure({ adapter: new Adapter() });

const weather = {
  dt: 1590354000,
  sunrise: 1590330189,
  sunset: 1590382241,
  temp: {
    day: 16.98,
    min: 13.88,
    max: 16.98,
    night: 16.88,
    eve: 16.98,
    morn: 16.98
  },
  feels_like: {
    day: 14.62,
    night: 16.09,
    eve: 14.62,
    morn: 14.62
  },
  pressure: 1021,
  humidity: 93,
  dew_point: 15.84,
  wind_speed: 6.12,
  wind_deg: 221,
  weather: [
    {
      id: 804,
      main: 'Clouds',
      description: 'overcast clouds',
      icon: '04n'
    }
  ],
  clouds: 100,
  uvi: 9.92
};

describe('DailyWeather', () => {
  const wrapper = shallow(<DailyWeather weather={weather} />);
  it('should Match Snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should render the correct daily max and min temperature', () => {
    expect(
      wrapper.contains(
        <React.Fragment>
          <p>
            17
            <span>&#8451;</span> max
          </p>
          <p>
            14
            <span>&#8451;</span> min
          </p>
        </React.Fragment>
      )
    ).toEqual(true);
  });

  it('should render the correct weather image', () => {
    expect(
      wrapper.contains(
        <img
          src={'http://openweathermap.org/img/wn/04n@2x.png'}
          alt="overcast clouds"
        ></img>
      )
    ).toEqual(true);
  });
});
