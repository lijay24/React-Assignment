import React from "react";
import "./contact.scss";
import seperator from "../../assets/seperator.svg";
const Contact = () => {
  return (
    <div id="Contact">
      <h2 className="contact-heading outline">CONTACT</h2>
      <p>
        Nulla in velit a metus rhoncus tempus. Nulla congue nulla vel sem varius
        finibus. Sed ornare sit amet lorem sed viverra. In vel urna quis libero
        viverra facilisis ut ac est.
      </p>

      <figure>
        <img src={seperator} alt="seperator" />
      </figure>
      <form action="#" method="post">
        <input
          type="text"
          placeholder="Enter Your Name*"
          id="name"
          name="name"
        />
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Enter Your Email*"
        />
        <input
          type="number"
          name="number"
          id="number"
          placeholder="Enter Your Phone No"
        />
        <textarea
          name="comment"
          id="comment"
          placeholder="Your Message*"
        ></textarea>
        <button type="submit" className="submit-btn btn">
          SUBMIT
        </button>
      </form>
    </div>
  );
};

export default Contact;
