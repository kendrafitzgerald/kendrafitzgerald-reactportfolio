import React, {useState} from 'react';
import {Document, Page} from 'react-pdf';
import resumePDF from '../../utils/Kendra-Fitzgerald-Resume.pdf';
import { pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/TextLayer.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faDownload} from '@fortawesome/free-solid-svg-icons'

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.js',
  import.meta.url,
).toString();

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
    }
  };
export default function Resume(){
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }
    return(
        <div className='card' style={styles.body}>
            <h1 style={styles.header}>Resume</h1>
            <a href={resumePDF} download ="kendrafitzgeraldResume.pdf" style={styles.header}
            >Click Here to Download My Resume <FontAwesomeIcon icon={faDownload}/></a>
            <Document file={resumePDF} onLoadSuccess={onDocumentLoadSuccess}>
              <Page pageNumber={pageNumber}/>
            </Document>
        </div>
    );
}