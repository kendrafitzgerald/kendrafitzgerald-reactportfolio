import nexus from '../images/nexus.png';
import mixfix from '../images/mixfix.png';
import socialBackend from '../images/socialbackend.png';
import employeeTracker from '../images/employeetracker.png';
import weather from '../images/weatherusage.png';
import svg from '../images/svg.png';
import soundswap from '../images/sound-swap.png'
//array of projects to go in portfolio with name, tech used, and links
const projects = [
    {
        id: 1,
        name: 'Nexus',
        tech: 'Full-Stack App',
        img: nexus,
        gitHub:'https://github.com/kendrafitzgerald/nexus-app' ,
        link: 'https://nexus-college-connections.herokuapp.com/'
    },
    {
        id: 2,
        name: 'Mix & Fix',
        tech: 'JS, HTML5, CSS',
        img: mixfix,
        gitHub: 'https://github.com/kendrafitzgerald/mix-and-fix-recipe-app',
        link: 'https://kendrafitzgerald.github.io/mix-and-fix-recipe-app/'
    },
    {
        id: 3,
        name: 'Sound Swap',
        tech: 'MERN Stack',
        img: soundswap,
        gitHub: 'https://github.com/kendrafitzgerald/sound-swap',
        link: 'https://sound-swap-app.herokuapp.com/'
        
    },
    {
        id: 4,
        name: 'Social Media Backend',
        tech: 'MongoDB, Express, Node',
        img: socialBackend,
        gitHub: 'https://github.com/kendrafitzgerald/social-network-backend',
        link: 'https://drive.google.com/file/d/1NXM6MDB3p2jTS2yfKGxPVTdqVzz_mHiv/view'
        
    },
    {
        id: 5,
        name: 'Employee Tracker App',
        tech: 'JS, MySQL, Node',
        img: employeeTracker,
        gitHub:'https://github.com/kendrafitzgerald/employee-tracker-app',
        link: 'https://drive.google.com/file/d/13mydzZWi0pzDuB5eg_Fx4jNIstAkcU9N/view'
        
    },
    {
        id: 6,
        name: 'SVG Logo Maker',
        tech: 'JS, Inquirer, Node',
        img: svg,
        gitHub: 'https://github.com/kendrafitzgerald/logo-maker-app',
        link: 'https://drive.google.com/file/d/1txD3VGXJOVofDDc_r3vIBsQdLbMFLZRU/view'
        
    }
]
export default projects
