import * as React from "react";
import { Link } from "gatsby";
import Required from "../../components/forms/Required"


const SelectOpen = (props, {children}) => {

const field = props.field;
const placeholder = props.placeholder;
const labelcopy = props.labelcopy;


 
  return (
   
      <div>
        <label htmlFor={field} className="font-bold text-sm">{labelcopy}  <Required /></label>
        <select className="w-full rounded-md px-2 py-4 border-green/50 font-light mt-2  mb-8 text-grey" required  id={field} name={field}>
        {children}
        </select>
      </div>
    
 );
};  
export default SelectOpen ;
