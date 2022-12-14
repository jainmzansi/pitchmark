import * as React from "react";
import Required from "../../components/forms/Required"


const RadioButtonGroup = (props) => {

const field = props.field;
const options = props.options;

 
  return (
    <fieldset>
      <div className="flex flex-col sm:flex-row">
      {options.map((plan) => (
        <div key={plan.id} className="flex flex-row mt-5 sm:mt-5 mr-0 sm:mr-20">
          <div className="mr-6">
            <input
              id={field}
              name={field}
              value={plan.id}
              type="radio"
              className="w-8 h-8 p-2 border-pink border border-black/50 font-light text-pink focus:ring-pink"
            />
          </div>
          <div className="">
            <label htmlFor={plan.id} className="font-light text-lg text-gray-700">
              {plan.name}
            </label>
          </div>
        </div>
      ))}
    </div>
  </fieldset> 
   
 );
};  
export default RadioButtonGroup ;