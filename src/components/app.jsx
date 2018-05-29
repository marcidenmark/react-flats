import React, { Component } from 'react';
import Flat from './flat';
import FlatArray from './flat_array';
import Map from './map';
import Marker from './marker'
import flats from '../../data/flats';
import GoogleMapReact from 'google-map-react';

class App extends Component {
	constructor(props) {
		super(props);
		this.state={ selectedFlat: flats[0], flats};
	}

	selectFlat = (index) => {
		this.setState({ selectedFlatIndex: [index] });
	}

	render () {
		return(
			<div>
			<h3>This will say something to explain the app</h3>
				<FlatArray
					flats={this.state.flats}
					selectedFlat={this.state.selectedFlat}
					selectFlat={this.selectFlat}
				/>
				<Map />
			</div>
			);
	}
};
export default App;


// const flats = [
//   {
//     name: "Charm at the Steps of the Sacre Coeur/Montmartre",
//     imageUrl: "https://raw.githubusercontent.com/lewagon/flats-boilerplate/master/images/flat1.jpg",
//     price: 164,
//     priceCurrency: "EUR",
//     lat: 48.884211,
//     lng: 2.34689
//   },
//
