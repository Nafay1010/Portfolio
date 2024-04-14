import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import mypic from "../assets/img/mypic.jpg";
import { ArrowRightCircle } from "react-bootstrap-icons";
import TrackVisibility from "react-on-screen";

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(100 - Math.random() * 100);
  const period = 1000;

  useEffect(() => {
    let toRotate = [
      "Next.js Web Developer.",
      "Laravel Web Developer.",
      "UI/UX Designer.",
      "Database Administrator.",
    ];
    let ticker = setInterval(() => {
      let i = loopNum % toRotate.length;
      let fullText = toRotate[i];
      let updatedText = isDeleting
        ? fullText.substring(0, text.length - 1)
        : fullText.substring(0, text.length + 1);

      setText(updatedText);

      if (isDeleting) {
        setDelta((prevDelta) => prevDelta / 2);
      }

      if (!isDeleting && updatedText === fullText) {
        setIsDeleting(true);
        setDelta(period);
      } else if (isDeleting && updatedText === "") {
        setIsDeleting(false);
        setLoopNum((prevLoopNum) => prevLoopNum + 1);
        setDelta(200);
      } else {
      }
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text, delta, isDeleting, loopNum]);

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__zoomIn" : ""
                  }
                >
                  <div className="image-container">
                    <img src={mypic} className="my-picture" alt="Profile pic" />
                  </div>
                </div>
              )}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <span className="mt-3 tagline">Whats Up!</span>
                  <h1>
                    My name is <span className="name">Abdul Nafay</span> and I
                    am a{" "}
                    <span
                      className="txt-rotate"
                      dataPeriod="1000"
                      data-rotate='["AI Based Web Designer/Developer", "Mobile App Designer/Developer", "Data Analyst", "UI/UX Designer"]'
                    >
                      <span className="wrap">{text}</span>
                    </span>
                  </h1>
                  <a href="#connect">
                    <button>
                      Contact me! <ArrowRightCircle size={25} />
                    </button>
                  </a>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
