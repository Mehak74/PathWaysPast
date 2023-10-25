import { useState } from 'react';
import './ConatctFormStyles.css';

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create a string containing the form data
    const formData = `Name: ${name}\nEmail: ${email}\nSubject: ${subject}\nMessage: ${message}`;

    // Open a popup window with the form data
    const popup = window.open('', 'Form Data', 'width=400,height=400');
    popup.document.write(`<pre>${formData}</pre>`);
    
    // Reset the state variables to clear the input fields
    setName("");
    setEmail("");
    setSubject("");
    setMessage("");
  };

  return (
    <div className='from-container'>
        <h1>Send a message to us!</h1>
        <form onSubmit={handleSubmit}>
            <input required placeholder='Name' type='text' id='name' value={name} onChange={(e) => setName(e.target.value)} />
            <input required placeholder='Email' type='email' id='email' value={email} onChange={(e) => setEmail(e.target.value)} />
            <input required placeholder='Subject' type='text' id='subject' value={subject} onChange={(e) => setSubject(e.target.value)} />
            <textarea required placeholder='Message' rows={4} id='message' value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
            <button className='b'>Send Message</button>
        </form>
    </div>
  );
}

export default ContactForm;
