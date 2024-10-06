// Admin1.jsx
import React from 'react';
import emailjs from 'emailjs-com';
import WorkList from './work-box';

const Admin1 = ({ handleLogout }) => {
    const sendEmail = (e) => {
        e.preventDefault();
    
        // Create a pre-defined message object
        const templateParams = {
          user_name: 'Devansh',   // Hardcoded sender's name
          user_email: 'fusionmediaelite@gmail.com', // Predefined email
          message: 'Devansh log-out!', // Predefined message
        };
    
        // Send email using emailjs.send
        emailjs.send(
          'service_nc1hjse',       // Your EmailJS service ID
          'template_ru0468t',      // Your EmailJS template ID
          templateParams,          // Your pre-defined message data
          '4hqton78_PfYmiRSE'      // Your EmailJS user ID
        )
        .then((result) => {

          console.log(result.text);
          alert('Log-out Complete');
        }, (error) => {
          console.log(error.text);
          alert('Error in Log-out');
        });
      };
  return (
    <div>
      <h2>Welcome Devansh</h2>
      <p>कर्मण्येवाधिकारस्ते मा फलेषु कदाचन |
      मा कर्मफलहेतुर्भूर्मा ते सङ्गोऽस्त्वकर्मणि</p>
      <WorkList workIndex={0} />
      {/* Admin 1 specific content here */}
      <button onClick={sendEmail} style={{ padding: '10px 20px',paddingBottom:'10px', backgroundColor: '#dc3545', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
        Log out
      </button> <br></br>
      <button onClick={handleLogout} style={{ padding: '10px 20px', marginTop:'10px', backgroundColor: '#dc3545', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
        Back to home
      </button>
    </div>
  );
};

export default Admin1;

// Repeat similar structure for Admin2, Admin3, Admin4
