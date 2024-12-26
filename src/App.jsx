import React, { useState } from "react";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero.jsx";
import Programs from "./Components/Programs/Programs.jsx";
import Title from "./Components/Title/Title.jsx";
import About from "./Components/About/About.jsx";
import Gallery from "./Components/Gallery/Gallery.jsx";
import Testomonials from "./Components/Testomonials/Testomonials.jsx";
import Contact from "./Components/Contact/Contact.jsx";
import Footer from "./Components/Footer/Footer.jsx";
import VideoPlayer from "./Components/VideoPlayer/VideoPlayer.jsx";

function App(){

    const [playStatus, setPlayStatus] = useState(false);

    return (
        <div>
            <Navbar />
            <Hero />
            <div className="section-container">
                <Title subtitle="our program" title="what we offer"/>
                <Programs />
                <About setPlayStatus={setPlayStatus}/>
                <Title subtitle="Gallery" title="our campus"/>
                <Gallery />
                <Title subtitle="Testomonials" title="what student says"/>
                <Testomonials />
                <Title subtitle="contact us" title="get in touch"/>
                <Contact />
                <Footer />
            </div>
            <VideoPlayer playStatus={playStatus} setPlayStatus={setPlayStatus}/>
        </div>
    );
}

export default App