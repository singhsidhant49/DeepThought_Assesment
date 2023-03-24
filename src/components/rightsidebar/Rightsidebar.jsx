import React, { useState } from 'react';
import './Rightsidebar.css';

function RightSidebar() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleNav() {
    setIsOpen(!isOpen);
  }

  return (
    <>
      
      <nav className={`right-side-nav ${isOpen ? 'open' : ''}`} onClick={toggleNav}>
        
        <div className="right-top-head">
          <p>Notice Board</p>
        </div>
      </nav>
    </>
  ); 
}

export default RightSidebar;