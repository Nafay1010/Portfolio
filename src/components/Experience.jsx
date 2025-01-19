import { Container } from "react-bootstrap";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaLinux } from "react-icons/fa";
import { FaDocker } from "react-icons/fa";
import { GrStorage } from "react-icons/gr";
import { TbBinaryTree } from "react-icons/tb";
import { FaPython } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { FaJava } from "react-icons/fa";
import { SiPhp } from "react-icons/si";

export const Experience = () => {
  return (
    <section className="experience" id="experience">
      <Container>
        <h1
          style={{
            textAlign: "center",
            marginBottom: "50px",
            marginTop: "50px",
          }}
        >
          Expertise
        </h1>
        <VerticalTimeline lineColor="#f2f2f2" animate={true}>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            position={"right"}
            contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
            iconStyle={{ background: "#f2f2f2", color: "black" }}
            icon={<FaPython />}
          >
            <h3 style={{ color: "black" }}>Python</h3>
            <h5 style={{ color: "grey", fontSize: "1rem", marginTop: "5px" }}>
              Django | Flask | FastAPI
            </h5>
            <p style={{ color: "black" }}>
              Building back-end systems, APIs, and scalable microservices.
            </p>
            <p style={{ color: "black" }}>
              AI/ML, data analysis, and developing data-driven solutions.
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
        <VerticalTimeline lineColor="#f2f2f2" animate={true}>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            position={"left"}
            contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
            iconStyle={{ background: "#f2f2f2", color: "black" }}
            icon={<IoLogoJavascript />}
          >
            <h3 style={{ color: "black" }}>JavaScript/TypeScript</h3>
            <h5 style={{ color: "grey", fontSize: "1rem", marginTop: "5px" }}>
              React | Angular | Svelte | Next.js | Node.js | Express
            </h5>

            <p style={{ color: "black" }}>
              Full-stack development and building responsive front-ends.
            </p>
            <p style={{ color: "black" }}>
              Server-side applications and API integration.
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            position={"right"}
            contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
            iconStyle={{ background: "#f2f2f2", color: "black" }}
            icon={<FaDocker />}
          >
            <h3 style={{ color: "black" }}>DevOps | Docker</h3>
            <h5 style={{ color: "grey", fontSize: "1rem", marginTop: "5px" }}>
              Docker | Kubernetes | Jenkins | CI/CD
            </h5>
            <p style={{ color: "black" }}>
              Expertise in containerization using Docker and orchestration with
              Kubernetes.
            </p>
            <p style={{ color: "black" }}>
              Setting up CI/CD pipelines using Jenkins, GitHub Actions, and
              similar tools.
            </p>
            <p style={{ color: "black" }}>
              Managing cloud deployments, monitoring, and scaling applications.
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
        <VerticalTimeline lineColor="#f2f2f2" animate={true}>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            position={"left"}
            contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
            iconStyle={{ background: "#f2f2f2", color: "black" }}
            icon={<FaLinux />}
          >
            <h3 style={{ color: "black" }}>Bash Scripting</h3>
            <p style={{ color: "black" }}>
              Scripting for automation and managing server configurations.
            </p>
            <p style={{ color: "black" }}>
              Developing CI/CD pipelines and deployment scripts.
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
        <VerticalTimeline lineColor="#f2f2f2" animate={true}>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            position={"right"}
            contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
            iconStyle={{ background: "#f2f2f2", color: "black" }}
            icon={<SiPhp />}
          >
            <h3 style={{ color: "black" }}>PHP</h3>
            <h5 style={{ color: "grey", fontSize: "1rem", marginTop: "5px" }}>
              Laravel
            </h5>
            <p style={{ color: "black" }}>
              Secure web development and building custom CMS platforms.
            </p>
            <p style={{ color: "black" }}>
              API creation, performance optimization, and integrations.
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
        <VerticalTimeline lineColor="#f2f2f2" animate={true}>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            position={"left"}
            contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
            iconStyle={{ background: "#f2f2f2", color: "black" }}
            icon={<GrStorage />}
          >
            <h3 style={{ color: "black" }}>Database Management</h3>
            <h5 style={{ color: "grey", fontSize: "1rem", marginTop: "5px" }}>
              MySQL & NoSQL
            </h5>

            <p style={{ color: "black" }}>
              Database design, schema management, and optimization.
            </p>
            <p style={{ color: "black" }}>
              Skilled in working with both relational and NoSQL databases.
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
        <VerticalTimeline lineColor="#f2f2f2" animate={true}>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            position={"right"}
            contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
            iconStyle={{ background: "#f2f2f2", color: "black" }}
            icon={<FaJava />}
          >
            <h3 style={{ color: "black" }}>Java</h3>

            <p style={{ color: "black" }}>
              Experienced in building desktop and Android applications using
              Java.
            </p>
            <p style={{ color: "black" }}>
              Skilled in using Android Studio and Gradle for efficient
              development and deployment.
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
        <VerticalTimeline lineColor="#f2f2f2" animate={true}>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            position={"left"}
            contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
            iconStyle={{ background: "#f2f2f2", color: "black" }}
            icon={<TbBinaryTree />}
          >
            <h3 style={{ color: "black" }}>C++</h3>

            <p style={{ color: "black" }}>
              Proficient in developing high-performance software and
              system-level applications.
            </p>
            <p style={{ color: "black" }}>
              Strong foundation in algorithms, data structures, and
              multi-threading.
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </Container>
    </section>
  );
};
