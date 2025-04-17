import data from "../../data/index.json";

export default function MyPortfolio() {
  return (
    <section className="about--section" id="AboutMe">
      <div className="about--container-box">
        <div className="about--container">
          <h2 className="section--heading">My Experience</h2>
        </div>
        <div>

        </div>

      </div>
      <div className="about--section--container">
        {data?.exp?.map((item, index) => (
          <div key={index} className="about--section--card">

            <div className="about--section--card--content">
              <div >
                <div className="title-date-row">
                  <h4 className="about--section--title">{item.title}</h4>
                  <h4 className="about--section--date">{item.date}</h4>
                </div>
                <h4 className="about--section--position">{item.position}</h4>
                {/* <p className="text-md">{item.position}</p> */}
                <p className="text-md">{item.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

