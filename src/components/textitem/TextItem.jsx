
import './TextItem.css'
import React from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const TextItem = () => {
  return (
    <>
    <div className='text-con'>

     <div className="text-con-item">
          <label>Title</label> <br/>
          <input type="text" />
     </div>

     <div className="text-con-item">
     
     <label>Content</label> <br/>

     {/* <textarea>
     
     
     </textarea> */}

     <ReactQuill className='rec'  />
     
     </div>
     
    
    
    </div>
    
    
    
    </>
  )
}

export default TextItem