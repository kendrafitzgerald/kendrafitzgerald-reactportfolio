import React from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faPerson, faFile, faPhoneFlip, faFolderOpen} from '@fortawesome/free-solid-svg-icons'
//styles for nav tabs
const styles = {
    name: {
        marginTop: '50px',
        fontSize: '50px',
        color: 'white',
        paddingTop: 85,
        fontFamily: 'Rockwell, Courier Bold, Courier',
    },
    subtitle: {
        color: 'white',
        fontSize: '20px',
        fontFamily: 'Rockwell, Courier Bold, Courier',
        fontStyle: 'italic'
    }
}
export default function NavTabs({ currentPage, handlePageChange }) {
  return (
    //conditionally renders page change and shows current page depending on which nav tab is clicked
    <div className="header">
      <h1 style={styles.name}>Kendra Fitzgerald</h1>
      <p style={styles.subtitle}>FullStack Developer</p>
      <nav className="navbar justify-content-end">
        <ul className="nav nav-tabs">
          <li className="nav-item">
            <a
              href="#AboutMe"
              onClick={() => handlePageChange("AboutMe")}
              className={
                currentPage === "AboutMe" ? "nav-link active" : "nav-link"
              }
            >
             <FontAwesomeIcon icon={faPerson}/> About Me
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#Portfolio"
              onClick={() => handlePageChange("Portfolio")}
              className={
                currentPage === "Portfolio" ? "nav-link active" : "nav-link"
              }
            >
               <FontAwesomeIcon icon={faFolderOpen}/>
              Portfolio
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#Contact"
              onClick={() => handlePageChange("Contact")}
              className={
                currentPage === "Contact" ? "nav-link active" : "nav-link"
              }
            >  <FontAwesomeIcon icon={faPhoneFlip}/>
              Contact
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#Resume"
              onClick={() => handlePageChange("Resume")}
              className={
                currentPage === "Resume" ? "nav-link active" : "nav-link"
              }
            > <FontAwesomeIcon icon={faFile}/>
              Resume
            </a>
          </li>
        </ul>
      </nav>
      </div>
  );
};
