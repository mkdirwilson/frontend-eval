/* eslint-disable react/prop-types */
import { useState } from "react"

import './index.css'


// Faq component for individual queries
const Faq = ({query, id}) => {

  // This ensures the first button is always displayed
  const [active, setActive] = useState(id === 0)

 


  return (
    <>  
    {/* clicking toggles the active state of the component and hence the accordion logic */}
      <section className="accordion">
          <button 
            onClick={()=>{setActive(!active)}
            } 
            aria-controls={query.question} aria-expanded={active}
            className="accordion_header">
              {query.question}
          </button>
      { active ? <p className={active ? 'active' : 'inactive'} id={query.question}>{query.answer}</p> : null }
      </section>
    </>
  )

}



// FaqList component for rendering the collection of queries 
const FaqList = ({inquiries})=> {
  return (
    <>
      {/* loops through each query and generate a Faq component for each */}
      {inquiries.map((query, index)=>
        <Faq query={query} key={index} id={index}/>
      )}
    </>
 )
}


// Main App component
const App = () => {

  // question list 
  const inquiries = [
    {
      question: "How many bones does a cat have?",
      answer: "A cat has 230 bones - 6 more than a human",
    },
    {
      question: "How much do cats sleep?",
      answer: "The average cat sleeps 12-16 hours per day",
    },
    {
      question: "How long do cats live",
      answer: "Outdoor cats live 5 years on average. Indoor\ncats live 15 years on average.",
    }
  ]

  return (
    <>
      <h2>Frequently asked questions</h2>
      <FaqList inquiries={inquiries}/>
    </>
  )
}


export default App