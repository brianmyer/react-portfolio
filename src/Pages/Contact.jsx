import { useState } from 'react';

export default function Contact() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [message, setMessage] = useState('');
  const [messageError, setMessageError] = useState('');
  const [submitMessage, setSubmitMessage] = useState('');
  const [submitMessageClass, setSubmitMessageClass] = useState('success')

  function validateName() {
    if (name.trim() === '') {
      setNameError('Name is required');
    } else {
      setNameError('');
    }
  };

  function validateEmail() {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!re.test(String(email).toLowerCase())) {
      setEmailError('Invalid email address');
    } else {
      setEmailError('');
    }
  }

  function validateMessage() {
    if (name.trim() === '') {
      setMessageError('Message is required');
    } else {
      setMessageError('');
    }
  };

  function handleSubmit(e) {
    e.preventDefault();

    // If all validations pass, you can proceed with form submission
    if (nameError === '' && emailError === '' && messageError === '' && name !== '' && email !== '' && message !== '') {
      // Submit the form or perform other actions
      setSubmitMessageClass('success');
      setSubmitMessage('Message sent!');
      setName('');
      setEmail('');
      setMessage('');
    } else {
      setSubmitMessageClass('danger');
      setSubmitMessage('Please fill in all fields');
    }
  };

  return (
    <div>
      <h1>Contact</h1>
      <form onSubmit={handleSubmit} >
        <div className="form-group my-3">
          <label for="name">Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            onBlur={validateName}
            placeholder="Please provide your name"
          />
          <div className="error text-danger">{nameError}</div>
        </div>
        <div className="form-group my-3">
          <label for="email">Email address</label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onBlur={validateEmail}
            placeholder="Please provide your email"
          />
          <small id="emailHelp" className="form-text text-muted">I'll never share your email with anyone else.</small>
          <div className="error text-danger">{emailError}</div>
        </div>
        <div className="form-group my-3">
          <label for="message">Message</label>
          <textarea
            className="form-control"
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onBlur={validateMessage}
            rows="3"
            placeholder="Let me know what you think!"
          >
          </textarea>
          <div className="error text-danger">{messageError}</div>
        </div>
        <button type="submit" class="btn btn-dark my-3" >Submit</button>
        <div className={`error text-${submitMessageClass}`}>{submitMessage}</div>
      </form>
    </div>
  );
}
