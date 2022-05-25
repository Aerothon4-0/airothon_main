import React, { useEffect, useState } from "react";
import { FinalPageContainer, FinalPageContent } from "./FinalPageElements";
import "./index.css";
import { InputForm } from "./FinalPageElements";
import Video from "../../videos/video.mp4";
import { MainBg, VideoBg } from "../Main/MainElements";
import axios from "axios";

const FinalPage = ({ props }) => {
  // console.log("in editor", props);
  const [url,setUrl] =useState('https://www.WordPress.com');
  const [compname,setCompanyname] = useState('Company Name');
  const [website,setWebsite] = useState('Website Name');
  const [description,setDescription] = useState('Company Description');
  const [frontend,setFrontend] = useState('Frontend Used');
  const [backend,setBackend] = useState('Backend Used');
  const [isbackend,setIsBackend] = useState(false);
  
  
  const [flag,setFlag] =useState(false)
  const [data,setData] = useState([])
  
                          // need to update on connecting to server

    useEffect(() => {
      // setInterval(() => {
      //   // Closed the loading
      //         setFlag(true)
      // }, 3000);
         const loadPost = async () => {
  
             axios.get('http://127.0.0.1:5000/code/get_data')
             .then(function (response) {
                 // After fetching data stored it in posts state.
                 console.log(response)
                 console.log(response.data.data)
                setUrl(response.data.data.url)
                setCompanyname(response.data.data.company_name)
                setWebsite(response.data.data.website_name)
                setDescription(response.data.data.description)
                setFrontend(response.data.data.frontend)
                setBackend(response.data.data.backend)
                setIsBackend(response.data.data.isbackend)
                setData(response.data);
    
               // Closed the loading
               setFlag(true)
             })
             .catch(function (error) {
               console.log(error);
             });
         }
  
         // Call the function
         loadPost();
    }, []);
  return (
    <>
    <FinalPageContainer id="fp">
    <MainBg>
      <VideoBg autoPlay loop muted src={Video} type="video/mp4"></VideoBg>
    </MainBg>
    <FinalPageContent>
      <InputForm >
      {flag?<div className="container" >
          <div className="title" ><u>Result</u></div>
          <div className="subtitle">
            {/* edit below */}
            Your Website Url: <a href={url} target="_blank" style={{marginLeft:"5px",color:"white",textDecoration:"none",}} className="lnk"><i>{url}</i></a>
          </div>
          <div className="subtitle">
            {/* edit below */}
            Your Website Name: {website} 
          </div>
          <div className="subtitle">
            {/* edit below */}
            Your Company Name: {compname}
          </div>
          <div className="subtitle">
            {/* edit below */}
            Website Description: {description}
          </div>
            {/* edit below */}
          <div className="subtitle">Front-end used: {frontend}</div>
          {isbackend?<div className="subtitle">Back-end used: {backend}</div>:""}
          <div style={{display:"flex",flexDirection:"row",marginTop:0,paddingLeft:"20%"}} className="subtitle">
              <button
                      type="text"
                      className="submit "
                    >
                      Download Front-end code
                    </button>
                <button
                  type="text"
                  className="submit "
                >
                  Download Back-end code
                </button>
          </div>
          
        </div>:<div>Loading.....</div>}
        
      </InputForm>
    </FinalPageContent>
  </FinalPageContainer>
      
    </>
  );
};

export default FinalPage;
