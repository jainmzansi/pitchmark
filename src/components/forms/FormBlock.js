import React from "react"


const FormBlock = ({ children }) => {
  return (
    <>
    <div className="bg-white  p-8 sm:p-10 lg:p-20 mt-4 lg:mt-16">
        {children}
    </div>
    </>
  )
}

export default FormBlock
