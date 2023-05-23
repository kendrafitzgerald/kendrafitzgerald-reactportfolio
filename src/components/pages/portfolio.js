import React from 'react';
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
      imgCard: {
        background: 'rgba(0, 0, 0, 0',
        height: 300,
        width: 300,
        marginLeft: 'auto',
        marginRight: 'auto'

      },
      img: {
        height: 150,
        width: 300,
        boxShadow: '20px 10px 10px #000018'
      },
      tech: {
        fontFamily: 'Rockwell, Courier Bold, Courier',
        color: 'white',
        fontSize: 20
      },
      title: {
        fontFamily: 'Rockwell, Courier Bold, Courier',
        fontSize: 20,
        color: 'white',
        textDecoration: 'none'
      }
}
export default function Portfolio({projects}) {
    return (
        <div>
            <h1 style={styles.header}>Portfolio</h1>
        <div className='row'>
        {projects.map((project) => (
            // <li className='list-item-group' key={project.id}>
                <div className='post-card col-lg-2' key = {project.id}style={styles.imgCard}>
                    <div className='card-body'>
                    <h2>
                    <a href={project.link} style={styles.title}>{project.name}</a>
                    </h2>
                    <img src={project.img} style={styles.img}alt='project main page or placeholder'/>
                    <h3 style={styles.tech}>{project.tech}</h3>
                    <a href={project.gitHub}>GitHub</a>
                    </div>

                </div>
            // </li>
        ))


        }

        </div>
        </div>
    )
};