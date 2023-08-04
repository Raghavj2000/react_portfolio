import React, { useRef } from "react";
import "./contact.css";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";


const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    // Validate name field
    const nameField = form.current.user_name;
    if (!nameField.value.trim()) {
      alert("Name field cannot be empty");
      return;
    }

    // Validate email field
    const emailField = form.current.user_email;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailField.value.trim() || !emailRegex.test(emailField.value)) {
      alert("Invalid email address");
      return;
    }

    // Validate message field
    const messageField = form.current.message;
    if (messageField.value.trim().split(" ").length < 20) {
      alert("Message should be at least 20 words");
      return;
    }

    // If all fields pass validation, send the email using emailjs.sendForm(...)
    emailjs
      .sendForm(
        "service_96pw9qk",
        "template_08jgm21",
        form.current,
        "z3yzvox-Xv2MQ_y1n"
      )
      .then((result) => {
        console.log(result.text);
        toast(
          "Thank you for contacting me! I will get back to you as soon as possible"
        );
      })
      .catch((error) => {
        console.log(error.text);
      });

    // Reset the form fields
    form.current.reset();
  };
  return (
    <div className="contact-screen">
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <div className="contact-heading">Feel free to contact!</div>
      <div className="contact-container">
        <div className="contact-left">
          <div className="mac-design">
            <div className="red"></div>
            <div className="green"></div>
          </div>
          <div className="cd-contact">
            <span className="green-span">raghav $</span> cd contact
          </div>
          <div className="about-contact">
            <span className="green-span">
              Contact <span className="light-green">(main)</span> $
            </span>
          </div>
          <div className="text-contact">
            Thank you for visiting my portfolio! I appreciate your interest and
            would be happy to answer any questions or address any concerns you
            may have. I value open communication and
            look forward to hearing from you. Feel free to contact me using the
            contact form, and I'll get back to you as soon as
            possible. I'm excited to connect and explore how we can work
            together to achieve our goals.
          </div>
        </div>
        <div className="contact-right">
          <div className="mac-design"></div>
          <div className="cd-contact-form">
            <span className="green-span">raghav $</span> cd contactForm
          </div>
          <div className="about-contact-form">
            <span className="green-span">
              ContactForm <span className="light-green">(main)</span> $
            </span>
          </div>
          <form ref={form} onSubmit={sendEmail}>
            <div className="form-group">
              <label htmlFor="user_name">Name</label>
              <input type="text" id="user_name" name="user_name" />
            </div>
            <div className="form-group">
              <label htmlFor="user_email">Email</label>
              <input type="email" id="user_email" name="user_email" />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message"
              rows={5} name="message" />
            </div>
            <input type="submit" value="Send" className="submit-button" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
