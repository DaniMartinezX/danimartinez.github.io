import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile_img.svg'
import perfil_sinfondo from '../../assets/perfil_sinfondo_mod.png'
import img_eje from '../../assets/ejemplo_img.jpg'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { Link } from 'react-router-dom';

const Hero = () => {

    return (
        <div id='home' className='hero'>
            <img src={perfil_sinfondo} alt="" />
            <h1><span>Soy Daniel Martínez,</span> desarrollador de aplicaciones multiplataforma.</h1>
            <p>Desarrollo de aplicaciones | Análisis de datos & IA</p>
            <p>A Coruña</p>
            <div className="hero-action">
                <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Conecta conmigo</AnchorLink></div>
                <a href="https://drive.google.com/file/d/1ABhsZy2p8D4ThoPkeIlS8Q0zrXVjMA0h/view?usp=drive_link" target="_blank" className="hero-resume" >Mi currículum</a>
            </div>
        </div>
    )
}

export default Hero