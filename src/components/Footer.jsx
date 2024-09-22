import { Container, Row, Col } from "react-bootstrap";
import name from "../assets/img/nafay.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon4 from "../assets/img/nav-icon4.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <img src={name} alt="Logo" style={{marginTop:"-35px"}}/>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
           <div className="social-icon">
                <a href="https://www.linkedin.com/in/abdul-nafay-06588322b/" target="_blank" rel="noreferrer"><img src={navIcon1} alt="Linked In"/></a>
                <a href="https://github.com/Nafay1010" target="_blank" rel="noreferrer"><img src={navIcon4} alt="Github" /></a>
                <a href="https://www.instagram.com/nafay_1010/" target="_blank" rel="noreferrer"><img src={navIcon3} alt="Instagram" /></a>
              </div>
            <p>Copyright 2024. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
