import React from "react";
import "./FormStyles.css";

const Form = () => {
  return (
    <section id="form" className="form-content">
      <form className="form">
        <div className="line">
          <div className="formItem">
            <label htmlFor="name">Full Name*</label>
            <input type="text" name="name" placeholder="John David" />
          </div>
          <div className="formItem">
            <label htmlFor="email">Your email *</label>
            <input
              type="email"
              name="email"
              placeholder="example@yourmail.com"
            />
          </div>
        </div>
        <div className="line">
          <div className="formItem">
            <label htmlFor="phone">Phone *</label>
            <input type="number" name="phone" placeholder="your number here" />
          </div>
          <div className="formItem">
            <label htmlFor="subject">Subject *</label>
            <input type="text" name="subject" placeholder="How can we Help" />
          </div>
        </div>
        <div className="formItem">
          <label htmlFor="textarea">We can help you?</label>
          <textarea
            name="textarea"
            id=""
            placeholder="Type your message here..."
          ></textarea>
        </div>
      </form>
    </section>
  );
};

export default Form;
