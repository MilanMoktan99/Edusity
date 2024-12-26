import "./Contact.css";
import Msg_icon from "../../assets/msg-icon.png";
import Mail_icon from "../../assets/mail-icon.png";
import Phone_icon from "../../assets/phone-icon.png";
import Location_icon from "../../assets/location-icon.png";
import White_arrow from "../../assets/white-arrow.png"
import React, { useState } from "react";

function Contact(){

    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "fa2a028d-b93b-4df5-ae71-d4abed2485ce");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };

    return (
        <div className="contact">
            <div className="contact-col">
                <h3>Send us message <img src={Msg_icon} alt="" /></h3>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae saepe omnis dignissimos at ipsa ab velit aliquid, aspernatur laudantium cumque dolorum, quidem ducimus. Autem, sit dolores. Ut inventore est eum!</p>
                <ul>
                    <li><img src={Mail_icon} alt="" /> edusity345@gmail.dev</li>
                    <li><img src={Phone_icon} alt="" /> +123 012-345-6789</li>
                    <li><img src={Location_icon} alt="" /> 77 Massachustta Ave, Cambridge<br/>MA 02356, United Stated</li>
                </ul>
            </div>
            <div className="contact-col">
                <form onSubmit={onSubmit}>
                    <label>Your name</label>
                    <input type="text" name="name" placeholder="Enter your name" required/>
                    <label>Your phone</label>
                    <input type="tel" name="phone" placeholder="Enter your phone number" required/>
                    <label>Your message</label>
                    <textarea name="message" rows="6" placeholder="Enter your message" ></textarea>
                    <button className="btn dark-btn">Submit now <img src={White_arrow} alt="" /></button>
                </form>
                <span>{result}</span>
            </div>
        </div>
    )
}

export default Contact