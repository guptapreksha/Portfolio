export default function HeroSection() {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Hey, I'm Preksha</p>
          <h1 className="hero--section--title">
            <span className="hero--section-title--color">Frontend</span>{" "}
            <br />
            Developer
          </h1>
          <p className="hero--section-description">
          I specialize in crafting seamless, high-performance web applications with React.js, Web3 integration, and modern UI/UX design. 
           Passionate about problem-solving and innovation, I am always eager to learn and adapt to new challenges in the tech world.
          </p>
        </div>
        {/* <button className="btn btn-primary">Get In Touch</button>s */}
      </div>
      {/* <div className="hero--section--img"> */}
        {/* <img src="./img/profile-img.jpg" alt="Hero Section"/> */}
        <img src="./img/hero-img.png" alt="Hero Section"/>
      {/* </div> */}
    </section>
  );
}
