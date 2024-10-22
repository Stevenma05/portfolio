import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import './Contact.css'; // Import the CSS file

function Contact() {
  const [state, handleSubmit] = useForm("movqvalq");

  if (state.succeeded) {
    return <p className="success-message">Submitted!</p>;
  }

  return (
    <div id='contact' className="contact-container">
      <h2 className="contact-heading">Get in Touch</h2>
      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-group">
          <label htmlFor="name" className="form-label">Name</label>
          <input
            id="name"
            type="text"
            name="name"
            placeholder="Your Name"
            className="form-input"
          />
          <ValidationError prefix="Name" field="name" errors={state.errors} />
        </div>

        <div className="form-group">
          <label htmlFor="email" className="form-label">Email Address</label>
          <input
            id="email"
            type="email"
            name="email"
            placeholder="Your Email"
            className="form-input"
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
        </div>

        <div className="form-group">
          <label htmlFor="message" className="form-label">Message</label>
          <textarea
            id="message"
            name="message"
            placeholder="Your Message"
            className="form-textarea"
          />
          <ValidationError prefix="Message" field="message" errors={state.errors} />
        </div>

        <button type="submit" disabled={state.submitting} className="submit-button">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Contact;
