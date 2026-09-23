import React, { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';
import styles from './Contact.module.css';

// EmailJS identifiers are public by design (they only allow sending through this template).
const EMAILJS_SERVICE_ID = 'service_i71tnkp';
const EMAILJS_TEMPLATE_ID = 'template_ymqwjou';
const EMAILJS_PUBLIC_KEY = 'cA_dPAy6PMXLJyPnF';

const Contact = () => {
    const form = useRef(null);
    const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm();
    // null | 'sent' | 'error'
    const [status, setStatus] = useState(null);

    const handleFormSubmit = async () => {
        try {
            await emailjs.sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, form.current, {
                publicKey: EMAILJS_PUBLIC_KEY,
            });
            reset();
            setStatus('sent');
        } catch (error) {
            console.error('EmailJS error', error);
            setStatus('error');
        }
    };

    const closePopup = () => {
        setStatus(null);
    };

    return (
       <div>
            {status && (
            <div className={styles.submitPopup} role="dialog" aria-modal="true" aria-labelledby="contact-popup-title">
                <div className={styles.submitContentPopup}>
                    {status === 'sent' ? (
                        <>
                            <h2 id="contact-popup-title">Enviado</h2>
                            <p>Pr&oacute;ximamente me pondr&eacute; en contacto con usted.</p>
                            <p>Gracias por su consideraci&oacute;n.</p>
                        </>
                    ) : (
                        <>
                            <h2 id="contact-popup-title">No se pudo enviar</h2>
                            <p>Ocurri&oacute; un error al enviar el mensaje. Int&eacute;ntelo de nuevo o escr&iacute;bame a{' '}
                                <a href="mailto:mguzman.code@gmail.com">mguzman.code@gmail.com</a>.</p>
                        </>
                    )}
                    <button type="button" className={styles.btnSubmitPopup} onClick={closePopup}>Cerrar</button>
                </div>
            </div>
            )}
            <section id="five" className={`wrapper style2 special fade ${styles.section}`}>
                <div className="container">
                    <header>
                        <h2>Cont&aacute;ctame</h2>
                        <p>Ser&aacute; un placer colaborar con tu requerimiento tecnol&oacute;gico</p>
                    </header>
                    <form ref={form} onSubmit={handleSubmit(handleFormSubmit)} className="cta" noValidate>
                        <div className="row gtr-uniform gtr-50">
                            <div className="col-12 col-12-xsmall">
                                <input type="text" id="name" placeholder="Nombre" aria-label="Nombre"
                                    autoComplete="name" aria-invalid={errors.name ? 'true' : 'false'}
                                    {...register('name', { required: 'Ingresa tu nombre' })} />
                                {errors.name && <p className={styles.fieldError} role="alert">{errors.name.message}</p>}
                            </div>
                            <div className="col-12 col-12-xsmall">
                                <input type="email" id="email" placeholder="Email" aria-label="Email"
                                    autoComplete="email" aria-invalid={errors.email ? 'true' : 'false'}
                                    {...register('email', {
                                        required: 'Ingresa tu email',
                                        pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Ingresa un email válido' },
                                    })} />
                                {errors.email && <p className={styles.fieldError} role="alert">{errors.email.message}</p>}
                            </div>
                            <div className="col-12 col-12-xsmall">
                                <input type="tel" id="phone" placeholder="Teléfono" aria-label="Teléfono"
                                    autoComplete="tel" aria-invalid={errors.phone ? 'true' : 'false'}
                                    {...register('phone', {
                                        required: 'Ingresa tu teléfono',
                                        pattern: { value: /^\+?[\d\s()-]{7,20}$/, message: 'Ingresa un teléfono válido' },
                                    })} />
                                {errors.phone && <p className={styles.fieldError} role="alert">{errors.phone.message}</p>}
                            </div>
                            <div className="col-12">
                                <button type="submit" className={styles.btnSubmit} disabled={isSubmitting}>
                                    {isSubmitting ? 'Enviando…' : 'Enviar'}
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </section>
       </div>
    );
};

export default Contact;
