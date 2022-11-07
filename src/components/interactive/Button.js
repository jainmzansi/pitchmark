
import React from "react"


const Button = (props) => {	
	
const title = props.title;
const url = props.url;
  
	
	return (
		  <a href={url}><button className="bg-pink font-bold py-4 px-8 text-sm rounded-md">{title}</button></a>
 );
	
};

export default Button;
