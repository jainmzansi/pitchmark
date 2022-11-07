import * as React from "react"
import Layout from "../components/pagestructure/Layout"
import Container from "../components/pagestructure/Container"
import Hero from "../components/Hero"
import FeatureIntro from "../components/features/FeatureIntro"
import SubFeature from "../components/features/SubFeature"
import Button from "../components/interactive/Button"
import Type from "../components/typography/Type"


const IndexPage = () => {
  return (
    <Layout>
      <Hero />
      <FeatureIntro/>
      <div className="relative pt-0 lg:pt-32">
        <Container>
          
          {/* Feature Section */}
          
          {/*  Feature 1 - Pitch Readiness  */}
            
          <div className="flex flex-col lg:flex-row pt-32">
            <div className="w-full lg:w-1/2 lg:pr-28 ">
              <img
              className="w-12 mb-10"
              src="https://ik.imagekit.io/pathventures/pitchmark/Pitchmark-PitchReadiness_HBF7zhyzc.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1667451675843"
              alt="Founder preparing for a pitch"
              />
              <Type type="h4" text="Pitch Readiness"/>
              <p className="text-sm mb-5">Every investor is different, but there are common patterns that investors will expect you to be able to address confidently. </p>
              <p className="text-sm"> We help you rapidly assess your pitch deck using our knowledge base of common investor questions and successful decks from some of the biggest raises in the industry.</p>
              <div className="flex flex-col xl:flex-row mt-12">
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
     
            <div className="w-full lg:w-1/2 text-left lg:text-right mt-4 lg:mt-0">
              <button className="border-b pb-3 bg-Pitchmark-Success bg-no-repeat pl-12 border-green text-green mb-16">Actionable checklist</button>
              <img
                className="w-full rounded-md  invisible lg:visible h-0 lg:h-auto"
                src="https://ik.imagekit.io/pathventures/images/founder?ik-sdk-version=javascript-1.4.3&updatedAt=1665990166609"
                alt="Founder preparing for a pitch"
                />
            </div>
          </div>
          
          
          {/*  Feature 2 - Pitch Story Workshop  */}
            
          <div className="flex flex-col lg:flex-row-reverse pt-20 lg:pt-32">
            <div className="w-full lg:w-1/2 lg:pl-28">
              <img
              className="w-12 mb-10"
              src="https://ik.imagekit.io/pathventures/pitchmark/Pitchmark-StoryWorkshop_zk5EW91bt.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1667451675788"
              alt="Story Workshop"
              />
              <Type type="h4" text="Story Workshop"/>
              <p className="text-sm mb-5">People connect with stories and investors are no different. Facts and figures are necessary but not sufficient for a winning pitch.</p>
              <p className="text-sm mb-5">We help you shape your story into a strong narrative that builds belief in your venture.</p>
              <p className="text-sm">You’ll come away with a refreshed pitch deck that brings your facts and figures to life for investors.</p>
              <div className="flex flex-col xl:flex-row mt-12">
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
          
            <div className="w-full lg:w-1/2 text-left lg:text-left mt-4  lg:mt-0">
              <button className="border-b pb-3 bg-Pitchmark-Success bg-no-repeat pl-12 border-green text-green mb-16">Your story brought to life</button>
              <img
                className="w-80 rounded-md  invisible lg:visible h-0 lg:h-auto mx-auto"
                src="https://ik.imagekit.io/pathventures/pitchmark/New/Pitchmark-protect_WEibjBvqGq.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1667453669536"
                alt="Hands in a circle"
                />
            </div>
          </div>
          
          
          {/*  Feature 3 - Design Refresh  */}
            
          <div className="flex flex-col lg:flex-row pt-20 lg:pt-32">
            <div className="w-full lg:w-1/2 lg:pr-28">
              <img
              className="w-12 mb-10"
              src="https://ik.imagekit.io/pathventures/pitchmark/Pitchmark-DesignRefresh_A_jzqo_w9.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1667451675803"
              alt="Design Refresh"
              />
              <Type type="h4" text="Design Refresh"/>
              <p className="text-sm mb-5">The best pitch deck supports your story-telling, without getting in the way. There’s a perfect window between showing you understand design and trying too hard.</p>
              <p className="text-sm mb-5">We help you create a dynamic and elegant pitch deck that tells your story without distracting from it.</p>
              <div className="flex  flex-col xl:flex-row mt-12">
                <SubFeature
                  icon="https://ik.imagekit.io/pathventures/pitchmark/New/Pitchmark-Copy_GD7cul79Hg.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1667453669616"
                  title="Copywriting"
                  copy="Tighten and energise the language in your deck"
                />
                <SubFeature
                  icon="https://ik.imagekit.io/pathventures/pitchmark/New/Pitchmark-Design_ZTfksCFv7i.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1667453669492"
                  title="Graphic Design"
                  copy="Visually communicate your key points and values"
                />
          
              </div>
            </div>
          
            <div className="w-full lg:w-1/2 text-left lg:text-right mt-4  lg:mt-0">
              <button className="border-b pb-3 bg-Pitchmark-Success bg-no-repeat pl-12 border-green text-green mb-16">Re-designed pitch deck</button>
              <img
                className="w-full rounded-md  invisible lg:visible h-0 lg:h-auto"
                src="https://ik.imagekit.io/pathventures/images/collaborating?ik-sdk-version=javascript-1.4.3&updatedAt=1656734289270"
                alt="Designing together"
                />
            </div>
          </div>
          
          
          {/*  Feature 4 - Pitch Practice  */}
            
          <div className="flex flex-col lg:flex-row-reverse pt-20 lg:pt-32">
            <div className="w-full lg:w-1/2 lg:pl-28">
              <img
              className="w-12 mb-10"
              src="https://ik.imagekit.io/pathventures/pitchmark/Pitchmark-PitchPractice_gpZ_CbPF93.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1667451675807"
              alt="Pitch Practice"
              />
              <Type type="h4" text="Pitch Practice"/>
              <p className="text-sm mb-5">It’s a truism that people invest in other people.</p>
              <p className="text-sm mb-5">How you share your ideas, passion and competence with investors plays a big part in their deciding to share in your vision.</p>
              <p className="text-sm mb-5">Practice makes perfect and we’ll help you hone your presentation skills through practice and critique, peer presentations and finally a video presentation that you can easily share with investors.</p>
              <p className="text-sm mb-5">You’ll come away with a deep sense of confidence in your story and your story-tellling abilities, as well as a powerful video to add to your fund-raising bag of tricks. </p>
              <div className="flex  flex-col xl:flex-row mt-12">
                <SubFeature
                  icon="https://ik.imagekit.io/pathventures/pitchmark/New/Pitchmark-Questions_BqTcsmfHP6.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1667453669491"
                  title="Tips"
                  copy="Hone your pitch skills with tips from seasoned presenters"
                />
                <SubFeature
                  icon="https://ik.imagekit.io/pathventures/pitchmark/New/Pitchmark-Audience_815MHma9Zo.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1667453669491"
                  title="Peer reviews"
                  copy="Learn to critique and improve your skills through peer review sessions"
                />
                <SubFeature
                  icon="https://ik.imagekit.io/pathventures/pitchmark/New/Pitchmark-Video_bNY4LbYt6.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1667453669471"
                  title="Video presentation"
                  copy="Capture a perfect pitch presentation on video to share with investors"
                />
          
              </div>
            </div>
          
            <div className="w-full lg:w-1/2 text-left lg:text-left mt-4 lg:mt-0">
              <button className="border-b pb-3 bg-Pitchmark-Success bg-no-repeat pl-12 border-green text-green mb-16">Confident and prepared</button>
              <img
                className="w-80 rounded-md  invisible lg:visible h-0 lg:h-auto mx-auto"
                src="https://ik.imagekit.io/pathventures/pitchmark/New/Pitchmark-Present_-raiG-OPM.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1667453672227"
                alt="Presenting"
                />
            </div>
          </div>          
        </Container>
      </div>  
      
      
      {/*  Creds  */}
      
        
      <div className="bg-tan py-16 my-32">
        <Container>
        <div className="flex flex-col lg:flex-row">
          <div className="w-full lg:w-1/2 pr-16">
            <Type type="h4" text="Leap ahead with experienced, practical support"/>
            <Type type="para2" text="A solid pitch is part art, part science. There's no right way to do it, and everyone finds it daunting, but it helps if you've done it before."/>
            <Type type="para2" text="With so much at stake, it's no wonder founders find it daunting. What does good look like? What’s the right level of detail? Does it tell a motivating story?"/>
            <Type type="para2" text="We’ve spent the last 17 years telling stories that convince investors. Together, we've helped over 45 companies raise more than $50m in funding."/>
             <Type type="para2" text="Now we've designed Pitchmark to help us share that experience with the ClimateTech startups we know need to be funded, for all of our futures."/>
            <div className="mt-10"><Button title="Get started" url="/pitchreadiness"/></div>
          </div>
          <div className="w-full lg:w-1/2 mt-20 lg:mt-0">
            <div className="mx-auto w-4/5 flex items-center justify-center h-full">
            <div className="grid grid-cols-2 gap-12">
              <div className="text-center">  
                <img
                className="w-48 rounded-full mx-auto"
                src="https://ik.imagekit.io/pathventures/pitchmark/Leo_GpdTP9xEy.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1667466837710"
                alt="Leo Cerda"
                />
                <div class="mt-5">
                  <Type type="h6" text="Leo Cerda"/>
                  <Type type="para2" text="Founder, More Traction"/>
                </div>
              </div>
              <div className="text-center">
                <img
                className="w-48 rounded-full mx-auto"
                src="https://ik.imagekit.io/pathventures/tr:n-teamphoto/team/jaimesnel"
                alt="Jaimes Nel"
                />
                <div class="mt-5">
                <Type type="h6" text="Jaimes Nel"/>
                <Type type="para2" text="Founder, Path Ventures"/>
                </div>
              </div>
            </div>
            </div>
          </div>
        </div>
        </Container>      
      </div>  
      
      <Container>
      <div className="grid grid-cols-2 lg:grid-cols-5 gaps-8">
        <div><div className="w-40 h-16 border border-green rounded-xl m-10"/></div>
        <div><div className="w-40 h-16 border border-green rounded-xl m-10"/></div>
        <div><div className="w-40 h-16 border border-green rounded-xl m-10"/></div>
        <div><div className="w-40 h-16 border border-green rounded-xl m-10"/></div>
        <div><div className="w-40 h-16 border border-green rounded-xl m-10"/></div>
        <div><div className="w-40 h-16 border border-green rounded-xl m-10"/></div>
        <div><div className="w-40 h-16 border border-green rounded-xl m-10"/></div>
        <div><div className="w-40 h-16 border border-green rounded-xl m-10"/></div>
        <div><div className="w-40 h-16 border border-green rounded-xl m-10"/></div>
        <div><div className="w-40 h-16 border border-green rounded-xl m-10"/> </div>
        <div><div className="w-40 h-16 border border-green rounded-xl m-10"/></div>
        <div><div className="w-40 h-16 border border-green rounded-xl m-10"/></div>
        <div><div className="w-40 h-16 border border-green rounded-xl m-10"/>   </div>
        <div><div className="w-40 h-16 border border-green rounded-xl m-10"/> </div>
        <div><div className="w-40 h-16 border border-green rounded-xl m-10"/></div>
      </div>
      </Container>
      
    </Layout>
  )
}

export default IndexPage

export const Head = () => <title>Pitchmark</title>
