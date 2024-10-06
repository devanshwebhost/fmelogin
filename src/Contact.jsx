import React from 'react';
import emailjs from 'emailjs-com';

const ContactForm = () => {
  const sendEmail = (e) => {
    e.preventDefault();

    // Create a pre-defined message object
    const templateParams = {
      user_name: 'Devansh',   // Hardcoded sender's name
      user_email: 'fusionmediaelite@gmail.com', // Predefined email
      message: 'Devansh log-in!', // Predefined message
    };

    // Send email using emailjs.send
    emailjs.send(
      'service_fbgznxe',       // Your EmailJS service ID
      'template_dz3qrz6',      // Your EmailJS template ID
      templateParams,          // Your pre-defined message data
      'lhmhDY0VTks_MQE8B'      // Your EmailJS user ID
    )
    .then((result) => {
      console.log(result.text);
      alert('Email sent successfully!');
    }, (error) => {
      console.log(error.text);
      alert('Error sending email.');
    });
  };

  return (
    <div>
      <h2>Send Predefined Message</h2>
      <button onClick={sendEmail}>Send Email</button>
    </div>
  );
};

export default ContactForm;
