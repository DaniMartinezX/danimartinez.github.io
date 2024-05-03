import React from "react";
import './Contact.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mail_icon from '../../assets/mail_icon.svg'
import location_icon from '../../assets/location_icon.svg'
import call_icon from '../../assets/call_icon.svg'

const Contact = () => {
    return (
        <div id="contact" className="contact">
            <div className="contact-title">
                <h1>Contacta conmigo</h1>
                <img src={theme_pattern} alt="" />
            </div>
            <div className="contact-section">
                <div className="contact-left">
                    <h1>Hablemos :)</h1>
                    <p>Me encuentro actualmente en proceso activo de búsqueda de empleo, por lo que les animo a que no duden en contactarme si tienen alguna oferta laboral que consideren que pueda ser de mi interés. Estoy disponible para entrevistas en cualquier momento.</p>
                    <div className="contact-details">
                        <div className="contact-detail">
                            <img src={mail_icon} alt="" /><p>danielmartinezcarreira@gmail.com</p>
                        </div>
                        <div className="contact-detail">
                            <img src={call_icon} alt="" /><p>+34 622 18 43 56</p>
                        </div>
                        <div className="contact-detail">
                            <img src={location_icon} alt="" /><p>A Coruña, España</p>
                        </div>
                    </div>
                </div>
                <form className="contact-right">
                    <label htmlFor="">Tu nombre</label>
                    <input type="text" placeholder="Escribe tu nombre" name="name" />
                    <label htmlFor="">Tu email</label>
                    <input type="email" placeholder="Escribe tu correo" name="email" />
                    <label htmlFor="">Escribe tu mensaje aquí</label>
                    <textarea name="message" rows="8" placeholder='Escribe tu mensaje'></textarea>
                    <button type='submit' className="contact-submit">Enviar ahora</button>
                </form>
            </div>
        </div>
    )
}

export default Contact