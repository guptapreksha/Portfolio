export default function ContactMe() {
  return (
    <section id="Contact" className="contact--section">
      <div>
        {/* <p className="sub--title">Get In Touch</p> */}
        <h2>Contact Me</h2>
        <p className="text-lg">
        Feel free to reach out for collaborations, freelance opportunities, or just to connect!<br /> Let's build something amazing together.
        </p>
      </div>
      <form className="contact--form--container">
        <div className="container">
          <label htmlFor="first-name" className="contact--label">
            <span className="text-md">First Name</span>
            <input
              type="text"
              className="contact--input text-md"
              name="first-name"
              id="first-name"
               placeholder="Enter First Name"
              required
            />
          </label>
          <label htmlFor="last-name" className="contact--label">
            <span className="text-md">Last Name</span>
            <input
              type="text"
              className="contact--input text-md"
              name="last-name"
              id="last-name"
              placeholder="Enter Last Name"
              required
            />
          </label>
          <label htmlFor="email" className="contact--label">
            <span className="text-md">Email</span>
            <input
              type="email"
              className="contact--input text-md"
              name="email"
              id="email"
              placeholder="Enter Email"
              required
            />
          </label>
          <label htmlFor="phone-number" className="contact--label">
            <span className="text-md">Phone Number</span>
            <input
    type="tel"
    pattern="[0-9]{10}"
    maxLength={10}
    className="contact--input text-md"
    name="phone-number"
    id="phone-number"
    required
    placeholder="Enter 10-digit number"
    title="Please enter a valid 10-digit phone number"
  />
            {/* <input
              type="number"
              min={0}
              className="contact--input text-md"
              name="phone-number"
              id="phone-number"
              required
            /> */}
          </label>
        </div>
        {/* <label htmlFor="choode-topic" className="contact--label">
          <span className="text-md">Choose a topic</span>
          <select id="choose-topic" className="contact--input text-md">
            <option>Select One...</option>
            <option>Item 1</option>
            <option>Item 2</option>
            <option>Item 3</option>
          </select>
        </label> */}
        <label htmlFor="message" className="contact--label">
          <span className="text-md">Message</span>
          <textarea
            className="contact--input text-md"
            id="message"
            rows="8"
            placeholder="Type your message..."
          />
        </label>
        {/* <label htmlFor="checkboc" className="checkbox--label">
          <input type="checkbox" required name="checkbox" id="checkbox" />
          <span className="text-sm">I accept the terms</span>
        </label> */}
        <div>
          <button className="btn btn-primary contact--form--btn">Submit</button>
        </div>
      </form>
    </section>
  );
}
