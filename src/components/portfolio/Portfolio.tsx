import React from 'react';
import './Portfolio.css';
const portfolioImage1 = require("../../assets/portfolio1.jpg")
const portfolioImage2 = require("../../assets/portfolio2.jpg")
const portfolioImage3 = require("../../assets/portfolio3.jpg")
const portfolioImage4 = require("../../assets/portfolio4.jpg")
const portfolioImage5 = require("../../assets/portfolio5.png")
const portfolioImage6 = require("../../assets/portfolio6.jpg")
const Portfolio = () => {
    return (
        <section id='portfolio'>
            <h5>My Recent Work</h5>
            <h2>Portfolio</h2>

            <div className="container portfolio__container">
                {/* make it dynamic with your projects */}
                <article className="portfolio__item">
                    <div className="portfolio__item-image">
                        <img src={portfolioImage1} alt="" />
                    </div>
                    <h3>This is a portfolio item title</h3>
                    <div className="portfolio__item-cta">
                        <a href="https://github.com" className="btn ">Github</a>
                        <a href="https://github.com" className="btn btn-primary" target={"_blank"}>Live Demo</a>
                    </div>
                </article>
                <article className="portfolio__item">
                    <div className="portfolio__item-image">
                        <img src={portfolioImage1} alt="" />
                    </div>
                    <h3>This is a portfolio item title</h3>
                    <div className="portfolio__item-cta">
                        <a href="https://github.com" className="btn ">Github</a>
                        <a href="https://github.com" className="btn btn-primary" target={"_blank"}>Live Demo</a>
                    </div>
                </article>
                <article className="portfolio__item">
                    <div className="portfolio__item-image">
                        <img src={portfolioImage1} alt="" />
                    </div>
                    <h3>This is a portfolio item title</h3>
                    <div className="portfolio__item-cta">
                        <a href="https://github.com" className="btn ">Github</a>
                        <a href="https://github.com" className="btn btn-primary" target={"_blank"}>Live Demo</a>
                    </div>
                </article>
                <article className="portfolio__item">
                    <div className="portfolio__item-image">
                        <img src={portfolioImage1} alt="" />
                    </div>
                    <h3>This is a portfolio item title</h3>
                    <div className="portfolio__item-cta">
                        <a href="https://github.com" className="btn ">Github</a>
                        <a href="https://github.com" className="btn btn-primary" target={"_blank"}>Live Demo</a>
                    </div>
                </article>
                <article className="portfolio__item">
                    <div className="portfolio__item-image">
                        <img src={portfolioImage1} alt="" />
                    </div>
                    <h3>This is a portfolio item title</h3>
                    <div className="portfolio__item-cta">
                        <a href="https://github.com" className="btn ">Github</a>
                        <a href="https://github.com" className="btn btn-primary" target={"_blank"}>Live Demo</a>
                    </div>
                </article>
                <article className="portfolio__item">
                    <div className="portfolio__item-image">
                        <img src={portfolioImage1} alt="" />
                    </div>
                    <h3>This is a portfolio item title</h3>
                    <div className="portfolio__item-cta">
                        <a href="https://github.com" className="btn ">Github</a>
                        <a href="https://github.com" className="btn btn-primary" target={"_blank"}>Live Demo</a>
                    </div>
                </article>
            </div>
        </section>
    )
}

export default Portfolio