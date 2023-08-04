import React from "react";
import "./about.css";
import raghav from "../../assets/raghav.jpg";

const About = () => {
  return (
    <div className="about-screen">
      <div className="about-container">
        <div className="mac-design-about">
          <div className="red-about"></div>
          <div className="green-about"></div>
        </div>
        <div className="parent">
          <div className="left-half">
            <div className="cd-contact-form">
              <span className="green-span">raghav $</span> cd About
            </div>
            <div className="about-contact-form">
              <span className="green-span">
                About <span className="light-green">(main)</span> $
              </span>
            </div>
            <div className="about-para">My name is Raghavendra J, I completed my engineering from Atria Institute of Technology in the year 
                2023. I have a Strong passion for developing engaging and user Friendly websites. <br/>
                If u don't see me playing, You can assume that  i'm building my next project. </div>
                <div className="technical-skills">
                    I'm Proficient in HTML, CSS, JavaScript, MySQL, Python, Java, ReactJs, TailwindCSS, Bootstrap, MaterialUI, Node, UI/UX.   
                </div>
                <div className="moto">My Mantra- <br/>
                <span className="red-red">~BE HUNGRY FOR KNOWLEDGE.~</span></div>
          </div>
          <div className="right-half">
            <img className="img-ragh" src={raghav} alt="lol" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
