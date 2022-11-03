
import React from "react"


const SubFeature = (props) => {	
	
	const icon = props.icon;
const title = props.title;
const copy = props.copy;
  
	
	return (
		<div className="w-64 p-6 bg-pitchmark-tan mr-6 rounded-lg">
		  <img
		  className="w-8 mb-4"
		  src={icon}
		  alt={title}
		  />
		  <h5 className="font-bold text-lg mb-3">{title}</h5>
		  <p className="text-xs">{copy}</p>
		</div>

 );
	
};

export default SubFeature;
