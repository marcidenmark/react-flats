import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';



class Map extends Component {
	static defaultProps = {
		center: {lat: 48.885707, lng: 2.343543},
    		zoom: 11
	};
	render() {
	    	return (
	    	<div className="map-container">
		     <GoogleMapReact
			     defaultCenter={this.props.center}
			     defaultZoom={this.props.zoom}
		     >
		     </GoogleMapReact>
	      </div>
    		);
  	};
}

export default Map
