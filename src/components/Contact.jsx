import { useState, useRef } from "react";
import { Row, Col } from "react-bootstrap";
import TrackVisibility from "react-on-screen";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import { Container } from "react-bootstrap";
import {
  ComposableMap,
  Geographies,
  Geography,
  Annotation,
} from "react-simple-maps";

export const Contact = () => {
  const form = useRef();
  const formInitialDetails = {
    firstname: "",
    lastname: "",
    email: "",
    phoneNo: "",
    message: "",
  };
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const showSuccess = () => {
    toast.success("Email Sent Successfully!", {
      position: toast.POSITION.TOP_CENTER,
    });
  };

  const showError = () => {
    toast.error("Error Occurred!", {
      position: toast.POSITION.TOP_CENTER,
    });
  };

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_7ilapte",
        "template_94k70jb",
        form.current,
        "Ojsrr2IKaqaUrTzYs"
      )
      .then(
        (result) => {
          setFormDetails(formInitialDetails);
          showSuccess();
        },
        (error) => {
          showError();
        }
      );
  };

  return (
    <section className="contact" id="connect">
      <Row className="px-10 justify-content-md-center">
        <Col xs lg={5}>
          <TrackVisibility>
            {({ isVisible }) => (
              <div
                className={isVisible ? "animate__animated animate__fadeIn" : ""}
              >
                <h2>Get In Touch</h2>
                <form ref={form} onSubmit={handleSubmit}>
                  <Row>
                    <Col size={12} sm={6} className="px-1">
                      <input
                        type="text"
                        name="firstname"
                        required
                        value={formDetails.firstname}
                        placeholder="First Name"
                        onChange={(e) =>
                          onFormUpdate("firstname", e.target.value)
                        }
                      />
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input
                        type="text"
                        name="lastname"
                        required
                        value={formDetails.lastname}
                        placeholder="Last Name"
                        onChange={(e) =>
                          onFormUpdate("lastname", e.target.value)
                        }
                      />
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input
                        type="email"
                        name="email"
                        required
                        value={formDetails.email}
                        placeholder="Email Address"
                        onChange={(e) => onFormUpdate("email", e.target.value)}
                      />
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input
                        type="tel"
                        name="phoneNo"
                        required
                        value={formDetails.phoneNo}
                        placeholder="Phone No."
                        onChange={(e) =>
                          onFormUpdate("phoneNo", e.target.value)
                        }
                      />
                    </Col>
                    <Col size={12} className="px-1">
                      <textarea
                        rows="6"
                        name="message"
                        required
                        value={formDetails.message}
                        placeholder="Message"
                        onChange={(e) =>
                          onFormUpdate("message", e.target.value)
                        }
                      ></textarea>
                      <div
                        className="btn"
                        style={{
                          textAlign: "center",
                          display: "flex",
                          justifyContent: "center",
                          alignContent: "center",
                          marginTop: "-10px",
                        }}
                      >
                        <button type="submit">Send</button>
                      </div>
                    </Col>
                  </Row>
                </form>
              </div>
            )}
          </TrackVisibility>
        </Col>
        <Col lg={5}>
          <Container>
            <ComposableMap
              projection="geoAzimuthalEqualArea"
              projectionConfig={{
                rotate: [-10.0, -52.0, 0],
                center: [50, 0],
                scale: 1000,
              }}
            >
              <Geographies
                geography="/features.json"
                fill="none"
                stroke="#FFFFFF"
                strokeWidth={0.9}
              >
                {({ geographies }) =>
                  geographies.map((geo) => (
                    <Geography key={geo.rsmKey} geography={geo} />
                  ))
                }
              </Geographies>
              <Annotation
                subject={[71.4414, 32.6129]}
                dx={-90}
                dy={-30}
                connectorProps={{
                  stroke: "#ff83b9",
                  strokeWidth: 3,
                  strokeLinecap: "round",
                }}
              >
                <text
                  x="-8"
                  textAnchor="end"
                  alignmentBaseline="middle"
                  fill="#ff83b9"
                >
                  {"Pakistan"}
                </text>
              </Annotation>
            </ComposableMap>
          </Container>
        </Col>
      </Row>
    </section>
  );
};
