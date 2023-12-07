import colorSharp from "../assets/img/color-sharp.png";

export const MetaCertification = () => {
  return (
    <section className="skill" id="skills">
      <div className="bg-slate-100 rounded-[64px] shadow-xl">
            <div className="meta-container">
              <h1 className="text-blue-950 text-center md:text-5xl text-4xl">
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
