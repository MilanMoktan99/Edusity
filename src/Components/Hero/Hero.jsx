import React from 'react';
import './Hero.css';
import dark_arrow from "../../assets/dark-arrow.png"

function Hero(){

    return (
        <div className="hero section-container">
            <div className="hero-text">
                <h1>We ensure better education for the better world</h1>
                <p>Our cutting-edge curriculumis designed to empower students with the knowledge, skill, and experience needed to excel in the dynamic field of education</p>
                <button className="btn">Expore more <img src={dark_arrow}/></button>
            </div>
        </div>
    )
}

export default Hero