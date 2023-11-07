import { useState } from "react";

export function ContactBlurb() {
  <div className="contact-blurb">
    <h1>Contact</h1>
    <p>
      If you have any questions or would like to get in contact with me, 
      please feel free to send me a message here.
    </p>
  </div>
}


export default function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you would typically send the form data to a server. I will come back to implement this later.


    // For this example, we'll just log it to the console.
    console.log(`Submitting Name ${name}, Email ${email}, Message ${message}`);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <label>
        Email:
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </label>
      <label>
        Message:
        <textarea value={message} onChange={(e) => setMessage(e.target.value)} />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
}


// look into this site for email form: https://www.emailjs.com/