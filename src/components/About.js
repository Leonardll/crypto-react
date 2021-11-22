import { FaLayerGroup } from "react-icons/fa";
import { BiWindowAlt, BiTerminal } from "react-icons/bi";

const data = [
  {
    id: "1",
    title: "Fully Responsive",
    text: "This theme will look great on any device, no matter the size!",
  },
  {
    id: "2",
    title: "Bootstrap 5 Ready",
    text: "Featuring the latest build of the new Bootstrap 5 framework!",
  },
  {
    id: "3",
    title: "Easy to Use",
    text: "Ready to use with your own content, or customize the source files!",
  },
];

const icons = [BiWindowAlt, FaLayerGroup, BiTerminal];
function About() {
  return (
    <section className="features-icons text-center" id="about">
      <div className="container">
        <div className="row">
          {data.map((item, index) => {
            const Icon = icons[index];

            return (
              <div className="col-lg-4" key={index}>
                <div className="features-icons-item mx-auto mb-lg-0 mb-lg-3">
                  <div
                    key={item.id}
                    className="features-icons-icon d-flex text-primary"
                  >
                    <Icon key={index} size={70} className="m-auto" />
                  </div>
                  <h3>{item.title}</h3>
                  <p className="lead mb-0">{item.text}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default About;
