import React from "react"
import Container from "../components/pagestructure/Container"
import Button from "../components/interactive/Button"
import Type from "../components/typography/Type"


const Hero = () => (	
	
	<div className="bg-pitchmark-blue min-h-content pt-10 pb-56">
	<Container>
	<div className="flex flex-row">
		<div className="w-2/5">
			<div className="h-full w-full bg-black flex items-center justify-center">
				<div>
					<Type type="h1" text="Preparing a ClimateTech investment pitch?"/> 
					<Type type="para1" text="Pitchmark is a simple, affordable bundle of services to help ClimateTech founders prepare, practice, and deliver pitches that win investment."/>
					<Button title="Get started" url=""/>
				</div>
			</div>
		</div>
		<div className="w-1/5"></div>
		<div className="w-2/5">
			<img
				className="h-[437px]"
				src="https://ik.imagekit.io/pathventures/pitchmark/Pitchmark-Hero-Image.svg"
				alt="Team launching on a rocket" 
			/>
		</div>
	</div>
	</Container>
	</div>  

)

export default Hero