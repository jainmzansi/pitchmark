
import React from "react"
import Type from "../../components/typography/Type"


const SubFeature = (props) => {	
	
const icon = props.icon;
const title = props.title;
const copy = props.copy;
  
	
	return (
		<div className="w-full xl:w-64 px-6 pt-6 pb-4 bg-pitchmark-tan mb-6 2xl:mb-0 mr-0 lg:mr-6 rounded-lg">
		  <img
		  className="w-6 xl:w-8 mb-4"
		  src={icon}
		  alt={title}
		  />
		  <Type type="h6" text={title}/>
		  <Type type="para3" text={copy}/>
		</div>

 );
	
};

export default SubFeature;
