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
    website_name:'',
    frontend:'Frontend Framework',
    company_name:'',
    mobileapp:'Mobile App required?',
    description:'',
    backend:'Backend',
    Webapptype:'Web Application Type?',
    data:{},
    response_data:{}

  };

  handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    this.setState({
      data:{...this.state.data,[name]:value}
    })
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
    if(this.state.website_name==='' || this.state.company_name==='' || this.state.description==='' || this.state.frontend==='Frontend Framework' || this.state.backend==='Backend' || this.state.mobileapp==='Mobile App required?' || this.state.Webapptype==='Web Application Type?'){
        alert('Details insufficent, please fill all required fields')
    }else{

      // delete the below setstate after updation
      // this.setState({
      //   redirect: true,
      // });

      // update below request code
      
      axios.post('http://127.0.0.1:5000/code/generate_website', obj)
     .then((response)=> {
      this.setState({
        response_data: response.data.response_data.frontend_url,
     });
       this.setState({
          redirect: true,
       });
       //console.log(response.data.response_data.frontend_url);
     })
     .catch((error) => {
       this.setState({
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
            <MainContent >
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

                      <div className="form-group input-container ic1">
                        
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
                          <option value="React" className="input">
                            React
                          </option>
                          <option value="Angular" className="input">
                            Angular
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

                      <div className="form-group input-container ic2" >
                        <select
                          id="mobileapp"
                          name="mobileapp"
                          className="input"
                          onChange={this.handleChange}
                        >
                          <option hidden defaultValue >
                              Mobile App required?
                          </option>
                          <option value="true" className="input">
                            Yes
                          </option>
                          <option value="false" className="input">
                            No
                          </option>
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
                          id="isbackend"
                          name="isbackend"
                          className="input"
                          style={{marginBottom:"2vh"}}
                        >
                          <option hidden defaultValue>
                            Is Backend Required
                          </option>
                          <option value={true}>Yes</option>
                          <option value={false}>No</option>
                        </select>
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
                          <option value="Python">Python</option>
                          <option value="Node">Node</option>
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
                            <option hidden defaultValue >
                                Web Application Type?
                            </option>
                            <option value="org" className="input">
                              Organization Website
                            </option>
                            <option value="blog" className="input">
                              Blog Website
                            </option>
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
            </MainContent>
          </MainContainer>
        </>
      );
    }
  }
}

export default Main;
