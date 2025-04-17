// export default function ContactMe() {
//   return (
//     <section id="Contact" className="contact--section">
//       <div>
//         {/* <p className="sub--title">Get In Touch</p> */}
//         <h2>Contact Me</h2>
//         <p className="text-lg">
//           Feel free to reach out for collaborations, freelance opportunities, or just to connect!<br /> Let's build something amazing together.
//         </p>
//       </div>
//       <form className="contact--form--container">
//         <div className="container">
//           <label htmlFor="first-name" className="contact--label">
//             <span className="text-md">First Name</span>
//             <input
//               type="text"
//               className="contact--input text-md"
//               name="first-name"
//               id="first-name"
//               placeholder="Enter First Name"
//               required
//             />
//           </label>
//           <label htmlFor="last-name" className="contact--label">
//             <span className="text-md">Last Name</span>
//             <input
//               type="text"
//               className="contact--input text-md"
//               name="last-name"
//               id="last-name"
//               placeholder="Enter Last Name"
//               required
//             />
//           </label>
//           <label htmlFor="email" className="contact--label">
//             <span className="text-md">Email</span>
//             <input
//               type="email"
//               className="contact--input text-md"
//               name="email"
//               id="email"
//               placeholder="Enter Email"
//               required
//             />
//           </label>
//           <label htmlFor="phone-number" className="contact--label">
//             <span className="text-md">Phone Number</span>
//             <input
//               type="tel"
//               pattern="[0-9]{10}"
//               maxLength={10}
//               className="contact--input text-md"
//               name="phone-number"
//               id="phone-number"
//               required
//               placeholder="Enter 10-digit number"
//               title="Please enter a valid 10-digit phone number"
//             />
//           </label>
//         </div>
//         <label htmlFor="message" className="contact--label">
//           <span className="text-md">Message</span>
//           <textarea
//             className="contact--input text-md"
//             id="message"
//             rows="8"
//             placeholder="Type your message..."
//           />
//         </label>

//         <div>
//           <button className="btn btn-primary contact--form--btn">Submit</button>
//         </div>
//       </form>
//     </section>
//   );
// }


import emailjs from 'emailjs-com';
import { useRef } from 'react';
import { toast } from 'react-toastify';
export default function ContactMe() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_du9w2it', // from EmailJS dashboard
      'template_9kh3w07', // from EmailJS dashboard
      form.current,
      'jZFSmfPBksj280TnA' // from EmailJS dashboard
    )
      .then((result) => {
        toast.success(" Message sent successfully!");
        form.current.reset();
      }, (error) => {
        toast.error("Failed to send message, please try again later.");
        console.error(error.text);
      });
  };

  return (
    <section id="Contact" className="contact--section">
      <div className="contact--text">
        <h2>Contact Me</h2>
        <p className="text-lg">
          Feel free to reach out for collaborations, freelance opportunities, or just to connect!<br /> Let's build something amazing together.
        </p>
      </div>
      <form ref={form} onSubmit={sendEmail} className="contact--form--container">
        <div className="container">
          <label htmlFor="first-name" className="contact--label">
            <span className="text-md">First Name</span>
            <input type="text" className="contact--input text-md" name="first_name" id="first-name" required placeholder="Enter First Name" />
          </label>
          <label htmlFor="last-name" className="contact--label">
            <span className="text-md">Last Name</span>
            <input type="text" className="contact--input text-md" name="last_name" id="last-name" required placeholder="Enter Last Name" />
          </label>
          <label htmlFor="email" className="contact--label">
            <span className="text-md">Email</span>
            <input type="email" className="contact--input text-md" name="email" id="email" required placeholder="Enter Email" />
          </label>
          <label htmlFor="phone-number" className="contact--label">
            <span className="text-md">Phone Number</span>
            <input type="tel" pattern="[0-9]{10}" maxLength={10} className="contact--input text-md" name="phone" id="phone-number" required placeholder="Enter 10-digit number" />
          </label>
        </div>
        <label htmlFor="message" className="contact--label">
          <span className="text-md">Message</span>
          <textarea className="contact--input text-md" name="message" id="message" rows="8" required placeholder="Type your message..." />
        </label>

        <div>
          <button type="submit" className="btn btn-primary contact--form--btn">Submit</button>
        </div>
      </form>
    </section>
  );
}
