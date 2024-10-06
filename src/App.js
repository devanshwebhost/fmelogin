import logo from './logo.svg';
import './App.css';
import ContactForm from './Contact';
import AdminLogin from './admin';

function App() {
  return (
    <div className="App">
      <h1>Welcome to <span className='c-color'>Fusion</span> Media Elite</h1>
      <AdminLogin/>
      
    </div>
  );
}

export default App;
