import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";


const ProgressBar = (props) => {

const current = props.current;

const data = useStaticQuery (
graphql`
  query ProgressBarQuery {
    ProgressBar: allAirtable (
       filter:  { table: { eq: "PitchSections" } }
       sort: {fields: data___MajorOrder, order: ASC}

     )
    {
      edges {
        node {
          recordId
          data {
            Title
          }
        }
      }
    }
  }
`);
 
  return (
      
      <div className="grid grid-cols-6 gap-10 mt-16">
        {data.ProgressBar.edges.map((edge) => (
        
            <div className={edge.node.data.Title=== current ? "border-t-2 text-black border-black pt-4 text-2xl text-left" : "border-t-2 text-black/25 border-black/25 pt-4 text-2xl text-left"}>            
              <span className="invisible lg:visible">{edge.node.data.Title}</span>
            </div>
        ))}
          <div className={current === 'Presentation' ? "border-t-2 text-black border-black pt-4 text-2xl text-left" : "border-t-2 text-black/25 border-black/25 pt-4 text-2xl text-left"}>
            <span className="invisible lg:visible">Presentation</span>
          </div>
      </div>
   );
};  
export default ProgressBar ;