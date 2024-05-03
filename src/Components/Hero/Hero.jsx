import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile_img.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = () => {
    return (
        <div id='home' className='hero'>
            <img src={profile_img} alt="" />
            <h1><span>Soy Daniel Martínez,</span> desarrollador de aplicaciones multiplataforma.</h1>
            <p>Desarrollo de aplicaciones | Análisis datos & IA</p>
            <p>A Coruña</p>
            <div className="hero-action">
                <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Conecta conmigo</AnchorLink></div>
                <div className="hero-resume">Mi currículum</div>
            </div>
        </div>
    )
}

export default Hero