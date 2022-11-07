import * as React from "react";
import { Link } from "gatsby";
import Required from "../../components/forms/Required"


const TextArea = (props) => {

const field = props.field;
const placeholder = props.placeholder;
const labelcopy = props.labelcopy;


 
  return (
   <div>
   <label htmlFor={field} className="font-light">{labelcopy}  <Required /></label>
   <textarea  className="w-full rounded-md px-2 py-4 border-pitchmark-green/50 font-light mt-2 h-40 text-grey" required  id={field} name={field} placeholder={placeholder} />  
  </div>   
   
 );
};  
export default TextArea ;