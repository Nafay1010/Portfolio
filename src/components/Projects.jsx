import { useEffect } from "react";
import { Container } from "react-bootstrap";
import Kinterak_Img from "../assets/project/Kinterak.png";
import Tenzies_Img from "../assets/project/Tenzies.png";
import {
  FaGraduationCap,
  FaBloggerB,
  FaChalkboardTeacher,
} from "react-icons/fa";
import { BiLibrary } from "react-icons/bi";
import { MdLocalHospital, MdViewModule } from "react-icons/md";

export const Projects = () => {
  useEffect(() => {
    const handleMouseMove = (e) => {
      const cards = document.getElementsByClassName("card");
      for (const card of cards) {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        card.style.setProperty("--mouse-x", `${x}px`);
        card.style.setProperty("--mouse-y", `${y}px`);
      }
    };

    document
      .getElementById("cards")
      .addEventListener("mousemove", handleMouseMove);

    return () => {
      document
        .getElementById("cards")
        .removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
  return (
    <section className="projects" id="projects">
      <Container>
      <h1>Live Projects</h1>
      <div className="grid md:grid-cols-2 grid-cols-1 place-content-center gap-4 my-5">
        <a href="https://kinterak.com/" target="_blank" rel="noreferrer">
          <img
            src={Kinterak_Img}
            alt="Kinterak"
            className="rounded-lg hover:opacity-70 duration-200 ease-linear"
          />
        </a>
        <a
          href="https://tenzies-project-olive.vercel.app/"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src={Tenzies_Img}
            alt="Tenzies"
            className="rounded-lg hover:opacity-70 duration-200 ease-linear"
          />
        </a>
      </div>
      </Container>
      <Container>
        <h1>Other Projects</h1>
        <div id="cards">
          <a
            href="https://github.com/Nafay1010/Council-AI-Based-Recommending-System-for-Educational-Institutes"
            target="_blank"
            rel="noreferrer"
          >
            <div className="card">
              <div className="card-content">
                <div className="card-image">
                  <FaGraduationCap
                    style={{ width: "100%", height: "100%", color: "#f2f2f2" }}
                  />
                </div>
                <div className="card-info-wrapper">
                  <div className="card-info">
                    <div className="card-info-title">
                      <h3>Council</h3>
                      <h4>
                        An AI Based MERN Stack Recommendation System for
                        Educational Institutes.
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </a>
          <a
            href="https://github.com/Nafay1010/Miniflex"
            target="_blank"
            rel="noreferrer"
          >
            <div className="card">
              <div className="card-content">
                <div className="card-image">
                  <FaChalkboardTeacher
                    style={{ width: "80%", height: "80%", color: "#f2f2f2" }}
                  />
                </div>
                <div className="card-info-wrapper">
                  <div className="card-info">
                    <div className="card-info-title">
                      <h3>Mini-Flex</h3>
                      <h4>
                        University Management System, made with WAMP environment
                        and uses bootstrap framework.{" "}
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </a>
          <a
            href="https://github.com/Nafay1010/Library_Management_System"
            target="_blank"
            rel="noreferrer"
          >
            <div className="card">
              <div className="card-content">
                <div className="card-image">
                  <BiLibrary
                    style={{ width: "100%", height: "100%", color: "#f2f2f2" }}
                  />
                </div>
                <div className="card-info-wrapper">
                  <div className="card-info">
                    <div className="card-info-title">
                      <h3>LMS</h3>
                      <h4>
                        Library Management System Mobile App in Android Java
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </a>
          <a
            href="https://github.com/Nafay1010/HMS"
            target="_blank"
            rel="noreferrer"
          >
            <div className="card">
              <div className="card-content">
                <div className="card-image">
                  <MdLocalHospital
                    style={{ width: "100%", height: "100%", color: "#f2f2f2" }}
                  />
                </div>
                <div className="card-info-wrapper">
                  <div className="card-info">
                    <div className="card-info-title">
                      <h3>HMS</h3>
                      <h4>
                        Basic Hospital Management System with GUI (Coded in
                        Java).
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </a>
          <a
            href="https://github.com/Nafay1010/Research-Development-Module-Odoo"
            target="_blank"
            rel="noreferrer"
          >
            <div className="card">
              <div className="card-content">
                <div className="card-image">
                  <MdViewModule
                    style={{ width: "100%", height: "100%", color: "#f2f2f2" }}
                  />
                </div>
                <div className="card-info-wrapper">
                  <div className="card-info">
                    <div className="card-info-title">
                      <h3>R&D Odoo Module</h3>
                      <h4>
                        Custom Research & Development Module made with Odoo
                        Framework.
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </a>
          <a
            href="https://github.com/Nafay1010/Blog-Junction"
            target="_blank"
            rel="noreferrer"
          >
            <div className="card">
              <div className="card-content">
                <div className="card-image">
                  <FaBloggerB
                    style={{ width: "80%", height: "80%", color: "#f2f2f2" }}
                  />
                </div>
                <div className="card-info-wrapper">
                  <div className="card-info">
                    <div className="card-info-title">
                      <h3>Blog Junction</h3>
                      <h4>
                        A MERN Stack blogging website made with redux toolkit{" "}
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </a>
        </div>
      </Container>
    </section>
  );
};
