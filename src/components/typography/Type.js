
import React from "react"


const Type = (props) => {	
	
const text = props.text; 
const type = props.type; 
	

	
	
	switch (type) {
	  case "h1":
		return (
		  <h1 className="text-5xl font-bold mb-5">{text}</h1>
		);
		break;
		case "h2":
		return (
			<h2 className="text-xl font-light mb-10">{text}</h2>
		);
		break;
		case "h3":
		return (
			<h3 className="font-bold text-xl mb-5">{text}</h3>  
		);
		break;
		case "h4":
		return (
			<h4 className="font-light text-3xl mb-10">{text}</h4>
		);
		case "h5":
		return (
			<h5 className="font-bold text-lg mb-3">{text}</h5> 
		);
		case "h6":
		return (
			<h5 className="font-bold text-md mb-3">{text}</h5> 
		);
		case "para1":
		return (
			<p className="text-2xl font-light mb-10">{text}</p>
		);
		case "para2":
		return (
			<p className="text-md font-light mb-3">{text}</p>  
		);
		break;
		default: 
		return (
			<p className="">{text}</p>
		);
		break;
	  };
	
	
	
};

export default Type;
