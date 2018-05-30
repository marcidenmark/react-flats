import React, { Component } from 'react';
import Flat from './flat';

const FlatArray = (props) => {
	const renderList = () => {
		return props.flats.map((flat, index) => {
			return (
				<Flat
					flat={flat}
					key={index}
					selected={flat.name === props.selectedFlat.name}
					index={index}
					selectedFlat={props.selectedFlat}
					/>
				);
		});
	};

	return ( <div className="flat-list"> {renderList()} </div> );
};

export default FlatArray;

// line 7 I am mapping over the flats.

// class FlatArray extends Component {
// 	renderList= () => {
// 		return this.props.flats.map (flat => {
// 			return <Flat id={flat.index} key={flat.index} />
// 		})
// 	}

// 		render() {
// 			return (
// 			<div className="flat-list">
// 			{this.renderList()}
// 			</div>
// 			);
// 		}
// }

