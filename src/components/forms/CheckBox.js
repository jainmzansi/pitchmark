import * as React from "react";
import Required from "../../components/forms/Required"


const CheckBox = (props) => {

const field = props.field;
const placeholder = props.placeholder;
const labelcopy = props.labelcopy;


 
  return (
  <div className="flex flex-row">
    <div className="mr-8">
        <input type="checkbox" className="w-8 h-8 rounded-lg p-2 border-black/50 border font-light text-pink focus:ring-pink"  id={field} name={field} />  
    </div>
    <div className="">
      <div className="">
        <label htmlFor={field} className="font-light">{labelcopy}</label>
      </div>
    </div>
  </div>   
   
 );
};  
export default CheckBox ;