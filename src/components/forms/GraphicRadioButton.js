import React from "react"


const GraphicRadioButton = (props) => {

const line1 = props.line1;
const line2 = props.line2;
const icon = props.icon;



  return (
    <div>
      <button className="border text-lg py-4 px-16 mr-4 rounded-md font-light hover:border-white bg-white hover:bg-pink">
        <span className="">{line1}</span><br/>
        <span className="">{line2}</span>
      </button>
    </div>
  )
}

export default GraphicRadioButton
