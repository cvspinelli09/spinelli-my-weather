import React from 'react';


class ForecastDays extends React.Component {
    constructor(props) {
        super(props);

        this.state = {}
    }

    render() {
        const { day } = this.props;
        return (
          <div className="forecast-container">
            <div className="day">{day.date}</div>
            <div className="icon">
              <img className="forecast-icon" src={day.day.condition.icon} alt="" />
            </div>
            <div className="min-max">
              <div className="max">{day.day.maxtemp_c}°</div>
              <div className="min">{day.day.mintemp_c}°</div>
            </div>
          </div>
        );
    }

}

export default ForecastDays;