import * as React from "react"
import Container from "../../components/pagestructure/Container"
import Type from "../../components/typography/Type"
import Button from "../../components/interactive/Button"

const Footer = () => (
  <footer>
	<div className="bg-pitchmark-blue mt-20">
	<Container>
		<div className="py-16 pb-24 flex flex-col lg:flex-row">
			<div className="w-full lg:w-1/3">
				
				<img
				className="w-32 "
				src="https://www.moretraction.io/hubfs/254b13a3ad054c61871c1f4c6ed5d451-1.png"
				alt="More Traction"
				/>
				<div className="mt-5">
					<Type type="para3" text="More Traction helps ClimateTech businesses get aligned behind a plan, define a customer-centred product strategy and execute the activity required to demonstrate traction to investors and secure funding for growth."/>
				</div>
				<img
				className="w-32 mt-16"
				src="https://ik.imagekit.io/pathventures/brand/logo/PathLogoWordmarkColour.svg"
				alt="Path Ventures"
				/>
				<div className="mt-5">
					<Type type="para3" text="Path is a design-led strategic consultancy."/>
					<Type type="para3" text="We help ventures and transformations accelerate change."/>
				</div>
			</div>
			<div className="w-full lg:w-1/3 mt-20 lg:mt-0"></div>
		<div className="w-full lg:w-1/3">
			<Type text="We'd love to hear from you" type="h5" />
			<Type text="If you'd like to know more about Pitchmark, schedule a short call and we'll tell you all about it." type="para2" />
			<div className="mt-5"><Button url="" title="Talk to us"/></div>
		</div>
	</div>
	</Container>    
	</div>
  </footer>
)

export default Footer
