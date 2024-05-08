import { useEffect } from "react";
import { Container } from "react-bootstrap";
import Kinterak_Img from "../assets/project/Kinterak.png";
import Tenzies_Img from "../assets/project/Tenzies.png";
import Triform_Img from "../assets/project/Triform.png";
import Tobre_Img from "../assets/project/Tobre.png";
import Coffee_Shop_Img from "../assets/project/Coffee_Shop.png";
import { MdOutlineDateRange } from "react-icons/md";
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
    <section className="mt-10 projects" id="projects">
      <Container>
        <h1 className="mb-10">Live Projects</h1>
        <div className="grid grid-cols-1 gap-4 m-1 lg:grid-cols-2 place-items-center">
          <a href="https://triform.ai/" target="_blank" rel="noreferrer">
            <img
              src={Triform_Img}
              alt="Triform"
              className="my-4 duration-200 ease-linear rounded-lg hover:opacity-70"
            />
          </a>
          <div className="hidden space-y-2 lg:block">
            <h6 className="flex items-center text-lg gap-x-1">
              {" "}
              <span>
                <MdOutlineDateRange size={25} className="relative bottom-0.5" />
              </span>
              March 2024 - Current
            </h6>
            <p>
              A DevOps platform for your Python based LLM-implementations. We
              are committed to making scalable AI-implementation, integration
              and orchestration available for everyone. Join us in our
              alfa-testing and start exploring the simplicity of AI-integration!
            </p>
          </div>

          <div className="space-y-2">
            <h6 className="flex items-center text-lg gap-x-1">
              {" "}
              <span>
                <MdOutlineDateRange size={25} className="relative bottom-0.5" />
              </span>
              August 2023 - Current
            </h6>
            <p>
              A bearevment services platform which brings comfort and closure to
              your loved ones after you have passed away by allowing them to
              have interactive conversations with recordings of you.
            </p>
          </div>
          <a href="https://kinterak.com/" target="_blank" rel="noreferrer">
            <img
              src={Kinterak_Img}
              alt="Kinterak"
              className="my-4 duration-200 ease-linear rounded-lg hover:opacity-70"
            />
          </a>
          <div className="space-y-2 lg:hidden">
            <h6 className="flex items-center text-lg gap-x-1">
              {" "}
              <span>
                <MdOutlineDateRange size={25} className="relative bottom-0.5" />
              </span>
              March 2024 - Current
            </h6>
            <p>
              A DevOps platform for your Python based LLM-implementations. We
              are committed to making scalable AI-implementation, integration
              and orchestration available for everyone. Join us in our
              alfa-testing and start exploring the simplicity of AI-integration!
            </p>
          </div>
          <a href="https://tobrecards.com/" target="_blank" rel="noreferrer">
            <img
              src={Tobre_Img}
              alt="Tobre"
              className="my-4 duration-200 ease-linear rounded-lg hover:opacity-70"
            />
          </a>
          <div className="space-y-2">
            <h6 className="flex items-center text-lg gap-x-1">
              {" "}
              <span>
                <MdOutlineDateRange size={25} className="relative bottom-0.5" />
              </span>
              Nov 2023 - Current
            </h6>
            <p>
              An AI based platform which generates personalized greeting cards
              for every occasion. It uses AI to generate the best possible cards
              for your recipients based on their preferences.
            </p>
          </div>
          <div className="hidden space-y-2 lg:block">
            <h6 className="flex items-center text-lg gap-x-1">
              {" "}
              <span>
                <MdOutlineDateRange size={25} className="relative bottom-0.5" />
              </span>
              August 2022 - Oct 2022
            </h6>
            <p>
              A coffee shop website made for a client's startup. It is a UI
              design project that I made for a client from scratch using Figma
              and then implemented it in React and Tailwind CSS.
            </p>
          </div>
          <a
            href="https://coffee-website-delta.vercel.app/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={Coffee_Shop_Img}
              alt="Coffee_Shop"
              className="my-4 duration-200 ease-linear rounded-lg hover:opacity-70"
            />
          </a>
          <div className="space-y-2 lg:hidden">
            <h6 className="flex items-center text-lg gap-x-1">
              {" "}
              <span>
                <MdOutlineDateRange size={25} className="relative bottom-0.5" />
              </span>
              August 2022 - Oct 2022
            </h6>
            <p>
              A coffee shop website made for a client's startup. It is a UI
              design project that I made for a client from scratch using Figma
              and then implemented it in React and Tailwind CSS.
            </p>
          </div>
          <a
            href="https://tenzies-project-olive.vercel.app/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={Tenzies_Img}
              alt="Tenzies"
              className="my-4 duration-200 ease-linear rounded-lg hover:opacity-70"
            />
          </a>
          <div className="space-y-2">
            <h6 className="flex items-center text-lg gap-x-1">
              {" "}
              <span>
                <MdOutlineDateRange size={25} className="relative bottom-0.5" />
              </span>
              Dec 2022 - Jan 2023
            </h6>
            <p>
              A small game for a client. It is a simple game where you have to
              roll until all the numbers are same. This game is made with React.
            </p>
          </div>
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
                  <FaGraduationCap color="#f2f2f2" size={100} />
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
                  <FaChalkboardTeacher color="#f2f2f2" size={80} />
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
                  <BiLibrary color="#f2f2f2" size={100} />
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
                  <MdLocalHospital color="#f2f2f2" size={100} />
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
                  <MdViewModule color="#f2f2f2" size={100} />
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
                  <FaBloggerB color="#f2f2f2" size={80} />
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
