import * as React from "react"
import Layout from "../components/pagestructure/Layout"
import Container from "../components/pagestructure/Container"
import Button from "../components/interactive/Button"
import Type from "../components/typography/Type"
import PitchReadinessForm from "../components/forms/PitchReadinessForm"


const PitchReadiness = () => {
  return (
    <Layout>
      <div className="bg-blue pt-32">
      <Container>
        <div className="w-1/2">
          <Type type="h1" text="Check your pitch readiness"/>
          <Type type="h2" text="Our pitch readiness checker will help you quickly assess whether your pitch covers they key points investors look for."/>
        </div>
        <PitchReadinessForm/>
      </Container>

      </div>        
    </Layout>
  )
}

export default PitchReadiness

export const Head = () => <title>Are you ready to pitch?</title>
