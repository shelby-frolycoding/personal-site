// import{ init } from 'emailjs-com';
// init("user_dyOHSKHplPHA1ywb8UQtO");
import emailjs from 'emailjs-com';
import Layout from "../../components/Layout/Layout"
import "./Contact.css";

export default function Contact() {

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_lf90h6i', 'contact_form', e.target, 'user_dyOHSKHplPHA1ywb8UQtO')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  }

  return (
    <div className="yeee">
     <Layout />
   <br/>
    <form className="contact-form" onSubmit={sendEmail}> please@me <br /> <br/>
      {/* <input type="hidden" name="contact_number" /> <br/> */}
      <label>Name</label> <br/>
      <input type="text" name="user_name" /> <br/>
      <label>Email</label> <br/>
      <input type="email" name="user_email" /> <br/>
      <label>Message</label> <br/>
      <textarea name="message" /> <br/>
      <button className="big" type="submit" value="Send">SEND</button>
      </form>
    
      <div class="bb"></div>
      </div>
     
      
  );
}

