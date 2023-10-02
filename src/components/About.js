import { Outlet } from "react-router-dom";
import Profile from "./Profile";
import ProfileClass from "./ProfileClass";
import React from "react";
import UserContext from "../utils/UserContext";
import rahul from "../images/Rahul.jpg";
import react from "../images/react.png";
import javascript from "../images/javascript.png";
import html from "../images/html5.png";
import css from "../images/css3.png";
import tailwind from "../images/tailwind-css.png";
import bootstrap from "../images/bootstrap.png";

// const About2 = () => {
//    return(
//        <div>
//        <h1>About Us</h1>
//        <Profile name={"Prashant"} />
//        <ProfileClass name={"PrashantClass"} />
//        </div>
//    )
// }

class About extends React.Component {
  constructor(props) {
    super(props);
    //   console.log("Parent - Constructor");
  }

  componentDidMount() {
    // console.log("Parent - CompoonentDidMount");
  }

  render() {
    // console.log("Parent - render");
    return (
      <div className="about">
        {/* <UserContext.Consumer>
                    {
                    ({user}) => 
                    <h4>
                        {user.name}-{user.email}
                        </h4> 
                        }
                </UserContext.Consumer>
            <h1>About Us</h1>
            <ProfileClass name={"First Child"} />
            <ProfileClass name={"Second Child "} /> */}
        <img />

        <span className="developer">Frontend React Js Developer</span>
        <img src={rahul} className="myimage"></img>
        <div className="aboutme">
          <span>Hi... I am Rahul P S </span>
          <span>I am from Kasaragod, Kerala</span>
          <span>1 year experience as a MERN Stack Developer</span>
          <p>
            Developed 2 Main projects and several mini project from scratch
            ,Highly Responsive Website
          </p>
          <p>
            Tech Stack used: React Js| Node.js | Express.js | Mongo DB| Tailwind
            | Redux-toolkit | Jest | AWS S3 |AWS/AZURE | Firebase | ChatGPT |
            {/* <img src={react}/> , Javascript & Advance Javascript  <img src={javascript}/> ,  HTML5 <img src={html}/> ,  CSS3 <img src={css}/> ,Tailwind <img src={tailwind}/> ,  Bootstrap 5   <img src={bootstrap}/> */}
          </p>
        </div>
      </div>
    );
  }
}

export default About;
