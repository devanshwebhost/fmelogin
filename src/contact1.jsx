import React from 'react';
import emailjs from 'emailjs-com';

const ContactForm = () => {
  const sendEmail = (e) => {
    e.preventDefault();

    // Create a pre-defined message object
    const templateParams = {
      user_name: 'Devansh',   // You can hardcode the sender's name
      user_email: 'fusionmediaelite@gmail.com', // Your pre-defined email
      message: 'Devansh log-in!', // Your pre-defined message
    };

    // Send email using emailjs
    emailjs.sendForm(
        'service_fbgznxe',         // Replace with your EmailJS service ID
        'template_dz3qrz6',        // Replace with your EmailJS template ID
        form.current,
        'lhmhDY0VTks_MQE8B'             // Replace with your EmailJS user ID
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
