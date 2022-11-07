import * as React from "react"
import Layout from "../components/pagestructure/Layout"
import Container from "../components/pagestructure/Container"
import Button from "../components/interactive/Button"
import PitchReadinessForm from "../components/forms/PitchReadinessForm"


const PitchReadiness = () => {
  return (
    <Layout>
      <div className="bg-blue pt-32 pb-10">
      <Container>
        <PitchReadinessForm/>
      </Container>

      </div>        
    </Layout>
  )
}

export default PitchReadiness

export const Head = () => <title>Are you ready to pitch?</title>
