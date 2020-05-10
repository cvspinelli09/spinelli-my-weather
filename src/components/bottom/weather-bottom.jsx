import React from "react";

import "./bottom.styles.scss";

import ForecastDays from './forecast';

class BottomWeatherSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    
    const { forecastdays } = this.props;

    return (
      <div className="bottom-container">
        {forecastdays && forecastdays.map((day, idx) => {
          return <ForecastDays day={day} key={idx} />;
        })}
      </div>
    );
  }
}

export default BottomWeatherSection;
