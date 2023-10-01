import { useState, useRef } from "react";
import { Row, Col } from "react-bootstrap";
import TrackVisibility from 'react-on-screen';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';
import { Container } from "react-bootstrap";

export const Contact = () => {
  const form = useRef();
  const formInitialDetails = {
    firstname: '',
    lastname: '',
    email: '',
    phoneNo: '',
    message: ''
  }
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const showSuccess = () => {
        toast.success('Email Sent Successfully!', {
            position: toast.POSITION.TOP_CENTER
        });
    }

  const showError = () => {
        toast.error('Error Occurred!', {
            position: toast.POSITION.TOP_CENTER
        });
    }

  const onFormUpdate = (category, value) => {
      setFormDetails({
        ...formDetails,
        [category]: value
      })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();    
    emailjs.sendForm('service_7ilapte', 'template_94k70jb', form.current, 'Ojsrr2IKaqaUrTzYs')
      .then((result) => {
          setFormDetails(formInitialDetails);
          showSuccess();
      }, (error) => {
        showError();
      });
  };

  return (
    <section className="contact" id="connect">
        <Row className="justify-content-md-center">
          <Col xs lg={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <h2>Get In Touch</h2>
                <form ref={form} onSubmit={handleSubmit}>
                  <Row>
                    <Col size={12} sm={6} className="px-1">
                      <input type="text" name="firstname" required value={formDetails.firstname} placeholder="First Name" onChange={(e) => onFormUpdate('firstname', e.target.value)} />
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="text" name="lastname" required value={formDetails.lastname} placeholder="Last Name" onChange={(e) => onFormUpdate('lastname', e.target.value)}/>
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="email" name="email" required value={formDetails.email} placeholder="Email Address" onChange={(e) => onFormUpdate('email', e.target.value)} />
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="tel" name="phoneNo" required value={formDetails.phoneNo} placeholder="Phone No." onChange={(e) => onFormUpdate('phoneNo', e.target.value)}/>
                    </Col>
                    <Col size={12} className="px-1">
                      <textarea rows="6" name="message" required value={formDetails.message} placeholder="Message" onChange={(e) => onFormUpdate('message', e.target.value)}></textarea>
                      <div className="btn" style={{textAlign:"center", display:"flex", justifyContent:"center", alignContent:"center", marginTop:"-10px"}}>
                      <button type="submit">Send</button>
                      </div>
                    </Col>
                  </Row>
                </form>
              </div>}
            </TrackVisibility>
          </Col>
          <Col xs lg={6}>
            <TrackVisibility>
            <Container>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13291.816317681554!2d71.46327486750265!3d33.606495923246484!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38d8ef4de5d68f63%3A0x34cb1f3c6fc6438e!2sKohat%20Development%20Authority%2C%20Kohat%2C%20Khyber%20Pakhtunkhwa%2C%20Pakistan!5e0!3m2!1sen!2s!4v1686475996406!5m2!1sen!2s" 
            title="Google Map"
            width={"100%"} height={"500px"} style={{border: "0"}} 
            allowfullscreen="true" loading="lazy" 
            referrerpolicy="no-referrer-when-downgrade"></iframe>
            </Container>
            </TrackVisibility>
          </Col>
        </Row>
    </section>
  )
}
