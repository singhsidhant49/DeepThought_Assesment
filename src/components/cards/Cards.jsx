
import Menu from '../menu/Menu'
import './cards.css'
import TextItem from '../textitem/TextItem'
import Accordian from '../accordian/Accordian'
const Cards2 = (props) => {

   const description= props.assets.asset_description;
   const title= props.assets.asset_title;
   const asset_content = props.assets.asset_content;
   const asset_type= props.assets.asset_type;
   const asset_content_type= props.assets.asset_content_type;
   const key_id=props.assets.asset_id;

   
     


  
  return (
    <>
      <div className="card">
        
          <div className="card-top">
            <p>{title}</p>
          
          </div>

         
            <p> <span>Description : </span> {description} </p>
        
         
         
          <div className="frame">

          {(asset_content_type==='video') && <iframe width="99%" height="300px"  className='.card-body-frm'
                key={key_id} title={title} src={asset_content}></iframe>}      
                
           

           { (asset_content_type==='threadbuilder') && <Menu/>  }

          
           {(asset_content_type==='article') && (asset_type==='input_asset') && <TextItem />  }

             {(asset_content_type==='article') && (asset_type==='display_asset') && <Accordian/>  }

            
            
          </div>
          
        
        </div>
    
    </>
  )
}

export default Cards2