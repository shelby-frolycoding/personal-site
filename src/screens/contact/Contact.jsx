// import{ init } from 'emailjs-com';
// init("user_dyOHSKHplPHA1ywb8UQtO");
import emailjs from 'emailjs-com';
import Layout from "../../components/Layout/Layout"
import React, {useState} from "react";
import "./Contact.css";
import Talk from "../../components/ImageComps/Talk"
import Plane from "../../components/ImageComps/Plane"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faCoffee,  } from '@fortawesome/free-solid-svg-icons';

// export default function Contact() {

//   function sendEmail(e) {
//     e.preventDefault();

//     emailjs.sendForm('service_lf90h6i', 'contact_form', e.target, 'user_dyOHSKHplPHA1ywb8UQtO')
//       .then((result) => {
//           console.log(result.text);
//       }, (error) => {
//           console.log(error.text);
//       });
//   }

//   return (
//     <div className="yeee">
//      <Layout />
//    <br/>
//     <form className="contact-form" onSubmit={sendEmail}> please@me <br /> <br/>
//       {/* <input type="hidden" name="contact_number" /> <br/> */}
//       <label>Name</label> <br/>
//       <input type="text" name="user_name" /> <br/>
//       <label>Email</label> <br/>
//       <input type="email" name="user_email" /> <br/>
//       <label>Message</label> <br/>
//       <textarea name="message" /> <br/>
//       <button className="big" type="submit" value="Send">SEND</button>
//       </form>
    
//       <div class="bb"></div>
//       </div>
     
      
//   );
// }



// emailjs.sendForm('service_lf90h6i', 'contact_form', e.target, 'user_dyOHSKHplPHA1ywb8UQtO')

const Contact = () => {
  // Creating state variables to keep track of state for name, email and message from the form.
  const [formData, setFormData] = useState({
    from_name: "",
    from_email: "",
    message: "",
  });

  // Setting variables from state so that they can be updated by the handle change function.
  const {from_name, from_email, message} = formData;

  // Generic handle change function to handle the updating of the form data.
  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Handle submit function that pushes the data to the emailjs API to send the email.
  const handleSubmit = (e) => {
    e.preventDefault();

    let templateParams = {
      from_name: from_name,
      from_email: from_email,
      message: message,
    };
    emailjs
      .send(
        "service_lf90h6i",
        "contact_form",
        templateParams,
        "user_dyOHSKHplPHA1ywb8UQtO"
      )
      .then(handleSend());
  };

  // Handle send function to clear the form and scroll back to the top of the page.
  const handleSend = () => {
    setFormData({
      from_name: "",
      from_email: "",
      message: "",
    });
   
  };

  

  return (
    <>
      <div className="yee">
        <Layout /> <br />
        <Talk />
        <br/>
        <Plane />
        
        <div className="contact-form" id="contact">
          please@me
       <br/>
        <div className="form-container">
          <form onSubmit={handleSubmit}>
            <label>Name</label><br/><input 
              name="from_name"
              value={from_name}
              label="Name: "
              type="text"
              variant="standard"
              fullWidth
              required
              onChange={handleChange}
            /><br/>
            <label>Email</label><br/><input
              name="from_email"
              value={from_email}
              label="Email: "
              type="email"
              variant="standard"
              fullWidth
              required
              onChange={handleChange}
            /><br/>
            <label>Message</label><br/><textarea
              name="message"
              label="Message: "
              type="text"
              variant="standard"
              fullWidth
              required
              value={message}
              onChange={handleChange}
              multiline
              rowsMax={6}
            /><br/>
           
           <button className="big" type="submit" value="Send">SEND</button>
            </form>
           
            </div>
            
        </div>
        <div className = "meeting"> 
        <a href="https://calendly.com/shelbysexton/" target="_blank" className="lol"><FontAwesomeIcon className="meetmee" icon={faCoffee} /> <br />
          <p className="pm"> Schedule a Meeting with Me </p></a>
         </div> 
        <div class="bb"></div>
        
      </div>
    </>
  );
};

export default Contact;