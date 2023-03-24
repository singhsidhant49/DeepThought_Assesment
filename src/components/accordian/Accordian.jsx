import React ,{useState} from 'react'
import './Accordian.css'
const Accordian = () => {
     const [activeAccordion, setActiveAccordion] = useState(1)

     const toggleAccordion =(index)=>{
           setActiveAccordion(activeAccordion === index ? 0 : index);
     }

  return (
    <div>
    
    <div className="accordion">
  <div className="accordion-item">
    <div className="accordion-header" onClick={() => toggleAccordion(1)}>
    
      <span className="accordion-icon">&#x25BC;</span>
        <span>Introduction</span>
    </div>
    <div className="accordion-content" style={activeAccordion === 1 ? { maxHeight: '1000px' } : { maxHeight: '0px' }}>
      <p>The 4SA Method , How to bring a idea into progress ?.</p>
    </div>
  </div>
  <div className="accordion-item">
    <div className="accordion-header" onClick={() => toggleAccordion(2)}>
      <span className="accordion-icon">&#x25BC;</span>
      <span>Thread A</span>
    </div>
    <div className="accordion-content" style={activeAccordion === 2 ? { maxHeight: '1000px' } : { maxHeight: '0px' }}>
      <p>How are you going to develop your stratergy ? Which method are you going to use to develop a stratergy ? What if the project is lengthy?</p>
    </div>
  </div>

     <div className="accordion-item">
    <div className="accordion-header" onClick={() => toggleAccordion(3)}>
      <span className="accordion-icon">&#x25BC;</span>
      <span>Example 1</span>
    </div>
    <div className="accordion-content" style={activeAccordion === 3 ? { maxHeight: '1000px' } : { maxHeight: '0px' }}>
      <p>You have a concept , How will you put into progress?</p>
    </div>
  </div>


</div>
    
    
    </div>
  )
}

export default Accordian