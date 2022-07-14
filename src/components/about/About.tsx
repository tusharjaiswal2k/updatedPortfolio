import React from 'react'
import { FaAward } from 'react-icons/fa'
import { FiUsers } from 'react-icons/fi'
import { VscFolderLibrary } from 'react-icons/vsc';
import './About.css'

const About = () => {
    return (
        <section id='about'>
            <h5>Get To Know </h5>
            <h2>About Me</h2>

            <div className='container about__container'>
                <div className="about__me">
                    <div className="about__me-image">
                        <img src="/me-about.jpg" alt="About image" />
                    </div>
                </div>
                <div className="about__content" style={{ marginTop: "100px" }}>
                    <div className="about__cards" >
                        <article className='about__card' style={{ cursor: "none" }}>
                            <FaAward />
                            <h5> Experience</h5>
                            <small>6+ months</small>
                        </article>
                        <article className='about__card' style={{ cursor: "none" }}>
                            <FiUsers />
                            <h5>Clients</h5>
                            <small>2 clients</small>
                        </article>
                        <article className='about__card' style={{ cursor: "none" }}>
                            <VscFolderLibrary />
                            <h5>Projects</h5>
                            <small>2</small>
                        </article>
                    </div>
                    <p> To explore the creative skills of my inner-self . Innovative , time and energy saving , best and less
                        investment possibilities of work-culture in all manner to make an impressive leadership for a
                        workaholics team. To make our peers feel proud for result oriented works and chasing to complete
                        projects before stipulated time frame
                    </p>
                    {/* <a href="#contact" className='btn btn-primary'>Let's Talk</a> */}
                </div>
            </div>
        </section>
    )
}

export default About