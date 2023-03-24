import React from "react";

import "./Menu.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {

  faChevronUp,
  faLightbulb,
  faMessage,
  faSpa,
  faQuestionCircle,
} from "@fortawesome/free-solid-svg-icons";

// Demo styles, see 'Styles' section below for some notes on use.

import { useState } from "react";
import useCollapse from "react-collapsed";

export default function Menu() {
  const [isExpanded, setExpanded] = useState(true);
  const { getCollapseProps, getToggleProps } = useCollapse({ isExpanded });

  const handelEvent=()=>{

  }

  return (
    <>
    <div className="colap-conn" >
      <a
        className="colap-btn"
        {...getToggleProps({
          onClick: () => setExpanded((prevExpanded) => !prevExpanded),
        })}
      >

     
        <div className="btn-cnt">
          <FontAwesomeIcon icon={faChevronUp} className="ic" />
          Thread A
        </div>
      </a>
   </div>
      <section {...getCollapseProps()} className="colap-section">
        <div className="colop-sec-top">
          <div className="sec-top-item">
            <span> Sub Thread 1 </span>

            <textarea value="enter your text"  onChange={handelEvent}/>
          </div>

          <div className="sec-top-item">
            <span> Sub Thread 1 </span>
            <textarea value="enter your text"  onChange={handelEvent}></textarea>
          </div>
        </div>

        <div className="colopsec-mid">
          <div className="mt">
         <div className="mid-icon">
            <FontAwesomeIcon className="fai"  icon={faLightbulb} />
          </div>

          <div className="mid-icon">
            <FontAwesomeIcon className="fai"  icon={faMessage} />
          </div>

          <div className="mid-icon">
            <FontAwesomeIcon className="fai" icon={faQuestionCircle} />
          </div>

          <div className="mid-icon">
            <FontAwesomeIcon className="fai" icon={faSpa} />
          </div>
          </div>
          
         <div  className="mt">
          <div className="mid-icon2">
               <select>
               <option>Select Catelog</option>

               </select>
          </div>
          <div className="mid-icon2">
              <select>
               <option>Select Catelog</option>

               </select>
          </div>
         </div>
        </div>
        
        <div className="colopsec-bottom">

          <button >Sub Thread</button>
           <div className="sec-bottom-item">
            <span> Summary For Thread A</span>

            <textarea value="enter your text"  onChange={handelEvent}></textarea>
          </div>
          
        </div>




      </section>
    </>
  );
}
