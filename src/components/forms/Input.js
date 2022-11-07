import * as React from "react";
import { Link } from "gatsby";
import Required from "../../components/forms/Required"


const Input = (props) => {

const field = props.field;
const placeholder = props.placeholder;
const labelcopy = props.labelcopy;


 
  return (
   <div>
   <label htmlFor={field} className="font-light mb-4">{labelcopy}  <Required /></label>
   <input type="text"  className="w-full rounded-md p-4 border font-light mt-2  mb-8 text-grey" required  id={field} name={field} placeholder={placeholder} />  
  </div>   
   
 );
};  
export default Input ;