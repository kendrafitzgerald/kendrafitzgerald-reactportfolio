import React, {useState} from 'react';
import NavTabs from './NavTabs';
import AboutMe from './pages/aboutMe';
import Portfolio from './pages/portfolio';
import Contact from './pages/contact';
import Resume from './pages/resume';
import Footer from './footer'
import '../styles/header.css';
import projects from '../utils/projects'

function PortfolioContainer() {
    //sets current page state to default of About Me
    const [currentPage, setCurrentPage] = useState('AboutMe');
    //renders pages based on what the current page is
    const renderPage = () => {
        if(currentPage === 'AboutMe') {
            return <AboutMe/>;
        }
        if(currentPage === 'Portfolio') {
            return <Portfolio projects={projects}/>;
        }
        if (currentPage === 'Contact') {
            return <Contact/>;
        }
        return <Resume/>
    };
    const handlePageChange = (page) => setCurrentPage(page);
    return (
        //adds NavTabs and Footer components
        <div>
            <NavTabs currentPage = {currentPage} handlePageChange={handlePageChange}/>
            {renderPage()}
            <Footer></Footer>
            </div>
        
    );
}
export default PortfolioContainer;

