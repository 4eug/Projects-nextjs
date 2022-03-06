function ContactCard(props) {
  return (
    <div className="px-10 text-xl">
      Address
      <h2 className="text-sm mt-3 font-light">
        16 Ayuda Ritz Street Adenta, Accra — Ghana GS-012-3456 mail@ijikod.com
        +233 123 456 789
      </h2>
      <div className="mt-5 text-xl">
        Contact Us
        <input
          type="name"
          id="name"
          className="form"
          placeholder="Name"
          required
        />
        <input
          type="email"
          id="email"
          className="form"
          placeholder="Email"
          required
        />
        <textarea
          name="message"
          id="message"
          cols="30"
          rows="10"
          className="form"
          placeholder="Message"
        ></textarea>
        <button className="textarea">Submit</button>
      </div>
    </div>
  );
}

export default ContactCard;
