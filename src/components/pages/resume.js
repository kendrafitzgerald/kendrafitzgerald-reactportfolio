/* eslint-disable no-unused-vars */
import React, {useState} from 'react';
import {Document, Page} from 'react-pdf';
import resumePDF from '../../utils/Kendra-Fitzgerald-Resume.pdf';
import { pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/TextLayer.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faDownload} from '@fortawesome/free-solid-svg-icons'
import {faGithub, faLinkedin, faTwitter} from '@fortawesome/free-brands-svg-icons'
//function necessary to render PDF doc on screen
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.js',
  import.meta.url,
).toString();
//styles for resume page
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

  footer: {
          padding: '10px',
          textAlign: 'center',
          marginTop: 300
      
      },
      icon: {
          color: 'white',
          fontSize: '30px',
          padding: 5
      },
  };
export default function Resume(){
  //useState variables needed for PDF rendering
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
//function needed to render PDF
  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }
    return(
      //renders PDF doc and allows for download
      <div>
        <div className='card' style={styles.body}>
            <h1 style={styles.header}>Resume</h1>
            <a href={resumePDF} download ="kendrafitzgeraldResume.pdf"style={styles.header}
            >Click Here to Download My Resume <FontAwesomeIcon icon={faDownload}/></a>
        </div>
         <footer style={styles.footer}>
         <a style= {styles.icon} href='https://github.com/kendrafitzgerald'><FontAwesomeIcon icon={faGithub}/></a>
         <a style= {styles.icon} href="https://www.linkedin.com/in/kendra-fitzgerald-b73780175/"><FontAwesomeIcon icon={faLinkedin}/></a>
         <a style= {styles.icon} href='https://twitter.com/kendrajoyy'><FontAwesomeIcon icon={faTwitter}/></a>
         </footer>
         </div>
    );
}