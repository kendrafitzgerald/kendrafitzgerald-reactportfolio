import React from "react";
const styles = {
    name: {
        marginTop: '10px',
        fontSize: '50px',
        color: 'white',
        paddingTop: 85,
        fontFamily: 'Rockwell, Courier Bold, Courier'
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
              About Me
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
            >
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
            >
              Resume
            </a>
          </li>
        </ul>
      </nav>
      </div>
  );
};
