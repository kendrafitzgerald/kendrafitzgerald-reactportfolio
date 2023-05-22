import React from "react";
import ProfilePic from '../../images/profile-pic-professional.png'
const styles = {
  body: {
    background: "#000018",
    height: 525,
    width: 800,
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  header: {
    color: "white",
    fontFamily: 'Rockwell, Courier Bold, Courier'
  },
  text: {
    color: "white",
    fontFamily: 'Rockwell, Courier Bold, Courier'
  },
  profilePic: {
    borderRadius: '50%',
    width: 125,
    height: 125,
    marginLeft: 350
  }
};
export default function AboutMe() {
  return (

      <div className='card' style={styles.body}>
        <div className='card-body' >
        <h1 style={styles.header}>About Me
        <img src={ProfilePic} style={styles.profilePic} alt='Kendra Fitzerald looking professional'/>
        </h1>
        <p style={styles.text}>
          Hello! My name is Kendra and I am a FullStack Web Developer. I
          graduated from the University of Pennsylvania's FullStack Web Development
          Bootcamp in June 2023, with a grade of A. I learned multiple valuable technical skills 
          throughout my tenure at UPenn. I am experienced in the MERN Stack: MongoDb, Express.JS, React, and Node.JS.
          Furthermore, I am also experienced in HTML5, CSS3, JavaScript, jQuery, MySql, GraphQL, Jest, Git, Bootstrap, and Bulma.
          In all of my projects throughout the course, I have utilized Agile methodologies in order to design and deploy FullStack applications.
          I am passionate about creating technologies that find innovative solutions to complex problems, helping others,
          and catalyzing the ways in which software development can harbor a more productive society.
        <br></br>
          Prior to my completion of UPenn's BootCamp, I graduted cum laude from Tulane University with a GPA of 3.8, 
          making the Dean's List for 5 semesters.
          Majoring in Political Science with a minor in Psychology, I also received departmental honors following the 
          completion of my Honors Thesis on U.S. Governmental Interference in Psychedelic Therapy Research. I am also a 
          member of Pi Sigma Alpha, the Political Science National Honors Society. 
          My background at Tulane has allowed me to have a deep understanding of human nature. 
          The soft skills I learned at Tulane, intertwined with the technical skills I have gained with UPenn, provide me the ability
          to design software with innately human elements.
        </p>
      </div>
      </div>
  );
}
