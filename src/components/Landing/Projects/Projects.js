import React from 'react';
import project1 from './kar_gallery.png';
import project2 from './twitter.png';
import project3 from './wedding_app.png';

const Projects = () => {
    return (
      <section id='projects'>
<h2>Projects</h2>

<div className="grid-wrapper articles">
  <article className="col-third">
  <h3>Kar Gallery</h3>
    <img src={project1} alt="Landing screen for Kar Gallery" />
    <div> 
    <a href="https://karproject1.herokuapp.com/">Heroku Link</a>
    <h3>Kar Gallery</h3>
          <p>Build a full stack web application using jQuery and AJAX, Express, Node.js, Mongoose, and MongoDB.</p>
      <a href="https://github.com/pouyarezvani/Project-2-KarMedia" >View Source</a>
    </div>
  </article>
  <article className="col-third">
  <h3 className='herokuOne'>Twitter Clone</h3>
    <img src={project2} alt="Login page for Twitter Clone" />
    <div>
      <a href="https://teamtwitterga.herokuapp.com/">Heroku Link</a>
      <h3>Twitter Clone</h3>
          <p>Build a full stack web application using Python, Django and PostgreSQL</p>
      <a  href="https://github.com/serrayon/Twitter" >View Source</a>
    </div>
  </article>
  <article className="col-third">
  <h3 className="herokuTwo">Wedding App</h3>
    <img src={project3} alt="Login page for Wedding App" />
    <a href="https://wedding-11-23.herokuapp.com/">Heroku Link</a>
    <p>Full stack Applications using React and Bootstrap as Front End frameworks and Libraies. Backend as Nodejs, Express, MongoDB and Axios as API.</p>
    <a href="https://github.com/ahdoy888/weddin_react">View F/E</a> <br />
    <a href="https://github.com/ahdoy888/weddin_api">View B/E</a>
  </article>
</div>
</section> 
    )
}

export default Projects;







