import { useState } from "react";

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
    <form onSubmit={handleSubmit} className="container mt-5">
      <div className="form-group">
        <label htmlFor="name">Name:</label>
        <input type="text" className="form-control" id="name" value={name} onChange={(e) => setName(e.target.value)} />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email:</label>
        <input type="email" className="form-control" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div className="form-group">
        <label htmlFor="message">Message:</label>
        <textarea className="form-control" id="message" value={message} onChange={(e) => setMessage(e.target.value)} />
      </div>
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  );
}


// look into this site for email form: https://www.emailjs.com/













// export function ContactBlurb() {
//   <div className="contact-blurb">
//     <h1>Contact</h1>
//     <p>
//       If you have any questions or would like to get in contact with me, 
//       please feel free to send me a message here.
//     </p>
//   </div>
// }
