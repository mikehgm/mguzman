import { React, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';
import styles from './Contact.module.css';

const CONTACT_DATA = 'contactData';

const Contact = () => {
    const ref = useRef(null);
    const form = useRef();
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const [isSubmitted, setSubmitted] = useState(false);

    const handleFormSubmit = (data) => {
        console.log('Form submitted', data);
        try {
            localStorage.setItem(CONTACT_DATA, JSON.stringify(data));
            setSubmitted(true);
            sendEmail(data);
            handleReset();
        } catch (error) {
            console.error('Error parsing user data from localStorage', error);
        } 
    }

    const handleReset = () => {
        reset();
      };

    const closePopup = () => {
        setSubmitted(false);
    };

    const sendEmail = (data) => {
        emailjs
      .sendForm('service_i71tnkp', 'template_ymqwjou', form.current, {
        publicKey: 'cA_dPAy6PMXLJyPnF',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
    };

    console.log('errors', errors);

    return (
       <div>
            {isSubmitted && (
            <div className={`${styles.submitPopup}`}>
                <div className={`${styles.submitContentPopup}`}>
                    <h2>Enviado</h2>
                    <p>Proximamente me pondre en contacto con usted.</p>
                    <p>Gracias por su consideraci&oacute;n.</p>
                    {/* Botón para cerrar el popup */}
                    <button className={`${styles.btnSubmitPopup}`} onClick={closePopup}>Cerrar</button>
                </div>
            </div>
            )}
            <section id="five" className={`wrapper style2 special fade ${styles.section}`}  ref={ref}>
                <div className="container">
                    <header>
                        <h2>Contactame</h2>
                        <p>Sera un placer colaborar con tu requerimiento tecnol&oacute;gico</p>
                    </header>
                    <form ref={form} onSubmit={handleSubmit(handleFormSubmit)} className="cta">
                        <div className="row gtr-uniform gtr-50">
                            <div className="col-12 col-12-xsmall">
                                <input type="text" name="name" id="name" 
                                {...register("name", { required: true })} placeholder="Nombre"/>
                            </div>
                            <div className="col-12 col-12-xsmall">
                                <input type="email" name="email" id="email" 
                                {...register("email", { required: true })}placeholder="Email" />
                            </div>
                            <div className="col-12 col-12-xsmall">
                                <input type="number" name="phone" id="phone" 
                                {...register("phone", { required: true })} placeholder="Telefono"/>
                            </div>
                            <div className="col-2 col-12-xsmall">
                                <button type="submit" className={`${styles.btnSubmit}`}>Enviar</button>
                            </div>
                        </div>
                    </form>
                </div>
            </section>
       </div> 
        
    
    );
}

export default Contact;