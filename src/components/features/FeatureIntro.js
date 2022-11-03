
import React from "react"
import Container from "../../components/pagestructure/Container"
import Type from "../../components/typography/Type"


const FeatureIntro = () => (	
	
	<Container>
		<div className="relative">
		<div className="grid grid-cols-4 gap-8 absolute top-[-120px]">
		
		
			{/*  Feature 1*/}
			<div className="rounded-lg bg-pitchmark-tan p-10  text-center">
				<img
					className="mx-auto mb-10"
					src="https://ik.imagekit.io/pathventures/pitchmark/Pitchmark-PitchReadiness_HBF7zhyzc.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1667451675843"
					alt="Pitch Readiness"
					/>
				<Type 
					type="h3"
					text="Pitch Readiness"
					/>
				<Type 
					type="para2"
					text="What are the key questions investors will want you to answer?"
					/>
			</div>
			
			
			{/*  Feature 2*/}
			<div className="rounded-lg bg-pitchmark-tan p-10 text-center">
				<img
					className="mx-auto mb-10"
					src="https://ik.imagekit.io/pathventures/pitchmark/Pitchmark-StoryWorkshop_zk5EW91bt.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1667451675788"
					alt="Story Workshop"
					/>
				<Type 
					type="h3"
					text="Story Workshop"
					/>
				<Type 
					type="para2"
					text="How can you bring everything together with a story that motivates investment?"
					/>
			</div>
			
			
			{/*  Feature 3*/}
			<div className="rounded-lg bg-pitchmark-tan p-10 text-center">
				<img
					className="mx-auto mb-10"
					src="https://ik.imagekit.io/pathventures/pitchmark/Pitchmark-DesignRefresh_A_jzqo_w9.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1667451675803"
					alt="Design Refresh"
					/>
				<Type 
					type="h3"
					text="Design Refresh"
					/>
				<Type 
					type="para2"
					text="How do you create a slidedeck that signals competence and judgement?"
					/>
			</div>
			
			
			
			{/*  Feature 4*/}
			<div className="rounded-lg bg-pitchmark-tan p-10 text-center">
				<img
					className="mx-auto mb-10"
					src="https://ik.imagekit.io/pathventures/pitchmark/Pitchmark-PitchPractice_gpZ_CbPF93.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1667451675807"
					alt="Pitch Practice"
					/>
				<Type 
					type="h3"
					text="Pitch Practice"
					/>
				<Type 
					type="para2"
					text="How can your pitch performance signal competence to investors?"
					/>
			</div>

		</div>
		</div>

	</Container>
	
)

export default FeatureIntro
