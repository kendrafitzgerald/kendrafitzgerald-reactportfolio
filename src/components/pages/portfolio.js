import React from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faGithub} from '@fortawesome/free-brands-svg-icons'
//styling for portfolio
const styles = {
  body: {
    background: "#000018",
    height: 525,
    width: 800,
    marginLeft: "auto",
    marginRight: "auto",
  },
  header: {
    color: "white",
    fontFamily: "Rockwell, Courier Bold, Courier",
    textAlign: 'center'
  },
  subtitle: {
    fontFamily: "Rockwell, Courier Bold, Courier",
    fontSize: 20,
    color: "white",
    fontStyle: 'italic',
    textAlign: 'center'
  },
  imgCard: {
    background: "rgba(0, 0, 0, 0",
    height: 300,
    width: 300,
    marginLeft: "auto",
    marginRight: "auto",
  },
  img: {
    height: 150,
    width: 300,
    boxShadow: "10px 5px 5px white",
  },
  tech: {
    fontFamily: "Rockwell, Courier Bold, Courier",
    marginTop: 10,
    color: "white",
    fontSize: 20,
  },
  title: {
    fontFamily: "Rockwell, Courier Bold, Courier",
    fontSize: 20,
    color: "white",
    textDecoration: "none",
  },
  github: {
    fontFamily: "Rockwell, Courier Bold, Courier",
    fontSize: 18,
    color: 'white',
    textDecoration: 'none'
  }
};
export default function Portfolio({ projects }) {
  //function maps over each project in array from projects.js, renders each project as a card
  //with specific data for said project
  return (
    <div>
      <h1 style={styles.header}>Portfolio</h1>
      <h2 style={styles.subtitle}>Click on a Project to See it in Action!</h2>
      <div className="row">
        {projects.map((project) => (
          <div
            className="post-card col-md-4"
            key={project.id}
            style={styles.imgCard}>
            <div className="card-body">
              <h2>
                <a href={project.link} style={styles.title}>
                  {project.name}  <img
                src={project.img}
                style={styles.img}
                alt="project main page or placeholder"
              />
                </a>
              </h2>
              <h3 style={styles.tech}>{project.tech}</h3>
              <a href={project.gitHub} style={styles.github}> <FontAwesomeIcon icon={faGithub}/> Repo
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
