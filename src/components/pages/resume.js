/* eslint-disable no-unused-vars */
import React, {useState} from 'react';
// import {Document, Page} from 'react-pdf';
import resumePDF from '../../utils/Kendra-Fitzgerald-Resume.pdf';
import { pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/TextLayer.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faDownload} from '@fortawesome/free-solid-svg-icons'
// import {faGithub, faLinkedin, faTwitter} from '@fortawesome/free-brands-svg-icons'
//function necessary to render PDF doc on screen
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.js',
  import.meta.url,
).toString();
//styles for resume page
const styles = {
    body: {
      background: "#000018",
      height: 600,
      width: 800,
      marginLeft: 'auto',
      marginRight: 'auto'
    },
    header: {
      color: "white",
      fontFamily: 'Rockwell, Courier Bold, Courier'
    },

  // footer: {
  //         padding: '10px',
  //         textAlign: 'center',
  //         marginTop: 300
      
  //     },
      icon: {
          color: 'white',
          fontSize: '30px',
          padding: 5
      },
      list: {
        color: 'white',
        fontFamily: 'Rockwell, Courier Bold, Courier',
        fontSize: 20
      },
      titles: {
        color: 'white',
        fontFamily: 'Rockwell, Courier Bold, Courier',
        fontSize: 30,
        paddingBottom: 10,
        listStyleType: 'none'
      },
      prof: {
        color: 'white',
        fontFamily: 'Rockwell, Courier Bold, Courier',
        fontSize: 35,
      }
  };
export default function Resume(){
 //useState variables needed for PDF rendering
//   const [numPages, setNumPages] = useState(null);
//   const [pageNumber, setPageNumber] = useState(1);
//function needed to render PDF
//   function onDocumentLoadSuccess({ numPages }) {
//     setNumPages(numPages);
//   }
    return(
      //renders PDF doc and allows for download
      <div>
        <div className='card' style={styles.body}>
            <h1 style={styles.header}>Resume</h1>
            <a href={resumePDF} download ="kendrafitzgeraldResume.pdf"style={styles.header}
            >Click Here to Download My Resume <FontAwesomeIcon icon={faDownload}/></a>
            <h2 style={styles.prof}>Proficiences</h2>
            <ul>
              <li style={styles.titles}>
                Front-End
              </li>
              <li style={styles.header}>HTML5</li>
              <li style={styles.header}>CSS3</li>
              <li style={styles.header}>JavaScript</li>
              <li style={styles.header}>jQuery</li>
              <li style={styles.header}>React</li>
              <li style={styles.header} >Bootstrap</li>
              <li style={styles.header}>Bulma</li>
              <li style={styles.header}>Responsive Design</li>
              </ul>
              <br></br>
              <ul>
              <li style={styles.titles}>
                Back-End
              </li>
              <li style={styles.header}>APIs</li>
              <li style={styles.header}>Node</li>
              <li style={styles.header}>Express</li>
              <li style={styles.header}>MySql, Sequelize</li>
              <li style={styles.header}>MongoDB, Mongoose</li>
              <li style={styles.header} >GraphQl</li>
              </ul>
        </div>
         </div>
    );
}