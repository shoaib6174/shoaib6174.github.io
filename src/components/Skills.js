import React, { Component } from "react";
import Badge from "react-bootstrap/Badge";

class Skills extends Component {
  render() {
    if (this.props.sharedSkills && this.props.resumeBasicInfo) {
      var sectionName = this.props.resumeBasicInfo.section_name.skills;
      var skills = this.props.sharedSkills.map(function (skills, i) {
        
        return (
          <div>
  
            <span>
                <h2 className='text-center'>{Object.keys(skills)[0]}: </h2>
            </span>
        
            {
              skills[Object.keys(skills)[0]].map(function (skill, i)  {
                return (
              <li className="list-inline-item mx-3" key={i}>
            
            <span>
            <Badge pill className="skill-badge  mr-1 mb-1" key={i}>
              <div className="text-center">
                <i  style={{ fontSize: "300%" }}>
                  <p
                    className="text-center"
                    style={{ fontSize: "40%", marginTop: "0px" }}
                  >
                    {skill}
                  </p>
                </i>
              </div>
              </Badge> 
            </span>
          </li> )
              
              })}
      
          <br/>
          <br/>
          
          </div>
        );
      });
    }

    return (
      <section id="skills">
        <div className="col-md-12">
          <div className="col-md-12">
            <h1 className='text-center'>
              <span className="text-white">
                <h1>
                {sectionName}
                </h1>
                
                </span>
            </h1>
          </div>
          <br></br>
          <br></br>
          <div className="col-md-12">
            <ul className=" skill-icon">{skills}</ul>
          </div>
        </div>
      </section>
    );
  }
}

export default Skills;
