import React from 'react';
// import resumePhoto from '../../images/resume2.png'
// export default function Resume() {
//     return(
//         <div className='card' style={styles.body}>
//             <h1 style={styles.header}>Resume</h1>
//             <img style={styles.resumePic} src={resumePhoto} alt='Kendra Fitzgerald Resume'/>

//         </div>
//     );
// };
import {Document, Page} from 'react-pdf';
import resumePDF from '../../utils/resume2.pdf';
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
    // },
    // text: {
    //   color: "white",
    // },
    // resumePic: {
    //   width: 500,
    //   height: '100vh',
    //   marginLeft: 'auto',
    //   marginRight: 'auto'
    // }
  };

export default function Resume(){
    return(
        <div className='card' style={styles.body}>
            <h1 style={styles.header}>Resume</h1>
            <Document file={resumePDF}>
                <Page pageNumber={1}/>
            </Document>
        </div>
    );
}