import React from "react";

const Contact = () => {
  return (
    <main>
      <h1>Contact</h1>

      <form>
        <div>
          <label>Name</label>
          <br />
          <input type="text" placeholder="Enter your name" />
        </div>

        <br />

        <div>
          <label>Email</label>
          <br />
          <input type="email" placeholder="Enter your email" />
        </div>

        <br />

        <div>
          <label>Message</label>
          <br />
          <textarea
            rows="5"
            placeholder="Write your message..."
          ></textarea>
        </div>

        <br />

        <button type="submit">Send</button>
      </form>
    </main>
  );
};

export default Contact;