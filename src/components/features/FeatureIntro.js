
import React from "react"
import Container from "../../components/pagestructure/Container"


const FeatureIntro = () => (	
	
	<Container>
		<div className="relative">
		<div className="grid grid-cols-4 gap-8 absolute top-[-120px]">
			<div className="rounded-lg bg-pitchmark-tan p-10  text-center">
				<img
					className="mx-auto mb-10"
					src="https://ik.imagekit.io/pathventures/pitchmark/Pitchmark-PitchReadiness_HBF7zhyzc.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1667451675843"
					alt="Pitch Readiness"
					/>
				<h3 className="font-bold text-xl mb-5">Pitch Readiness</h3>
				<p>What key questions do investors want you to answer?</p>
			</div>
			<div className="rounded-lg bg-pitchmark-tan p-10 text-center">
				<img
				className="mx-auto mb-10"
				src="https://ik.imagekit.io/pathventures/pitchmark/Pitchmark-StoryWorkshop_zk5EW91bt.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1667451675788"
				alt="Story Workshop"
				/>
				<h3 className="font-bold text-xl mb-5">Story Workshop</h3>
				<p>How does everything come together as a winning story?</p>
			</div>
			<div className="rounded-lg bg-pitchmark-tan p-10 text-center">
				<img
				className="mx-auto mb-10"
				src="https://ik.imagekit.io/pathventures/pitchmark/Pitchmark-DesignRefresh_A_jzqo_w9.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1667451675803"
				alt="Pitch Readiness"
				/>
				<h3 className="font-bold text-xl mb-5">Design Refresh</h3>
				<p>How do you create a slidedeck that signals competence and judgement?</p>
			</div>
			<div className="rounded-lg bg-pitchmark-tan p-10 text-center">
				<img
				className="mx-auto mb-10"
				src="https://ik.imagekit.io/pathventures/pitchmark/Pitchmark-PitchPractice_gpZ_CbPF93.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1667451675807"
				alt="Pitch Practice"
				/>
				<h3 className="font-bold text-xl mb-5">Pitch Practice</h3>
				<p>How can your pitch performance signal competence to investors?</p>
			</div>
		</div>
		</div>

	</Container>
	
)

export default FeatureIntro
