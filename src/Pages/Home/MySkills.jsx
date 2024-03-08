import data from "../../data/index.json";

export default function MySkills() {
  return (
    <section className="skills--section" id="mySkills">
      <div className="portfolio--container">
        <p className="section--title">My Skills</p>
        <h2 className="skills--section--heading">Experience</h2>
      </div>
      <div className="skills--section--container">
        {data?.skills?.map((item, index) => (
          <div key={index} className="skills--section--card">
             <div className="skills--section--card--content">
              <h3 className="skills--section--title">{item.title}</h3>
              <h5 className="skills--section--period">{item.period}</h5>
              <p className="skills--section--description" style={{ whiteSpace: 'pre-line' }}>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
      </section>
  );
}
