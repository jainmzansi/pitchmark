import * as React from "react"
import Layout from "../components/pagestructure/Layout"
import Container from "../components/pagestructure/Container"
import Hero from "../components/Hero"
import FeatureIntro from "../components/features/FeatureIntro"
import SubFeature from "../components/features/SubFeature"

const IndexPage = () => {
  return (
    <Layout>
      <Hero />
      <FeatureIntro/>
      <div className="relative pt-56">
        <Container>
          
          {/* Feature Section */}
          
          {/*  Feature 1 - Pitch Readiness  */}
            
          <div className="flex flex-row pt-20">
            <div className="w-3/5 pr-48">
              <img
              className="w-12 mb-10"
              src="https://ik.imagekit.io/pathventures/pitchmark/Pitchmark-PitchReadiness_HBF7zhyzc.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1667451675843"
              alt="Founder preparing for a pitch"
              />
              <h4 className="font-light text-3xl mb-10">Pitch Readiness</h4>
              <p className="text-sm mb-5">Every investor is different, but there are common patterns that investors will expect you to be able to address confidently. </p>
              <p className="text-sm"> We help you rapidly assess your pitch deck using our knowledge base of common investor questions and successful decks from some of the biggest raises in the industry.</p>
              <div className="flex flex-row mt-20">
                <SubFeature
                  icon="https://ik.imagekit.io/pathventures/pitchmark/New/Pitchmark-Questions_BqTcsmfHP6.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1667453669491"
                  title="Learn about pitching"
                  copy="Learn what investors expect from your pitch"
                />
                <SubFeature
                  icon="https://ik.imagekit.io/pathventures/pitchmark/New/Pitchmark-Assess_LEJIFMi9Z.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1667453672235"
                  title="Assess your deck"
                  copy="Assess your deck for content, story or design gaps"
                />
                <SubFeature
                  icon="https://ik.imagekit.io/pathventures/pitchmark/New/Pitchmark-Plan_zmc1xO5iqQ.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1667453669497"
                  title="Create a plan"
                  copy="Create a plan to close the gaps"
                />
              </div>
            </div>
     
            <div className="w-2/5 text-right">
              <button className="border-b pb-3 bg-Pitchmark-Success bg-no-repeat pl-12 border-pitchmark-green text-pitchmark-green mb-16">Actionable checklist</button>
              <img
                className="w-full rounded-md"
                src="https://ik.imagekit.io/pathventures/images/founder?ik-sdk-version=javascript-1.4.3&updatedAt=1665990166609"
                alt="Founder preparing for a pitch"
                />
            </div>
          </div>
          
          
          {/*  Feature 2 - Pitch Story Workshop  */}
            
          <div className="flex flex-row-reverse pt-32">
            <div className="w-3/5 pl-48">
              <img
              className="w-12 mb-10"
              src="https://ik.imagekit.io/pathventures/pitchmark/Pitchmark-StoryWorkshop_zk5EW91bt.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1667451675788"
              alt="Story Workshop"
              />
              <h4 className="font-light text-3xl mb-10">Story Workshop</h4>
              <p className="text-sm mb-5">People connect with stories and investors are no different. Facts and figures are necessary but not sufficient for a winning pitch.</p>
              <p className="text-sm mb-5">We help you shape your story into a strong narrative that builds belief in your venture.</p>
              <p className="text-sm">You’ll come away with a refreshed pitch deck that brings your facts and figures to life for investors.</p>
              <div className="flex flex-row mt-20">
                <SubFeature
                  icon="https://ik.imagekit.io/pathventures/pitchmark/New/Pitchmark-Audience_815MHma9Zo.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1667453669491"
                  title="Create a story"
                  copy="Create a story that emotionally engages your audience"
                />
                <SubFeature
                  icon="https://ik.imagekit.io/pathventures/pitchmark/New/Pitchmark-KeyQuestions_u9TOwE9Qz.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1667453671798"
                  title="Address key questions"
                  copy="Demonstrate confidence and competence through story-telling"
                />
      
              </div>
            </div>
          
            <div className="w-2/5  text-left">
              <button className="border-b pb-3 bg-Pitchmark-Success bg-no-repeat pl-12 border-pitchmark-green text-pitchmark-green mb-16">Facts and figures for investors</button>
              <img
                className="w-80 rounded-md mx-auto"
                src="https://ik.imagekit.io/pathventures/pitchmark/New/Pitchmark-protect_WEibjBvqGq.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1667453669536"
                alt="Hands in a circle"
                />
            </div>
          </div>
          
          
          
        </Container>
      </div>      
    </Layout>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
