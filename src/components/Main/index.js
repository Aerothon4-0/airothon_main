import React from "react";
import FinalPage from "../FinalPage/index";
import "./index.css";
import Video from "../../videos/video.mp4";
import {
  MainContainer,
  MainBg,
  VideoBg,
  MainContent,
  InputForm,
} from "./MainElements";
import axios from "axios";

class Main extends React.Component {
  state = {
    redirect: false,
    showloader:false,
    website_name:'',
    frontend:'Frontend Framework',
    company_name:'',
    mobileapp:'Mobile App required?',
    description:'',
    backend:'Backend',
    Webapptype:'Web Application Type?',
    response_data:{}

  };

  handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    
    if(name==='website_name'){
      this.setState({
        website_name:value
      })
    }else if(name==='frontend'){
      this.setState({
        frontend:value
      })
    }else if(name==='company_name'){
      this.setState({
        company_name:value
      })
    }else if(name==='mobileapp'){
      this.setState({
        mobileapp:value
      })
    }else if(name==='description'){
      this.setState({
        description:value
      })
    }else if(name==='backend'){
      this.setState({
        backend:value
      })
    }else if(name==='Webapptype'){
      this.setState({
        Webapptype:value
      })
    }
  };

  handleSubmit = (e) => {
    e.preventDefault();

    var obj={"website_name" : this.state.website_name,   "company_name" : this.state.company_name,"company_description" : this.state.description,"is_front_end" : true,"front_end" : this.state.frontend,"front_type" : this.state.Webapptype,"is_back_end" : true,"back_end" : this.state.backend,"is_mobile_app_end" : this.state.mobileapp}
    if(this.state.website_name==='' || this.state.company_name==='' || this.state.description==='' || this.state.frontend==='Frontend Framework' || (this.state.mobileapp==='true'?null:this.state.backend==='Backend') || this.state.mobileapp==='Mobile App required?' || this.state.Webapptype==='Web Application Type?'){
        alert('Details insufficent, please fill all required fields')
    }else if(this.state.mobileapp==='true' && this.state.Webapptype==='vr'){
      this.setState({
        showloader:true
      })
      setTimeout(() => {
        this.setState({
          showloader: false,
          response_data:'https://github.com/Aerothon4-0/airothon_react_native_AR',
          redirect:true
        });
      }, 2000);
    }else{

      this.setState({
        showloader: true,
      });

      // update below request code
      // axios.post('http://ec2-35-83-83-107.us-west-2.compute.amazonaws.com:5000/code/generate_website', obj)
      axios.post('http://0.0.0.0:5000/code/generate_website', obj)
     .then((response)=> {
      this.setState({
        response_data: response.data.response_data.frontend_url,
     });
       this.setState({
          showloader: false,
          redirect: true,
       });
       //console.log(response.data.response_data.frontend_url);
     })
     .catch((error) => {
       this.setState({
        showloader: false,
         redirect: true,
       });
       console.log(error);
     });
    }
    


  };

  render() {
    if (this.state.redirect) {
      return <FinalPage props={this.state} />;
    } else {
      // console.log("in else", this.state);
      return (
        <>
        <MainContainer id="mn">
            <MainBg>
              <VideoBg
                autoPlay
                loop
                muted
                src={Video}
                type="video/mp4"
              ></VideoBg>
            </MainBg>
            {this.state.showloader?
                  <div style={{color:"white",fontWeight:"bold",zIndex:"9999",marginTop:"-30%"}}><h1>Creating server. This may take some minutes....</h1></div>
              :<MainContent >
              <InputForm >
                <div className="container" >
                  <div className="title">Welcome</div>
                  <div className="form" id="form">
                    <div className="form-row">
                      <div className="form-group input-container ic1">
                        <input
                          id="website_name"
                          name="website_name"
                          className="input"
                          type="text"
                          placeholder=" "
                          onChange={this.handleChange}
                        />
                        <div className="cut"></div>
                        <label htmlFor="website_name" className="placeholder">
                          Website Name
                        </label>
                      </div>
                      <div className="form-group input-container ic1" >
                        <select
                          id="mobileapp"
                          name="mobileapp"
                          className="input"
                          onChange={this.handleChange}
                        >
                          <option hidden defaultValue >
                              Application Type
                          </option>
                          <option value="true"  className="input">
                            Mobile Application
                          </option>
                          <option value="false" className="input">
                            Web Application
                          </option>
                        </select>
                      </div>
                      
                    </div>
                    <div className="form-row">
                      <div className="form-group input-container ic2">
                        <input
                          id="company_name"
                          name="company_name"
                          className="input"
                          type="text"
                          placeholder=" "
                          onChange={this.handleChange}
                        />
                        <div className="cut"></div>
                        <label htmlFor="company_name" className="placeholder">
                          Company Name
                        </label>
                      </div>
                      <div className="form-group input-container ic2">
                        
                        <select
                          id="frontend"
                          name="frontend"
                          className="input"
                          placeholder=" "
                          onChange={this.handleChange}
                        > 
                          <option hidden defaultValue >
                            Frontend Framework
                          </option>
                          {this.state.mobileapp==='false' ?<option value="react" className="input">
                            React
                          </option>:null}
                          {this.state.mobileapp==='false'?<option value="Angular" disabled="true" className="input">
                            Angular
                          </option>:null}
                          {this.state.mobileapp==='true'?<option value="React Native" className="input">
                            React Native
                          </option>:null}
                          
                        </select>
                      </div>
                    </div> 
                    <div className="form-row">
                      <div className="form-group input-container ic2" style={{height:"auto"}}>
                        <textarea
                          id="description"
                          name="description"
                          className="input"
                          type="text"
                          placeholder=" "
                          onChange={this.handleChange}
                          style={{height:"15vh"}}
                        />
                        <div className="cut cut-short"></div>
                        <label htmlFor="description" className="placeholder">
                          Description
                        </label>
                      </div>

                      <div className="form-group input-container ic2 left" style={{height:"8vh"}}>
                     
                        <select
                          id="backend"
                          name="backend"
                          className="input"
                          onChange={this.handleChange}
                          style={{bottom:0}}
                        >
                          <option hidden defaultValue>
                            Backend
                          </option>
                          <option value="python" disabled={this.state.mobileapp==='true'?true:false}>Python</option>
                          <option disabled="true" value="Node">Node</option>
                        </select>
                      </div>
                      
                    
                    </div>
                    <div className="form-row" style={{marginTop:"-1.5vh"}}>
                      <div className="form-group input-container ic2" >
                          <select
                            id="Webapptype"
                            name="Webapptype"
                            className="input"
                            onChange={this.handleChange}
                            style={{justifyContent:"left",display:"flex",height:"6vh"}}
                          >
                            
                            {this.state.mobileapp==='true'?<option hidden defaultValue >
                                Mobile Application Type?
                            </option>:<option hidden defaultValue >
                                Web Application Type?
                            </option>}
                            {this.state.mobileapp==='true'?null:<option value="org" className="input">
                              Organization Website
                            </option>}
                            {this.state.mobileapp==='true'?null:<option value="blog" className="input">
                              Blog Website
                            </option>}
                            {this.state.mobileapp==='true'?null:<option value="iot" className="input">
                              IOT
                            </option>}
                            {this.state.mobileapp==='true'?<option value="vr" className="input">
                              VR Application
                            </option>:null}
                          </select>
                        </div>
                    </div>
                    <button
                      type="text"
                      className="submit"
                      onClick={this.handleSubmit}
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </InputForm>
            </MainContent>}
          </MainContainer>
          
        </>
      );
    }
  }
}

export default Main;
