import React from "react";

import { ReactComponent as Logo } from "../../assets/LogoImg_small.svg";
import "./top.styles.scss";

class TopWeatherSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {
      cityName,
      localTime,
      weatherType,
    } = this.props;
    return (
      <div className="top-container">
        <div className="description">
          <div className="title">
            {cityName}
          </div>
          <div className="top-content">{localTime}</div>
          <div className="top-content-condition">{weatherType}</div>
        </div>
        <div >
          <div className="logo">
            <Logo className="logo-container"/>
            <div className="link-back">
              Powered by{" "}
              <a href="https://www.weatherapi.com/" title="Weather API">
                WeatherAPI.com
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TopWeatherSection;
