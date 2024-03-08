export default function AboutMe() {
  return (
    <section id="AboutMe" className="about--section">
      <div className="about--section--img">
        <img src="./img/profile.png" alt="About Me" />
      </div>
      <div className="hero--section--content--box about--section--box">
        <div className="hero--section--content">
          <p className="section--title">About</p>
          {/* <h1 className="skills-section--heading">About Me</h1> */}
          <p className="hero--section-description">
          Passionate Masters student in Computer Science with a knack for software development and a hunger for innovation.
          </p>
          <p className="hero--section-description">
          With a solid grasp of both frontend and backend development, I utilize a variety of technologies including JavaScript, Python, React, Node.js, MongoDB, AWS, and more. Experienced in CI/CD and Agile methodologies, I've streamlined development cycles, optimized databases, and crafted user-centric features to foster collaboration.
          </p>
          <p className="hero--section-description">         
          Eager to soak up new tech, I thrive in collaborative spaces, driving towards solutions for complex challenges. Let's connect to ignite innovation and propel projects to new heights!
          </p>
        </div>
      </div>
    </section>
  );
}
