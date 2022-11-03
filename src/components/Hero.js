import React from "react"
import Container from "../components/pagestructure/Container"


const Hero = () => (	
	
	<div className="bg-pitchmark-blue min-h-content pt-10 pb-56">
	<Container>
	<div className="flex flex-row">
		<div className="w-2/5">
			<div className="h-full w-full bg-black flex items-center justify-center">
				<div>
					<h1 className="text-5xl font-bold mb-5">Preparing a ClimateTech investment pitch?</h1> 
					<h2 className="text-xl font-light mb-10">Pitchmark helps ClimateTech founders prepare, practice, and deliver pitches that win investment.</h2>
					<button className="bg-pitchmark-pink font-bold py-4 px-8 text-sm rounded-md">Get started</button>
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
