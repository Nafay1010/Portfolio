import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import name from "../assets/img/nafay.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon4 from "../assets/img/nav-icon4.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import CVModal from "./CVModal";
import { BrowserRouter as Router } from "react-router-dom";

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  return (
    <Router>
      <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Brand href="#home">
            <img src={name} alt="Logo" style={{ marginTop: "-30px" }} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link
                href="#home"
                className={
                  activeLink === "home" ? "active navbar-link" : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("home")}
              >
                Home
              </Nav.Link>
              <Nav.Link
                href="#skills"
                className={
                  activeLink === "skills" ? "active navbar-link" : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("skills")}
              >
                Skills
              </Nav.Link>
              <Nav.Link
                href="#experience"
                className={
                  activeLink === "experience"
                    ? "active navbar-link"
                    : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("experience")}
              >
                Expertise
              </Nav.Link>
              <Nav.Link
                href="#projects"
                className={
                  activeLink === "projects"
                    ? "active navbar-link"
                    : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("projects")}
              >
                Projects
              </Nav.Link>
              <Nav.Link
                href="#education"
                className={
                  activeLink === "education"
                    ? "active navbar-link"
                    : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("education")}
              >
                Education
              </Nav.Link>
            </Nav>
            <span className="navbar-text">
              <div className="social-icon">
                <a
                  href="https://www.linkedin.com/in/abdul-nafay-06588322b/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={navIcon1} alt="Linked In" />
                </a>
                <a
                  href="https://github.com/Nafay1010"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={navIcon4} alt="Github" />
                </a>
                <a
                  href="https://www.instagram.com/nafay_1010/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={navIcon3} alt="Instagram" />
                </a>
              </div>
              <button className="contactbtn" onClick={openModal}>
                CV
              </button>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <CVModal
        isOpen={modalOpen}
        onRequestClose={closeModal}
        cvUrl="/MuhammadAbdulNafay_CV.pdf"
      />
    </Router>
  );
};

export default NavBar;
