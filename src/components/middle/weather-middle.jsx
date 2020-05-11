import React from "react";

import "./middle.styles.scss";

class MiddleWeatherSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { icon, temp_c, precipitation, humidity, wind } = this.props;
    return (
      <div className="middle-container">
        <div className="icon-container">
          <img className="icon-image" src={icon} alt="" />
        </div>
        <div className="temp-container">
          <div className="temp">{temp_c}</div>
          <div className="metric-fahr">
            <div className="t">°C</div>
            {/*<div className='t'>|°F
                </div>*/}
          </div>
        </div>
        <div className="data-container">
          <div>Precipitation: {precipitation} mm</div>
          <div>Humidity: {humidity}%</div>
          <div>Wind: {wind} mph</div>
        </div>
      </div>
    );
  }
}

export default MiddleWeatherSection;
