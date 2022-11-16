import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { useForm, ValidationError } from "@formspree/react";
import Required from "../../components/forms/Required"
import TextArea from "../../components/forms/TextArea"
import Input from "../../components/forms/Input"
import SelectOpen from "../../components/forms/SelectOpen"
import GraphicRadioButton from "../../components/forms/GraphicRadioButton"
import CheckBox from "../../components/forms/CheckBox"
import Type from "../../components/typography/Type"
import FormBlock from "../../components/forms/FormBlock"
import ProgressBar from "../../components/forms/ProgressBar"
import RadioButtonGroup from "../../components/forms/RadioButtonGroup"
import Button from "../../components/interactive/Button"


export default function PitchReadinessForm() {
  
  const data = useStaticQuery (
    graphql`
      query PitchSectionsQuery {
        PitchSections: allAirtable (
           filter:  { table: { eq: "PitchSections" } }
           sort: {fields: data___MajorOrder, order: ASC}
         )
        {
          edges {
            node {
              recordId
              data {
                Title
                PitchPages {
                   recordId
                   data {
                     Title
                     ImageURL
                     PageDescription
                     InvestorQuestions {
                        recordId
                        data {
                          Title
                          FieldName
                        }
                      }
                   }
                 }
              }
            }
          }
        }
      }
    `);

  const [state, handleSubmit] = useForm("xqkjwaeb");


const presentationratings = [
    { id: '1', name: 'Not at all' },
    { id: '2', name: 'Some' },
    { id: '3', name: 'Very' },
  ]
  


  if (state.succeeded) {
        
    return (
      <div>
        <Type type="h1" text="What's next?"/>
        <Type type="para1" text="Schedule your Pitch Readiness Workshop so we can compare your results against best practices."/>    
        <Type type="para2" text="You'll walk away with an idea of your overall pitch readiness including:"/>
        <Type type="para2" text="Where your current pitch deck is at, page by page."/>
        <Type type="para2" text="The top three areas you should work on."/>
        <Type type="para2" text="Feedback on why you should address certain areas"/>
        <div className="mt-5"><Button url="https://calendly.com/pitchmark/workshop" title="Schedule your workshop"/></div>
      </div>
    );
  }

  return (



<div>

   <div className="w-full sm:w-2/3 lg:w-1/2">
  <Type type="h1" text="Is your pitch ready?"/>
  <Type type="h2" text="Our pitch readiness checker helps you compare your pitch against the contents of a typical seed round pitch deck."/>
  <Type type="h2" text="Reflect on what's included in your pitch deck and then answer the following questions. We'll provide you with a readiness rating for your pitch."/>
</div>


<form onSubmit={handleSubmit}>


{/* Validation errors  */}
<div className="w-full sm:w-2/3">
<ValidationError className="bg-pink w-full text-pink p-3 rounded-xl mb-7" errors={state.errors} />
<input type="text" name="_gotcha" className="hidden" />
</div>


 {data.PitchSections.edges.map((edge) => (
<div>
 <ProgressBar current={edge.node.data.Title}/>

{edge.node.data.PitchPages.map((array) => (
 <FormBlock>
   <div className="flex sm:flex-row flex-col">
     <div className="w-full sm:w-1/3 mr-0 sm:mr-10">
        <img
             className="h-40"
             src={array.data.ImageURL}
             alt={array.data.Title}
             />
     </div>
     <div className="w-full sm:w-2/3">
       <div className="text-green h-full flex items-center justify-center">
         <div>
           <div className="text-3xl mb-5 mt-5 sm:mt-0">{array.data.Title}</div>
           <Type type="para2" text={array.data.PageDescription} />
         </div>
       </div>
     </div>
   </div>
   <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-10 sm:mt-20 ">
    {array.data.InvestorQuestions.map((array) => (
   <CheckBox field={array.data.FieldName} labelcopy={array.data.Title} placeholder=""/>
   ))}
   </div>
   <div>
   {array.data.InvestorQuestions.map((array) => (
      <ValidationError prefix={array.data.FieldName} field={array.data.FieldName} errors={state.errors} />
    ))}
   </div>
 </FormBlock>

))}
</div>

))}


<ProgressBar current="Presentation"/>



<FormBlock>

    <div className="">
      <img
      className="h-14"
      src="https://ik.imagekit.io/pathventures/pitchmark/Credible.svg"
      alt="Credible"
      />
      <div className="text-3xl my-10 text-green">Are your assumptions and data credible?</div>
      <RadioButtonGroup options={presentationratings} field="F-Credible"/>
      <ValidationError prefix="F-Credible" field="F-Credible" errors={state.errors} />

    </div>

    <div className="mt-24">
      <img
      className="h-14"
      src="https://ik.imagekit.io/pathventures/pitchmark/Compelling.svg"
      alt="Credible"
      />
      <div className="text-3xl my-10 text-green">Is your story compelling?</div>
      <RadioButtonGroup options={presentationratings} field="F-Compelling"/>
      <ValidationError prefix="F-Compelling" field="F-Compelling" errors={state.errors} />

    </div>

    <div className="mt-24">
      <img
      className="h-14 mt-24"
      src="https://ik.imagekit.io/pathventures/pitchmark/Clear.svg"
      alt="Credible"
      />
      <div className="text-3xl my-10 text-green">Is your pitch well-presented and clear?</div>
      <RadioButtonGroup options={presentationratings} field="F-Clear"/>
      <ValidationError prefix="F-Clear" field="F-Clear" errors={state.errors} />

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
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
        <Input field="F-Phone" labelcopy="Phone" placeholder="Phone" /> 
        <ValidationError prefix="F-Phone" field="F-Phone" errors={state.errors} />
      </div>
    </div>
</FormBlock>



{/* Submit */}

      <div className="pt-20 text-right">
        <button className="bg-pink font-bold py-4 px-8 text-sm rounded-md" type="submit" disabled={state.submitting}>Get results</button>
      </div>
      
    </form>
    </div>
  );
}