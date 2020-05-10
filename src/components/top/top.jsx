import React from 'react';

import TopWeatherSection from './weather-top';

import { Manager, Reference, Popper } from "react-popper";

class TopSection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          isSelectLocationOpen: false
        }
    }

    onToggleSelectLocation = () => {
      this.setState((prevState) => ({ isSelectLocationOpen: !prevState.isSelectLocationOpen }))
    }

    onLocationNameChange = e => {
      this.setState({
        locationName: e.target.value
      })
    }

    onSelectCity = () => {
      const { locationName } = this.state;
      const { eventEmitter } = this.props;
      eventEmitter.emit('updateWeather', locationName);
      this.setState({ isSelectLocationOpen: false });
    }

    render() {

      const { isSelectLocationOpen } = this.state;

      return (
        <div className="Top-section-container">
          <TopWeatherSection {...this.props} />
          <div className="button">
            <Manager>
              <Reference>
                {({ ref }) => (
                  <button 
                    onClick={this.onToggleSelectLocation} 
                    className="button-feat"
                    ref={ref}
                  >+ LOCATION</button>
                )}
              </Reference>
              <Popper placement="right">
                {({ ref, placement, arrowProps, style }) => isSelectLocationOpen && (
                  <div className='popup' style={style} ref={ref} data-placement={placement}>
                    <div className='form-container'>
                      <label htmlFor='enter-location'></label>
                      <input 
                        id='location-name' 
                        onChange={this.onLocationNameChange}
                        type='text' 
                        placeholder='Change Location' 
                        className='input-container'
                      ></input>
                      <button className='button-go' onClick={this.onSelectCity} >GO</button>
                    </div>
                    <div ref={arrowProps.ref} style={arrowProps.style} />
                  </div>
                )}
              </Popper>
            </Manager>
          </div>
        </div>
      );
    }
}

export default TopSection;