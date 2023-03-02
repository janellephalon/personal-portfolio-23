import { Nav, Tab, Col, Row, Container } from "react-bootstrap";
import { ProjectCard } from "../components/ProjectCard";

// Project Images
import colorSharp2 from "../assets/images/color-sharp2.png";
import proImg1 from "../assets/images/E-Commerce-Backend.png";
import proImg2 from "../assets/images/ideafora.png";
import proImg3 from "../assets/images/Employee-Tracker.png";
import proImg4 from "../assets/images/Note-Taker.png";
import proImg5 from "../assets/images/Speedy-Socials.png";
import proImg6 from "../assets/images/Budget-Tracker.png";

export const Projects = () => {

  const projects = [
    {
      title: "IdeaForA",
      description: "Full Stack Application",
      imgUrl: proImg2,
    },
    {
      title: "E-Commerce Backend",
      description: "Full Stack Application",
      imgUrl: proImg1,
    },
    {
      title: "Speedy Socials",
      description: "Full Stack Application",
      imgUrl: proImg3,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: proImg4,
    },{
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: proImg5,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: proImg6,
    },
  ]

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col>
            <h2>
              Projects
            </h2>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ligula ex, facilisis ut luctus eu, placerat in nunc. Fusce eu efficitur magna.
            </p>
            <Tab.Container if="project-tabs" defaultActiveKey="first">
              <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                  <Nav.Item>
                    <Nav.Link eventKey="first">Tab 1</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="second">Tab 2</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="third">Tab 3</Nav.Link>
                  </Nav.Item>
              </Nav>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <Row>
                    {
                      projects.map((project, index) => {
                        return (
                          <ProjectCard
                            key={index}
                            {...project}
                            />
                        )
                      })
                    }
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  Lorem ipsum
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                  Lorem ipsum
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
};
