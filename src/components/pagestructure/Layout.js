import React from "react"
import Header from "../../components/pagestructure/Header"
import Footer from "../../components/pagestructure/Footer"

const Layout = ({ children }) => {
  return (
	<>
		<Header/>
	
		{children}

		<Footer/>
  
	   </>
  )
}

export default Layout
