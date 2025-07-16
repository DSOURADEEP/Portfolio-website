import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Toaster } from 'react-hot-toast';
import '../styles/components/contact.css';

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        'service_onzfmti',    
        'template_nj0scuv',    
        form.current,
        'nroS8LZPoIV2Am58h'     
      )
      .then(() => import('react-hot-toast').then(({ toast }) => toast.success('Message sent!')))
      .catch(() => import('react-hot-toast').then(({ toast }) => toast.error('Failed to send')));
    form.current.reset();
  };

  return (
    <section id="contact">
      <Toaster />
      <h2>Contact</h2>
      <form ref={form} onSubmit={sendEmail} className="contact-form">
        <input name="name" placeholder="Name" required />
        <input name="email" type="email" placeholder="Email" required />
        <textarea name="message" placeholder="Message" rows="5" required />
        <button type="submit">Send</button>
      </form>
      <p className="email-alt">
        Or email directly: <a href="mailto:dsouradeep728@gmail.com">dsouradeep728@gmail.com</a>
      </p>
    </section>
  );
}