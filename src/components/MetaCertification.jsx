import colorSharp from "../assets/img/color-sharp.png";

export const MetaCertification = () => {
  return (
    <section className="skill" id="skills">
      <div className="container" style={{background: "#151515", borderRadius: "64px"}}>
            <div className="meta-container">
              <h1 style={{textAlign:"center"}}>
                Front End Meta Certified
              </h1>
              <img src="./Meta-Logo.png" alt="Meta Logo" className="meta-logo"/>
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
