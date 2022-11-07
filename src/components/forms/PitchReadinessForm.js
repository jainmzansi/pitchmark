import * as React from "react";
import { useForm, ValidationError } from "@formspree/react";
import Required from "../../components/forms/Required"
import TextArea from "../../components/forms/TextArea"
import Input from "../../components/forms/Input"
import SelectOpen from "../../components/forms/SelectOpen"
import GraphicRadioButton from "../../components/forms/GraphicRadioButton"
import CheckBox from "../../components/forms/CheckBox"
import Type from "../../components/typography/Type"
import FormBlock from "../../components/forms/FormBlock"

export default function PitchReadinessForm() {


  const [state, handleSubmit] = useForm("mwkyjwkv");

  if (state.succeeded) {
        
    return (
      <div>
      <h2 className="text-3xl mb-7">Thanks for getting in touch!</h2>
      <p  className="mb-16">Your Pitch Readiness is ...</p>
      </div>
    );
  }

  return (


<form onSubmit={handleSubmit}>


{/* Validation errors  */}
<div className="w-full sm:w-2/3">
<ValidationError className="bg-orange-light w-full text-orange p-3 rounded-xl mb-7" errors={state.errors} />
<input type="text" name="_gotcha" className="hidden" />
</div>

{/* Progress bar  */}
<div className="grid grid-cols-6 gap-10 mt-16">
  <div className="border-t-2 pt-4 text-2xl text-left">Opportunity</div>
  <div className="border-t-2 text-black/25 border-black/25 pt-4 text-2xl text-left">Market</div>
  <div className="border-t-2 text-black/25 border-black/25 pt-4 text-2xl text-left">Business</div>
  <div className="border-t-2 text-black/25 border-black/25 pt-4 text-2xl text-left">Strengths</div>
  <div className="border-t-2 text-black/25 border-black/25 pt-4 text-2xl text-left">Ask</div>
  <div className="border-t-2 text-black/25 border-black/25 pt-4 text-2xl text-left">Presentation</div>
</div>

{/* Problem  */}
<FormBlock>
  <div className="flex flex-row">
    <div className="w-1/3">
      <img
      className="h-40"
      src="https://ik.imagekit.io/pathventures/pitchmark/Problem.svg"
      alt="Problem"
      />
    </div>
    <div className="w-2/3">
      <div className="text-green h-full flex items-center justify-center">
        <div>
          <div className="text-3xl mb-5">Problem</div>
          <Type type="para2" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip." />
        </div>
      </div>
    </div>
  </div>
  
  <div className="grid grid-cols-2 gap-10 mt-20">
    <CheckBox field="F-CustomerNeed" labelcopy="Shown evidence of customer need" placeholder=""/>
    <CheckBox field="F-ClearProblem" labelcopy="Communicated the problem clearly" placeholder=""/>
    <CheckBox field="F-CompetitiveAdvantage" labelcopy="Defined your competitive advantage" placeholder=""/>
  </div>
  <div>
    <ValidationError prefix="CustomerNeed" field="CustomerNeed" errors={state.errors} />
    <ValidationError prefix="F-ClearProblem" field="F-ClearProblem" errors={state.errors} />
    <ValidationError prefix="F-CompetitiveAdvantage" field="F-CompetitiveAdvantage" errors={state.errors} />
  </div>
</FormBlock>


{/* Solution  */}
<FormBlock>
  <div className="flex flex-row">
    <div className="w-1/3">
      <img
      className="h-40"
      src="https://ik.imagekit.io/pathventures/pitchmark/Solution.svg"
      alt="Solution"
      />
    </div>
    <div className="w-2/3">
      <div className="text-green h-full flex items-center justify-center">
        <div>
          <div className="text-3xl mb-5">Solution</div>
          <Type type="para2" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip." />
        </div>
      </div>
    </div>
  </div>
  
  <div className="grid grid-cols-2 gap-10 mt-20">
    <CheckBox field="F-CustomerNeed" labelcopy="Shown evidence of customer need" placeholder=""/>
    <CheckBox field="F-ClearProblem" labelcopy="Communicated the problem clearly" placeholder=""/>
    <CheckBox field="F-CompetitiveAdvantage" labelcopy="Defined your competitive advantage" placeholder=""/>
  </div>
  <div>
    <ValidationError prefix="CustomerNeed" field="CustomerNeed" errors={state.errors} />
    <ValidationError prefix="F-ClearProblem" field="F-ClearProblem" errors={state.errors} />
    <ValidationError prefix="F-CompetitiveAdvantage" field="F-CompetitiveAdvantage" errors={state.errors} />
  </div>
</FormBlock>



{/* Product  */}
<FormBlock>
  <div className="flex flex-row">
    <div className="w-1/3">
      <img
      className="h-40"
      src="https://ik.imagekit.io/pathventures/pitchmark/Product.svg"
      alt="Product"
      />
    </div>
    <div className="w-2/3">
      <div className="text-green h-full flex items-center justify-center">
        <div>
          <div className="text-3xl mb-5">Product</div>
          <Type type="para2" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip." />
        </div>
      </div>
    </div>
  </div>
  
  <div className="grid grid-cols-2 gap-10 mt-20">
    <CheckBox field="F-CustomerNeed" labelcopy="Shown evidence of customer need" placeholder=""/>
    <CheckBox field="F-ClearProblem" labelcopy="Communicated the problem clearly" placeholder=""/>
    <CheckBox field="F-CompetitiveAdvantage" labelcopy="Defined your competitive advantage" placeholder=""/>
  </div>
  <div>
    <ValidationError prefix="CustomerNeed" field="CustomerNeed" errors={state.errors} />
    <ValidationError prefix="F-ClearProblem" field="F-ClearProblem" errors={state.errors} />
    <ValidationError prefix="F-CompetitiveAdvantage" field="F-CompetitiveAdvantage" errors={state.errors} />
  </div>
</FormBlock>


{/* Why now?  */}
<FormBlock>
  <div className="flex flex-row">
    <div className="w-1/3">
      <img
      className="h-40"
      src="https://ik.imagekit.io/pathventures/pitchmark/WhyNow.svg"
      alt="WhyNow"
      />
    </div>
    <div className="w-2/3">
      <div className="text-green h-full flex items-center justify-center">
        <div>
          <div className="text-3xl mb-5">Why now?</div>
          <Type type="para2" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip." />
        </div>
      </div>
    </div>
  </div>
  
  <div className="grid grid-cols-2 gap-10 mt-20">
    <CheckBox field="F-CustomerNeed" labelcopy="Shown evidence of customer need" placeholder=""/>
    <CheckBox field="F-ClearProblem" labelcopy="Communicated the problem clearly" placeholder=""/>
    <CheckBox field="F-CompetitiveAdvantage" labelcopy="Defined your competitive advantage" placeholder=""/>
  </div>
  <div>
    <ValidationError prefix="CustomerNeed" field="CustomerNeed" errors={state.errors} />
    <ValidationError prefix="F-ClearProblem" field="F-ClearProblem" errors={state.errors} />
    <ValidationError prefix="F-CompetitiveAdvantage" field="F-CompetitiveAdvantage" errors={state.errors} />
  </div>
</FormBlock>


{/* Progress bar  */}
<div className="grid grid-cols-6 gap-10 mt-16">
  <div className="border-t-2 pt-4 border-black/50 text-black/50 text-2xl text-left">Opportunity</div>
  <div className="border-t-2 pt-4 text-2xl text-left">Market</div>
  <div className="border-t-2 text-black/25 border-black/25 pt-4 text-2xl text-left">Business</div>
  <div className="border-t-2 text-black/25 border-black/25 pt-4 text-2xl text-left">Strengths</div>
  <div className="border-t-2 text-black/25 border-black/25 pt-4 text-2xl text-left">Ask</div>
  <div className="border-t-2 text-black/25 border-black/25 pt-4 text-2xl text-left">Presentation</div>

</div>




{/* Why now?  */}
<FormBlock>
  <div className="flex flex-row">
    <div className="w-1/3">
      <img
      className="h-40"
      src="https://ik.imagekit.io/pathventures/pitchmark/MarketSize.svg"
      alt="Market size"
      />
    </div>
    <div className="w-2/3">
      <div className="text-green h-full flex items-center justify-center">
        <div>
          <div className="text-3xl mb-5">Market size</div>
          <Type type="para2" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip." />
        </div>
      </div>
    </div>
  </div>
  
  <div className="grid grid-cols-2 gap-10 mt-20">
    <CheckBox field="F-CustomerNeed" labelcopy="Shown evidence of customer need" placeholder=""/>
    <CheckBox field="F-ClearProblem" labelcopy="Communicated the problem clearly" placeholder=""/>
    <CheckBox field="F-CompetitiveAdvantage" labelcopy="Defined your competitive advantage" placeholder=""/>
  </div>
  <div>
    <ValidationError prefix="CustomerNeed" field="CustomerNeed" errors={state.errors} />
    <ValidationError prefix="F-ClearProblem" field="F-ClearProblem" errors={state.errors} />
    <ValidationError prefix="F-CompetitiveAdvantage" field="F-CompetitiveAdvantage" errors={state.errors} />
  </div>
</FormBlock>


{/* Competitors  */}
<FormBlock>
  <div className="flex flex-row">
    <div className="w-1/3">
      <img
      className="h-40"
      src="https://ik.imagekit.io/pathventures/pitchmark/Competitors.svg"
      alt="Competitors"
      />
    </div>
    <div className="w-2/3">
      <div className="text-green h-full flex items-center justify-center">
        <div>
          <div className="text-3xl mb-5">Competitors</div>
          <Type type="para2" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip." />
        </div>
      </div>
    </div>
  </div>
  
  <div className="grid grid-cols-2 gap-10 mt-20">
    <CheckBox field="F-CustomerNeed" labelcopy="Shown evidence of customer need" placeholder=""/>
    <CheckBox field="F-ClearProblem" labelcopy="Communicated the problem clearly" placeholder=""/>
    <CheckBox field="F-CompetitiveAdvantage" labelcopy="Defined your competitive advantage" placeholder=""/>
  </div>
  <div>
    <ValidationError prefix="CustomerNeed" field="CustomerNeed" errors={state.errors} />
    <ValidationError prefix="F-ClearProblem" field="F-ClearProblem" errors={state.errors} />
    <ValidationError prefix="F-CompetitiveAdvantage" field="F-CompetitiveAdvantage" errors={state.errors} />
  </div>
</FormBlock>




{/* Progress bar  */}
<div className="grid grid-cols-6 gap-10 mt-16">
  <div className="border-t-2 pt-4 border-black/50 text-black/50 text-2xl text-left">Opportunity</div>
  <div className="border-t-2 pt-4 border-black/50 text-black/50 text-2xl text-left">Market</div>
  <div className="border-t-2 pt-4 text-2xl text-left">Business</div>
  <div className="border-t-2 text-black/25 border-black/25 pt-4 text-2xl text-left">Strengths</div>
  <div className="border-t-2 text-black/25 border-black/25 pt-4 text-2xl text-left">Ask</div>
  <div className="border-t-2 text-black/25 border-black/25 pt-4 text-2xl text-left">Presentation</div>

</div>



{/* BusinessModel  */}
<FormBlock>
  <div className="flex flex-row">
    <div className="w-1/3">
      <img
      className="h-40"
      src="https://ik.imagekit.io/pathventures/pitchmark/BusinessModel.svg"
      alt="Business Model"
      />
    </div>
    <div className="w-2/3">
      <div className="text-green h-full flex items-center justify-center">
        <div>
          <div className="text-3xl mb-5">Business Model</div>
          <Type type="para2" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip." />
        </div>
      </div>
    </div>
  </div>
  
  <div className="grid grid-cols-2 gap-10 mt-20">
    <CheckBox field="F-CustomerNeed" labelcopy="Shown evidence of customer need" placeholder=""/>
    <CheckBox field="F-ClearProblem" labelcopy="Communicated the problem clearly" placeholder=""/>
    <CheckBox field="F-CompetitiveAdvantage" labelcopy="Defined your competitive advantage" placeholder=""/>
  </div>
  <div>
    <ValidationError prefix="CustomerNeed" field="CustomerNeed" errors={state.errors} />
    <ValidationError prefix="F-ClearProblem" field="F-ClearProblem" errors={state.errors} />
    <ValidationError prefix="F-CompetitiveAdvantage" field="F-CompetitiveAdvantage" errors={state.errors} />
  </div>
</FormBlock>



{/* Go-To-Market  */}
<FormBlock>
  <div className="flex flex-row">
    <div className="w-1/3">
      <img
      className="h-40"
      src="https://ik.imagekit.io/pathventures/pitchmark/GoToMarket.svg"
      alt="Go-To-Market"
      />
    </div>
    <div className="w-2/3">
      <div className="text-green h-full flex items-center justify-center">
        <div>
          <div className="text-3xl mb-5">Go-To-Market</div>
          <Type type="para2" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip." />
        </div>
      </div>
    </div>
  </div>
  
  <div className="grid grid-cols-2 gap-10 mt-20">
    <CheckBox field="F-CustomerNeed" labelcopy="Shown evidence of customer need" placeholder=""/>
    <CheckBox field="F-ClearProblem" labelcopy="Communicated the problem clearly" placeholder=""/>
    <CheckBox field="F-CompetitiveAdvantage" labelcopy="Defined your competitive advantage" placeholder=""/>
  </div>
  <div>
    <ValidationError prefix="CustomerNeed" field="CustomerNeed" errors={state.errors} />
    <ValidationError prefix="F-ClearProblem" field="F-ClearProblem" errors={state.errors} />
    <ValidationError prefix="F-CompetitiveAdvantage" field="F-CompetitiveAdvantage" errors={state.errors} />
  </div>
</FormBlock>


{/* Financials  */}
<FormBlock>
  <div className="flex flex-row">
    <div className="w-1/3">
      <img
      className="h-40"
      src="https://ik.imagekit.io/pathventures/pitchmark/Financials.svg"
      alt="Financials"
      />
    </div>
    <div className="w-2/3">
      <div className="text-green h-full flex items-center justify-center">
        <div>
          <div className="text-3xl mb-5">Financials</div>
          <Type type="para2" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip." />
        </div>
      </div>
    </div>
  </div>
  
  <div className="grid grid-cols-2 gap-10 mt-20">
    <CheckBox field="F-CustomerNeed" labelcopy="Shown evidence of customer need" placeholder=""/>
    <CheckBox field="F-ClearProblem" labelcopy="Communicated the problem clearly" placeholder=""/>
    <CheckBox field="F-CompetitiveAdvantage" labelcopy="Defined your competitive advantage" placeholder=""/>
  </div>
  <div>
    <ValidationError prefix="CustomerNeed" field="CustomerNeed" errors={state.errors} />
    <ValidationError prefix="F-ClearProblem" field="F-ClearProblem" errors={state.errors} />
    <ValidationError prefix="F-CompetitiveAdvantage" field="F-CompetitiveAdvantage" errors={state.errors} />
  </div>
</FormBlock>



{/* Progress bar  */}
<div className="grid grid-cols-6 gap-10 mt-16">
  <div className="border-t-2 pt-4 border-black/50 text-black/50 text-2xl text-left">Opportunity</div>
  <div className="border-t-2 pt-4 border-black/50 text-black/50 text-2xl text-left">Market</div>
  <div className="border-t-2 pt-4  border-black/50 text-black/50 text-2xl text-left">Business</div>
  <div className="border-t-2  pt-4 text-2xl text-left">Strengths</div>
  <div className="border-t-2 text-black/25 border-black/25 pt-4 text-2xl text-left">Ask</div>
  <div className="border-t-2 text-black/25 border-black/25 pt-4 text-2xl text-left">Presentation</div>

</div>


{/* Team  */}
<FormBlock>
  <div className="flex flex-row">
    <div className="w-1/3">
      <img
      className="h-40"
      src="https://ik.imagekit.io/pathventures/pitchmark/Team.svg"
      alt="Team"
      />
    </div>
    <div className="w-2/3">
      <div className="text-green h-full flex items-center justify-center">
        <div>
          <div className="text-3xl mb-5">Team</div>
          <Type type="para2" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip." />
        </div>
      </div>
    </div>
  </div>
  
  <div className="grid grid-cols-2 gap-10 mt-20">
    <CheckBox field="F-CustomerNeed" labelcopy="Shown evidence of customer need" placeholder=""/>
    <CheckBox field="F-ClearProblem" labelcopy="Communicated the problem clearly" placeholder=""/>
    <CheckBox field="F-CompetitiveAdvantage" labelcopy="Defined your competitive advantage" placeholder=""/>
  </div>
  <div>
    <ValidationError prefix="CustomerNeed" field="CustomerNeed" errors={state.errors} />
    <ValidationError prefix="F-ClearProblem" field="F-ClearProblem" errors={state.errors} />
    <ValidationError prefix="F-CompetitiveAdvantage" field="F-CompetitiveAdvantage" errors={state.errors} />
  </div>
</FormBlock>


{/* Traction  */}
<FormBlock>
  <div className="flex flex-row">
    <div className="w-1/3">
      <img
      className="h-40"
      src="https://ik.imagekit.io/pathventures/pitchmark/Traction.svg"
      alt="Traction"
      />
    </div>
    <div className="w-2/3">
      <div className="text-green h-full flex items-center justify-center">
        <div>
          <div className="text-3xl mb-5">Traction</div>
          <Type type="para2" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip." />
        </div>
      </div>
    </div>
  </div>
  
  <div className="grid grid-cols-2 gap-10 mt-20">
    <CheckBox field="F-CustomerNeed" labelcopy="Shown evidence of customer need" placeholder=""/>
    <CheckBox field="F-ClearProblem" labelcopy="Communicated the problem clearly" placeholder=""/>
    <CheckBox field="F-CompetitiveAdvantage" labelcopy="Defined your competitive advantage" placeholder=""/>
  </div>
  <div>
    <ValidationError prefix="CustomerNeed" field="CustomerNeed" errors={state.errors} />
    <ValidationError prefix="F-ClearProblem" field="F-ClearProblem" errors={state.errors} />
    <ValidationError prefix="F-CompetitiveAdvantage" field="F-CompetitiveAdvantage" errors={state.errors} />
  </div>
</FormBlock>



{/* Progress bar  */}
<div className="grid grid-cols-6 gap-10 mt-16">
  <div className="border-t-2 pt-4 border-black/50 text-black/50 text-2xl text-left">Opportunity</div>
  <div className="border-t-2 pt-4 border-black/50 text-black/50 text-2xl text-left">Market</div>
  <div className="border-t-2 pt-4  border-black/50 text-black/50 text-2xl text-left">Business</div>
  <div className="border-t-2 border-black/50 text-black/50  pt-4 text-2xl text-left">Strengths</div>
  <div className="border-t-2  pt-4 text-2xl text-left">Ask</div>
  <div className="border-t-2 text-black/25 border-black/25 pt-4 text-2xl text-left">Presentation</div>

</div>

{/* The Ask  */}
<FormBlock>
  <div className="flex flex-row">
    <div className="w-1/3">
      <img
      className="h-40"
      src="https://ik.imagekit.io/pathventures/pitchmark/TheAsk.svg"
      alt="The Ask"
      />
    </div>
    <div className="w-2/3">
      <div className="text-green h-full flex items-center justify-center">
        <div>
          <div className="text-3xl mb-5">The Ask</div>
          <Type type="para2" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip." />
        </div>
      </div>
    </div>
  </div>
  
  <div className="grid grid-cols-2 gap-10 mt-20">
    <CheckBox field="F-CustomerNeed" labelcopy="Shown evidence of customer need" placeholder=""/>
    <CheckBox field="F-ClearProblem" labelcopy="Communicated the problem clearly" placeholder=""/>
    <CheckBox field="F-CompetitiveAdvantage" labelcopy="Defined your competitive advantage" placeholder=""/>
  </div>
  <div>
    <ValidationError prefix="CustomerNeed" field="CustomerNeed" errors={state.errors} />
    <ValidationError prefix="F-ClearProblem" field="F-ClearProblem" errors={state.errors} />
    <ValidationError prefix="F-CompetitiveAdvantage" field="F-CompetitiveAdvantage" errors={state.errors} />
  </div>
</FormBlock>


{/* Progress bar  */}
<div className="grid grid-cols-6 gap-10 mt-16">
  <div className="border-t-2 pt-4 border-black/50 text-black/50 text-2xl text-left">Opportunity</div>
  <div className="border-t-2 pt-4 border-black/50 text-black/50 text-2xl text-left">Market</div>
  <div className="border-t-2 pt-4  border-black/50 text-black/50 text-2xl text-left">Business</div>
  <div className="border-t-2 border-black/50 text-black/50  pt-4 text-2xl text-left">Strengths</div>
  <div className="border-t-2  border-black/50 text-black/50   pt-4 text-2xl text-left">Ask</div>
  <div className="border-t-2  pt-4 text-2xl text-left">Presentation</div>
</div>


<FormBlock>

<img
className="h-14"
src="https://ik.imagekit.io/pathventures/pitchmark/Credible.svg"
alt="Credible"
/>
<div className="text-3xl my-10 text-green">Are your assumptions and data credible?</div>

<div className="flex flex-row">
 
 <GraphicRadioButton line1="Not at all"/>
 <GraphicRadioButton line1="Some"/>
 <GraphicRadioButton line1="Very"/>
</div>

<img
className="h-14 mt-24"
src="https://ik.imagekit.io/pathventures/pitchmark/Compelling.svg"
alt="Compelling"
/>
<div className="text-3xl my-10 text-green">Is your story compelling?</div>
<div className="flex flex-row">
 
 <GraphicRadioButton line1="Not at all"/>
 <GraphicRadioButton line1="Some"/>
 <GraphicRadioButton line1="Very!"/>
</div>

<img
className="h-14  mt-24"
src="https://ik.imagekit.io/pathventures/pitchmark/Clear.svg"
alt="Clear"
/>
<div className="text-3xl my-10 text-green">Is your pitch presented clearly and creatively?</div>
<div className="flex flex-row">
 
 <GraphicRadioButton line1="Not at all"/>
 <GraphicRadioButton line1="Some"/>
 <GraphicRadioButton line1="Very!"/>
</div>


</FormBlock>


{/* Progress bar  */}
<div className="mt-16 flex flex-row">
  <div className="mx-auto pt-4 text-3xl text-left">
  <img
  className="h-14 mb-10"
  src="https://ik.imagekit.io/pathventures/pitchmark/ResultsBlack.svg"
  alt="Results"
  />
  Where should we send your results?</div>
</div>


  {/* Contact details*/}

<FormBlock>
    <div className="grid grid-cols-2 gap-4">
      <div className="">
        <Input field="F-Org" labelcopy="Organisation" placeholder="Organisation" />
        <ValidationError  prefix="F-Org" field="F-Org" errors={state.errors} />    
      </div>
      <div></div>
      <div className="">
        <Input field="F-FirstName" labelcopy="First name" placeholder="First name" />
        <ValidationError  prefix="F-FirstName" field="F-FirstName" errors={state.errors} />
      </div>
      <div className="">      
        <Input field="F-LastName" labelcopy="Last name" placeholder="Last name" /> 
        <ValidationError prefix="F-LastName" field="F-LastName" errors={state.errors} />
      </div>
      <div className="">
        <Input field="F-Email" labelcopy="Email" placeholder="Email" type="Email"/> 
        <ValidationError prefix="F-Email" field="F-Email" errors={state.errors} />
      </div>
      <div className="">
        <Input field="text" labelcopy="Phone" placeholder="Phone" /> 
        <ValidationError prefix="F-Phone" field="F-Phone" errors={state.errors} />
      </div>
    </div>
</FormBlock>



{/* Submit */}

      <div className="pt-20 text-right">
        <button className="bg-pink font-bold py-4 px-8 text-sm rounded-md" type="submit" disabled={state.submitting}>Get results</button>
      </div>
      
    </form>
  );
}