import React, { useState } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import './styles.css'
function SignUp() {
  const [username, setusername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleSignup = (e) => {
    e.preventDefault();
    
    // Basic form validation
    if (!email || !password || !confirmPassword) {
      setError('Please fill in all fields.');
      return;
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    // If validation passes, you can submit the data to a server for registration.

    // Clear the form fields and reset the error message
    setusername('');
    setEmail('');
    setPassword('');
    setConfirmPassword('');
    setError('');

    // Display a success alert
    alert('Sign Up Successful! Thank you.');
  };

  return (
    <>
    <Navbar/>
    <div className="signup-container">
      <h2>Sign Up</h2>
      {error && <p className="error">{error}</p>}
      <form onSubmit={handleSignup}>
      <label>Username:
          <input type="text" value={username} onChange={(e) => setusername(e.target.value)} />
        </label>
        <label>Email:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <label>Password:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <label>Confirm Password:
          <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
        </label>
        <button type="submit" className='button1'>Sign Up</button>
      </form>
    </div>
    </>
  );
}

export default SignUp;
