import React, { useState } from 'react';
import { init, send } from 'emailjs-com'; // Import EmailJS functions
import ContactForm from './Contact'; // Example of an admin component
import Admin1 from './Admin1'; // Admin 1 component
import Admin2 from './Admin2'; // Admin 2 component
import Admin3 from './Admin3'; // Admin 3 component
import Admin4 from './Admin4'; // Admin 4 component
import Dashboard from './deshboard';
import HelpTeam from './dash';
import Nav from './nav';
import Navbar from './nav';

// Initialize EmailJS with your User ID
init('YOUR_EMAILJS_USER_ID'); // Replace with your EmailJS User ID

const AdminLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [adminPage, setAdminPage] = useState(null); // Track which admin page to show

  // Handle form submission
  const handleLogin = (e) => {
    e.preventDefault();

    // Basic validation
    if (!email || !password) {
      setError('Please fill in both fields.');
      return;
    }

    // Check credentials and set corresponding admin page
    let loggedInUser = '';
    switch (email) {
      case 'devanshmd@fme':
        if (password === 'md@passwordfme') {
          loggedInUser = 'Devansh'; // Set logged in user
          setAdminPage('admin1'); // Show Admin 1 component
        } else {
          alert("Wrong Password");
        }
        break;
      case 'mithileshsmm@fme':
        if (password === 'smm@passwordfme') {
          loggedInUser = 'Mithilesh'; // Set logged in user
          setAdminPage('admin2'); // Show Admin 2 component
        }
        break;
      case 'monalcdm@fme':
        if (password === 'monalcdm@fme') {
          loggedInUser = 'Monal'; // Set logged in user
          setAdminPage('admin3'); // Show Admin 3 component
        }
        break;
      case 'anshumh@fme':
        if (password === 'passwordmh@fme') {
          loggedInUser = 'Anshuman'; // Set logged in user
          setAdminPage('admin4'); // Show Admin 4 component
        }
        break;
      default:
        setError('Invalid email or password.');
        return;
    }

    // Send email notification
    send('service_nc1hjse', 'template_ru0468t', { message: `${loggedInUser} is log-in` }, '4hqton78_PfYmiRSE' ) // Replace with your EmailJS details
      .then((response) => {
        console.log('<p>कर्मण्येवाधिकारस्ते मा फलेषु कदाचनमा कर्मफलहेतुर्भूर्मा ते सङ्गोऽस्त्वकर्मणि');
      })
      .catch((error) => {
        console.error('<p>कर्मण्येवाधिकारस्ते मा फलेषु कदाचनमा कर्मफलहेतुर्भूर्मा ते सङ्गोऽस्त्वकर्मणि');
      });
  };

  // Handle logout
  const handleLogout = () => {
    setAdminPage(null); // Reset admin page state
    setEmail(''); // Clear email field
    setPassword(''); // Clear password field
    setError(''); // Clear error message
  };

  return (<>
  <Navbar/>
    <div style={{ maxWidth: '500px', margin: '50px auto', padding: '20px', border: '1px solid #ddd', borderRadius: '5px' }}>
      {!adminPage ? (
        <div>
          <h2>Admin Login</h2>
          {error && <p style={{ color: 'red' }}>{error}</p>}
          <form onSubmit={handleLogin}>
            <div style={{ marginBottom: '10px' }}>
              <label>UserName:</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter admin Username"
                style={{ width: '100%', padding: '8px', marginTop: '5px' }}
              />
            </div>
            <div style={{ marginBottom: '10px'}}>
              <label>Password:</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter admin password"
                style={{ width: '100%', padding: '8px', marginTop: '5px' }}
              />
            </div>
            <button type="submit" style={{ padding: '10px 20px', backgroundColor: '#28a745', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
              Login
            </button>
          </form>
          
        </div>
      ) : (
        <>
          {adminPage === 'admin1' ? <Admin1 handleLogout={handleLogout} /> :
          adminPage === 'admin2' ? <Admin2 handleLogout={handleLogout} /> :
          adminPage === 'admin3' ? <Admin3 handleLogout={handleLogout} /> :
          <Admin4 handleLogout={handleLogout} />}
        </>
      )}
    </div>
    </>
  );
};

export default AdminLogin;
