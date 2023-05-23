import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faGithub, faLinkedin, faTwitter} from '@fortawesome/free-brands-svg-icons'
//styles for footer
const styles = {

    footer: {
        padding: '10px',
        textAlign: 'center',
        marginTop: '30px'
    
    },
    icon: {
        color: 'white',
        fontSize: '30px',
        padding: 5,
        position: 'relative'
    }
}

export default function Footer() {
    //renders footer with icons that link to various sites on all pages
    return (
        <footer style={styles.footer}>
        <a style= {styles.icon} href='https://github.com/kendrafitzgerald'><FontAwesomeIcon icon={faGithub}/></a>
        <a style= {styles.icon} href="https://www.linkedin.com/in/kendra-fitzgerald-b73780175/"><FontAwesomeIcon icon={faLinkedin}/></a>
        <a style= {styles.icon} href='https://twitter.com/kendrajoyy'><FontAwesomeIcon icon={faTwitter}/></a>
        </footer>
    )
}