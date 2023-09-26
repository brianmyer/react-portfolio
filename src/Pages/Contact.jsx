import { useState } from 'react';
// import { validateEmail } from '../utils/helpers';


export default function Contact() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [message, setMessage] = useState('');
  const [messageError, setMessageError] = useState('');

  function validateName() {
    if (name.trim() === '') {
      setNameError('Name is required');
    } else {
      setNameError('');
    }
  };

  function validateEmail() {
    if (email.trim() === '') {
      setEmailError('Email is required');
    } else {
      setEmailError('');
    }
  };

  function validateMessage() {
    if (name.trim() === '') {
      setMessageError('Message is required');
    } else {
      setMessageError('');
    }
  };


  return (
    <form class="needs-validation" novalidate>
      <div class="form-group">
        <label for="name">Name</label>
        <input
          type="text"
          class="form-control"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          onBlur={validateName}
          placeholder="Please provide your name"
          required />
        <div className="error text-danger">{nameError}</div>
      </div>
      <div class="form-group">
        <label for="email">Email address</label>
        <input
          type="email"
          class="form-control"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onBlur={validateEmail}
          placeholder="Please provide your email"
          required />
        <small id="emailHelp" class="form-text text-muted">I'll never share your email with anyone else.</small>
        <div className="error text-danger">{emailError}</div>
      </div>
      <div class="form-group">
        <label for="message">Message</label>
        <textarea
          class="form-control"
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onBlur={validateMessage}
          rows="3"
          placeholder="Let me know what you think!"
          required>
        </textarea>
        <div className="error text-danger">{messageError}</div>
      </div>
      <button type="submit" class="btn btn-dark">Submit</button>
    </form>
  );
}
