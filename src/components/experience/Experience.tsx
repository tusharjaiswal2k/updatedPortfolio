import React from 'react'
import { BsPatchCheckFill, BsFillBootstrapFill } from 'react-icons/bs';
import { SiHtml5, SiCss3, SiTailwindcss, SiAngular, SiPhp, SiPython, SiJavascript, SiMongodb, SiMysql, SiJava } from "react-icons/si";
import './Experience.css'
import { RiReactjsLine } from 'react-icons/ri';
import { TbBrandNextjs } from 'react-icons/tb';
import { IoLogoNodejs } from 'react-icons/io';

const Experience = () => {
    return (
        <section id='experience'>
            <h5>What Skills I Have</h5>
            <h2>My Experience</h2>

            {/* Starting of Frontend  */}

            <div className="container experience__container">

                <div className="experience__frontend" style={{ cursor: "none" }}>
                    <h3>Frontend Development</h3>
                    <div className="experience__content">
                        <article className='experience__details'>
                            <SiHtml5 className='experience__details-icon' />
                            <div>
                                <h4>HTML</h4>
                                <small className='text-light'>Experienced</small>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <TbBrandNextjs className='experience__details-icon' />
                            <div>
                                <h4>Next</h4>
                                <small className='text-light'>Intermediate</small>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <SiCss3 className='experience__details-icon' />
                            <div>
                                <h4>Css</h4>
                                <small className='text-light'>Intermediate</small>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <SiAngular className='experience__details-icon' />
                            <div>
                                <h4>Angular</h4>
                                <small className='text-light'>Beginner</small>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <BsFillBootstrapFill className='experience__details-icon' />
                            <div>
                                <h4>Bootstrap</h4>
                                <small className='text-light'>Intermediate</small>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <SiTailwindcss className='experience__details-icon' />
                            <div>
                                <h4>Tailwind</h4>
                                <small className='text-light'>Beginner</small>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <RiReactjsLine className='experience__details-icon' />
                            <div>
                                <h4>React</h4>
                                <small className='text-light'>Experienced</small>
                            </div>
                        </article>
                    </div>
                </div>

                {/* Starting of Backend */}

                <div className="experience__backend" style={{ cursor: "none" }}>
                    <h3>Backend Development</h3>
                    <div className="experience__content">
                        <article className='experience__details'>
                            <IoLogoNodejs className='experience__details-icon' />
                            <div>
                                <h4>Node js</h4>
                                <small className='text-light'>Intermediate</small>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <SiMongodb className='experience__details-icon' />
                            <div>
                                <h4>Mongodb</h4>
                                <small className='text-light'>Intermediate</small>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <SiPhp className='experience__details-icon' />
                            <div>
                                <h4>Php</h4>
                                <small className='text-light'>Beginner</small>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <SiMysql className='experience__details-icon' />
                            <div>
                                <h4>MySql</h4>
                                <small className='text-light'>Intermediate</small>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <SiPython className='experience__details-icon' />
                            <div>
                                <h4>Python</h4>
                                <small className='text-light'>Beginner</small>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <SiJava className='experience__details-icon' />
                            <div>
                                <h4>Java</h4>
                                <small className='text-light'>Beginner</small>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <SiJavascript className='experience__details-icon' />
                            <div>
                                <h4>Javascript</h4>
                                <small className='text-light'>Intermediate</small>
                            </div>
                        </article>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Experience