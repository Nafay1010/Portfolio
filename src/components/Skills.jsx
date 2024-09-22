import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import colorSharp from "../assets/img/color-sharp.png";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 4,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 770, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="my-5 skill-bx wow zoomIn">
              <h2 className="my-10">Skills</h2>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="owl-carousel owl-theme skill-slider"
              >
                <div className="item">
                  <img src={meter1} alt="Skill 1" />
                  <h5>Full Stack Developer</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="Skill 2" />
                  <h5>AI Developer</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="Skill 3" />
                  <h5>Data Analytics</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="Skill 4" />
                  <h5>Python Automation</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="Skill 5" />
                  <h5>Project & Team Management</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="Skill 6" />
                  <h5>Leadership</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="Skill 7" />
                  <h5>MySQL/NOSQL Database Management</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="Skill 8" />
                  <h5>Graphic Designing</h5>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img
        className="background-image-left"
        src={colorSharp}
        alt="Background"
      />
    </section>
  );
};
