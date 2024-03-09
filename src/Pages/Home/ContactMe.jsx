export default function ContactMe() {
  // Function to handle button click to redirect to email
  const redirectToEmail = () => {
    window.location.href = "mailto:praneethacp35@gmail.com";
  };

  return (
    <section id="Contact" className="contact--section">
      <div>
        <p className="sub--title">Get In Touch</p>
        <h2>Contact Me</h2>
        <p className="text-lg">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. In, odit.
        </p>
      </div>
      <form className="contact--form--container">
        <label htmlFor="first-name" className="contact--label">
          <span className="text-md">Name</span>
          <input
            type="text"
            className="contact--input text-md"
            name="first-name"
            id="first-name"
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
            required
          />
        </label>
        <label htmlFor="message" className="contact--label">
          <span className="text-md">Message</span>
          <textarea
            className="contact--input text-md"
            id="message"
            rows="8"
            placeholder="Type your message..."
          />
        </label>
        <label htmlFor="checkbox" className="checkbox--label">
          <input type="checkbox" required name="checkbox" id="checkbox" />
          <span className="text-sm">I accept the terms</span>
        </label>
        <div>
          <button
            onClick={redirectToEmail}
            className="btn btn-primary contact--form--btn"
          >
            Submit
          </button>
        </div>
      </form>
    </section>
  );
}
