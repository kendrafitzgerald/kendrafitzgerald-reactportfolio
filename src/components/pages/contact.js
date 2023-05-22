import React, { useState } from "react";
import validateEmail from "../../utils/helpers.js";

const styles = {
  body: {
    background: "#000018",
    height: 525,
    width: 750,
    marginLeft: "auto",
    marginRight: "auto",
  },
  header: {
    color: "white",
    fontFamily: 'Rockwell, Courier Bold, Courier'
  },
  text: {
    color: "white",
    fontFamily: 'Rockwell, Courier Bold, Courier'
  },
  label: {
    color: "white",
    fontSize: 25,
    fontFamily: 'Rockwell, Courier Bold, Courier'
  },
  messageBody: {
    height: 100,
  },
  submitBtn: {
    marginTop: 25,
    width: 500,
    marginLeft: "auto",
    marginRight: "auto",
  },
};
export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === "name") {
      setName(inputValue);
    } else if (inputType === "email") {
      setEmail(inputValue);
    } else {
      setMessage(inputValue);
    }
  };
  const mouseLeaveHandler = (e) => {
    const { value, name } = e.target;
    if (name === "name" && value.trim() === "") {
      setErrorMessage("Please Enter Your Name!");
    } else if (name === "email" && value.trim() === "") {
      setErrorMessage("Please Enter Your Email!");
    } else if (name === "message" && value.trim() === "") {
      setErrorMessage("Please Enter a Message!");
    } else {
      setErrorMessage("");
    }
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();
    const { value, name } = e.target;
    if (!validateEmail(email)) {
      setErrorMessage("Your email is invalid. Please try again!");
      return;
    }
    if (name === "name" && value.trim() === "") {
      setErrorMessage("Please Enter Your Name!");
      return;
    }
    if (name === "email" && value.trim() === "") {
      setErrorMessage("Please Enter Your Email!");
      return;
    }
    if (name === "message" && value.trim() === "") {
      setErrorMessage("Please Enter Your Message!");
    }
    alert(
      `Hey ${name}! Thanks for reaching out! I'll get back to you within one business day :)`
    );

    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="card" style={styles.body}>
      <div className="card-body">
        <h1 style={styles.header}>Contact Me!</h1>
        <form className="form">
          <label style={styles.label}>Name</label>
          <input
            className="form-control"
            value={name}
            name="name"
            onChange={handleInputChange}
            onMouseLeave={mouseLeaveHandler}
            type="text"
            placeholder="Enter Your Name Here!"
          />
          <label style={styles.label}>Email</label>
          <input
            className="form-control"
            value={email}
            name="email"
            onChange={handleInputChange}
            onMouseLeave={mouseLeaveHandler}
            type="email"
            placeholder="Enter your Email Here!"
          />
          <label style={styles.label}>Message</label>
          <input
            className="form-control"
            style={styles.messageBody}
            value={message}
            name="message"
            onChange={handleInputChange}
            onMouseLeave={mouseLeaveHandler}
            type="text"
            placeholder="Enter your Message Here!"
          />
          {errorMessage && (
          <div>
            <p style={styles.text}>{errorMessage}</p>
          </div>
        )}
          <button
            type="button"
            className="form-control"
            style={styles.submitBtn}
            onClick={handleFormSubmit}
          >
            Send Your Message
          </button>
        </form>
      </div>
    </div>
  );
}
