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
                <div className="about__content">
                    <div className="about__cards">
                        <article className='about__card'>
                            <FaAward />
                            <h5> Experience</h5>
                            <small>3+ Years Working</small>
                        </article>
                        <article className='about__card'>
                            <FiUsers />
                            <h5>Clients</h5>
                            <small>200+ clients</small>
                        </article>
                        <article className='about__card'>
                            <VscFolderLibrary />
                            <h5>Projects</h5>
                            <small>80+</small>
                        </article>
                    </div>
                    <p> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error porro voluptas magnam voluptatum excepturi voluptates
                        atque enim minima dolores incidunt! Blanditiis saepe fugit laudantium corrupti deleniti commodi sed nulla iure.
                    </p>
                    <a href="#contact" className='btn btn-primary'>Let's Talk</a>
                </div>
            </div>
        </section>
    )
}

export default About