import React from 'react';
import emailjs from 'emailjs-com';
import WorkList from './work-box';
import HelpTeam from './dash';
import './App.css';

const Admin1 = ({ handleLogout }) => {
  const sendEmail = (e) => {
    e.preventDefault();

    const templateParams = {
      user_name: 'Devansh',
      user_email: 'fusionmediaelite@gmail.com',
      message: 'Devansh log-out!',
    };

    emailjs
      .send('service_nc1hjse', 'template_ru0468t', templateParams, '4hqton78_PfYmiRSE')
      .then((result) => {
        console.log(result.text);
        alert('Log-out Complete');
      })
      .catch((error) => {
        console.log(error.text);
        alert('Error in Log-out');
      });
  };

  const sendMarkAsDoneEmail = () => {
    const templateParams = {
      user_name: 'Devansh',
      user_email: 'fusionmediaelite@gmail.com',
      message: 'Devansh has done there work!',
    };

    emailjs
      .send('service_nc1hjse', 'template_ru0468t', templateParams, '4hqton78_PfYmiRSE')
      .then((result) => {
        console.log(result.text);
        alert('Marked as done and email sent.');
      })
      .catch((error) => {
        console.log(error.text);
        alert('Error in sending email.');
      });
  };

  return (
    <>
      <div className="w-full">
        <h2>Welcome Devansh</h2>
        <p>
          कर्मण्येवाधिकारस्ते मा फलेषु कदाचन |
          मा कर्मफलहेतुर्भूर्मा ते सङ्गोऽस्त्वकर्मणि
        </p>
        <WorkList workIndex={0} />

        {/* Mark as Done Button */}
        <button
          onClick={sendMarkAsDoneEmail}
          style={{
            padding: '10px 20px',
            backgroundColor: '#28a745',
            color: '#fff',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            marginBottom: '10px',
          }}
        >
          Mark as Done
        </button>
        <br/>

        {/* Logout Button */}
        <button
          onClick={sendEmail}
          style={{
            padding: '10px 20px',
            backgroundColor: '#dc3545',
            color: '#fff',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
          }}
        >
          Log out
        </button>
        <br/>
        
        {/* Back to Home Button */}
        <button
          onClick={handleLogout}
          style={{
            padding: '10px 20px',
            marginTop: '10px',
            backgroundColor: '#dc3545',
            color: '#fff',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
          }}
        >
          Back to home
        </button>
      </div>
    </>
  );
};

export default Admin1;