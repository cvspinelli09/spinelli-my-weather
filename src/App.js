import React from 'react';
import './App.scss';

import TopSection from './components/top/top';
import MiddleSection from './components/middle/middle';
import BottomSection from './components/bottom/bottom';

import axios from 'axios';

const API_KEY = "180ea08c51564987837204455200805";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      cityName: "London",
      numForecastDays: 3,
      isLoading: true,
    };
  }

  updateWeather = () => {
    const { cityName, numForecastDays } = this.state;
  
    const URL = `https://api.weatherapi.com/v1/forecast.json?key=${API_KEY} &q=${cityName} &days=${numForecastDays}`;
    axios
      .get(URL)
      .then((res) => {
        console.log(res.data);
        return res.data;
      })
      .then((data) => {
        this.setState({
          isLoading: false,
          cityName: data.location.name,
          countryName: data.location.country,
          weekDay: data.current.is_day,
          localTime: data.location.localtime,
          weatherType: data.current.condition.text,
          icon: data.current.condition.icon,
          temp_c: data.current.temp_c,
          temp_f: data.current.temp_f,
          precipitation: data.current.precip_mm,
          humidity: data.current.humidity,
          wind: data.current.wind_mph,
          forecastdays: data.forecast.forecastday
        });
      })
      .catch((error) => {
        console.log("Unable to fetch API", error);
      });
  }

  componentDidMount() {
    const { eventEmitter } = this.props;

    this.updateWeather();

    eventEmitter.on('updateWeather', data => {
      this.setState({ cityName: data }, () => this.updateWeather());
    });
  }


  render() {
    const {
      isLoading,
      cityName,
      countryName,
      weekDay,
      localTime,
      weatherType,
      icon,
      temp_c,
      temp_f,
      precipitation,
      humidity,
      wind,
      forecastdays
    } = this.state;
    return (
      <div className="app-container">
        <div className="main-container">
          {isLoading && <h3>Loading Weather...</h3>}
          {!isLoading && (
            <div className="top-section">
              <TopSection
                cityName={cityName}
                countryName={countryName}
                weekDay={weekDay}
                localTime={localTime}
                weatherType={weatherType}
                eventEmitter={this.props.eventEmitter}
              />
            </div>
          )}
          <div className="middle-section">
            <MiddleSection
              icon={icon}
              temp_c={temp_c}
              temp_f={temp_f}
              precipitation={precipitation}
              humidity={humidity}
              wind={wind}
            />
          </div>
          <div className="bottom-section">
            <BottomSection
              forecastdays={forecastdays}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
