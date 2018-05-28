import React, { Component } from 'react';
import Flat from './flat';


const FlatArray = (props) => {
	const renderList = () => {
		return props.flats.map((flat, index) => {
			return (
				<Flat
					flat={flat}
					key={flat.index}
					selected={flat.name === props.selectedFlat.name}
					index={index}
					selecteFlat={props.selecteFlat}
				/>
			);
		});
	};

	return (
		<div className="flat-list">
			{renderList()}
		</div>
		);
};
export default FlatArray;



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

