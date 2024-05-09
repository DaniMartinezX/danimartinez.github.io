import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/img_about.jpg'

const About = () => {
    return (
        <div id='about' className='about'>
            <div className="about-title">
                <h1>Sobre mí</h1>
                <img src={theme_pattern} alt="" />
            </div>
            <div className="about-sections">
                <div className="about-left">
                    <img src={profile_img} alt="" />
                </div>
                <div className="about-right">
                    <div className="about-para">
                        <p>Desarrollador de aplicaciones especializado en IA y Big Data</p>
                        <p>Soy una persona apasionada por la tecnología y el deporte, con un don de gentes destacado. Me considero una persona familiar y estoy constantemente buscando oportunidades para desarrollarme profesionalmente y aprender.</p>
                    </div>
                    <div className="about-skills">
                        <div className="about-skill"><p>HTML & CSS</p><hr style={{ width: "50%" }} /></div>
                        <div className="about-skill"><p>React JS</p><hr style={{ width: "40%" }} /></div>
                        <div className="about-skill"><p>Java</p><hr style={{ width: "60%" }} /></div>
                        <div className="about-skill"><p>Python</p><hr style={{ width: "70%" }} /></div>
                    </div>
                </div>
            </div>
            {/* <div className="about-achievements">
                <div className="about-achievement">
                    <h1>10</h1>
                    <p>YEARS OF EXPERIENCE</p>
                </div>
                <hr />
                <div className="about-achievement">
                    <h1>15</h1>
                    <p>PROYECTS COMPLETED</p>
                </div>
                <hr />
                <div className="about-achievement">
                    <h1>18</h1>
                    <p>HAPPY CLIENTS</p>
                </div>
            </div> */}
        </div>
    )
}

export default About