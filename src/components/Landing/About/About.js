import React from 'react';

import './About.css';

const About = () => {
    return(
      <>
      <section id="about" className="callout-about">
        <article className="wrap">
          <h3>About Me</h3>
          <p>Hi! My name is Jacky Koo and I am a full stack developer recently graduated from the General Assembly. 
          <br />After working 10 years in the Healthcare industry, I decided to look into other fields that will allow me to utilize the skills I’ve learned from the healthcare field. I stumbled upon the teach industry and specially the field of web development. I began a few months of self-studying and unbeknownst to me at that time, it would turned out to be something I have great passion for. So at my mid 30s, I decided to take a leap and switch career to become a developer.
          I gained 3 very important skills in the 10 years I’ve spent in the healthcare industry</p> 
            <ul className="skills">
              <li>Problem Solving</li>
              <li>Patience</li>
              <li>Client Focus</li>
            </ul>
            <p>Problem solving and patience allows me to look at a problem and be able to come up with different ways to achieve the best results. The ability to focus on what the client needs the most allows me to create the most user friendly experience for clients.</p>
        </article>
      </section>
      </>
    )
  }

export default About;
