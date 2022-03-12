import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

function ContactCard(props) {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        form.current,
        "YOUR_USER_ID"
      )
      .then(
        (result) => {
          alert("Message sent successfully");
        },
        (error) => {
          alert(error.message);
        }
      );
    e.target.reset();
  };

  return (
    <div className="px-10 text-ijikod-xsm">
      Address
      <h2 className="text-ijikod-xxsm-a mt-3 font-light">
        16 Ayuda Ritz Street Adenta, Accra — Ghana GS-012-3456 mail@ijikod.com
        +233 123 456 789
      </h2>
      <div className="mt-5 text-ijikod-xsm">
        Contact Us
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="name"
            name="name"
            className="form"
            placeholder="Name"
            required
          />
          <input
            type="email"
            email="email"
            className="form"
            placeholder="Email"
            required
          />
          <textarea
            name="message"
            id="message"
            className="form resize-none"
            placeholder="Message"
          ></textarea>
          <button className="textarea">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default ContactCard;
