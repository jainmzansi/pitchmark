import * as React from "react";
import Required from "../../components/forms/Required"


const CheckBox = (props) => {

const field = props.field;
const placeholder = props.placeholder;
const labelcopy = props.labelcopy;


 
  return (
  <div className="flex flex-row-reverse">
    <div className="w-5/6">
      <div className="h-full items-center items-center  flex ">
        <label htmlFor={field} className="font-light">{labelcopy}</label>
      </div>
    </div>
    <div className="w-1/6 ">
        <input  type="checkbox" className="w-8 h-8 rounded-lg p-2 border-pink border-2 font-light text-green"  id={field} name={field} />  
    </div>
  </div>   
   
 );
};  
export default CheckBox ;