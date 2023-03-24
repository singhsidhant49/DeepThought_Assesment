import "./Home.css";
import Navbar from "../components/navbar/Navbar";
import Sidebar from "../components/sidebar/Sidebar";
import RightSidebar from "../components/rightsidebar/Rightsidebar";
import Cards from "../components/cards/Cards";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
 faQuestion,

  faCalendarAlt,
  
  faUsers,
} from "@fortawesome/free-solid-svg-icons";

const Home = () => {
  const data = require("../data.json");

  const asset = data.tasks[0].assets;

  const content = data.tasks[0];
  

  return (
    <> 
      <Navbar />

      <div className="home-container">
        <div className="leftbar">
          <Sidebar content={content}/>
        </div>

        <div className="maiin">
          <div className="maiin-con">
            <div className="mtop">
              <h1 className="maiin-heading">{data.title}</h1>

              <button className="btn">Submit Task</button>
            </div>

            <div className="boxx">
              <div className="boxx-item">
                <h2>{content.task_title}</h2>
                <p>{content.task_description}</p>
              </div>
            </div>

            <div className="boxx-card">
              {asset.map((asst) => (
                <div className="box-card-compo"  key={asst.asset_id}>
                  <Cards assets={asst} />
                </div>
              ))}
            </div>

            {/* =============================== */}

            <div className="bottom-icons">

            

                  <div className="bottom-icons-item">
                <FontAwesomeIcon icon={faQuestion} className="icon-item" />
                </div>

                  <div className="bottom-icons-item">
                <FontAwesomeIcon icon={faUsers} className="icon-item"  />
                </div>

                  <div className="bottom-icons-item">
                <FontAwesomeIcon icon={faCalendarAlt} className="icon-item" />
                </div>

                 
                
   



            
            </div>
           
          </div>
        </div>

        <div className="rightbar">
          <RightSidebar />
        </div>
      </div>
    </>
  );
};

export default Home;
