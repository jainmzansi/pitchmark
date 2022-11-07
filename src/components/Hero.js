import React from "react"
import Container from "../components/pagestructure/Container"
import Button from "../components/interactive/Button"
import Type from "../components/typography/Type"


const Hero = () => (	
	
	<div className="bg-blue min-h-content pt-10 pb-20 lg:pb-56">
	<Container>
	<div className="flex flex-col-reverse lg:flex-row">
		<div className="w-full lg:w-1/2 2xl:w-2/5">
			<div className="h-full flex items-center ">
				<div className="">
					<Type type="h1" text="Preparing a ClimateTech investment pitch?"/> 
					<Type type="para1" text="Pitchmark is a simple, affordable bundle of services to help ClimateTech founders prepare, practice, and deliver pitches that win investment."/>
					<Button title="Get started" url=""/>
				</div>
			</div>
		</div>
		<div className="w-full lg:w-1/2 2xl:w-3/5">
			<div className="flex items-center justify-center">
				<img
					className="h-0 lg:h-[437px] invisible lg:visible"
					src="https://ik.imagekit.io/pathventures/pitchmark/Pitchmark-Hero-Image.svg"
					alt="Team launching on a rocket" 
					/>
			</div>
		</div>
	</div>
	</Container>
	</div>  

)

export default Hero