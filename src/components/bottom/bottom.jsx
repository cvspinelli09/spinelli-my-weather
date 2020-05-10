import React from "react";

import BottomWeatherSection from "./weather-bottom";

class BottomSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <BottomWeatherSection {...this.props} />
      </div>
    );
  }
}

export default BottomSection;
