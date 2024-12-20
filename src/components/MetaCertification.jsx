import colorSharp from "../assets/img/color-sharp.png";
import Certificate from "../assets/img/Certificate.png";
import GoogleCertificate from "../assets/img/GoogleCertificate.png";

export const MetaCertification = () => {
  return (
    <section className="skill" id="skills">
      <img
        className="background-image-left"
        src={colorSharp}
        alt="Background"
      />
      <a
        href="https://www.coursera.org/account/accomplishments/specialization/certificate/4VQ9V3B6TDRQ"
        className="meta-container"
        target="_blank"
      >
        <img
          src={Certificate}
          alt="Meta Certificate"
          className="w-[80%] rounded-lg hover:opacity-80 duration-150 ease-linear"
        />
      </a>
      <a
        href="https://www.coursera.org/account/accomplishments/specialization/certificate/2OF8LBAHFQDD"
        className="meta-container"
        target="_blank"
      >
        <img
          src={GoogleCertificate}
          alt="Google Certificate"
          className="w-[80%] mt-10 rounded-lg hover:opacity-80 duration-150 ease-linear"
        />
      </a>
    </section>
  );
};
