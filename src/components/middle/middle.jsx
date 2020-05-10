import React from "react";

import MiddleWeatherSection from "./weather-middle";

class MiddleSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <MiddleWeatherSection {...this.props} />
      </div>
    );
  }
}

export default MiddleSection;
