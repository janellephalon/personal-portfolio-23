import Carousel from "react-multi-carousel";
import { Container, Row, Col } from "react-bootstrap";
import "react-multi-carousel/lib/styles.css";

import meter1 from "../assets/images/meter1.svg";
import colorSharp from "../assets/images/color-sharp.png";


export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
      <Container>
        <Row>
          <Col>
            <div className="skill-bx">
              <h2>
                Skills
              </h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ligula ex, facilisis ut luctus eu, placerat in nunc. Fusce eu efficitur magna.
              </p>
              <Carousel responsive={responsive} infinite={true} className="skill-slider">
                <div className="item">
                  <img src={meter1} alt="Image"/>
                  <h5>Frontend Development</h5>
                </div>

                <div className="item">
                  <img src={meter1} alt="Image"/>
                  <h5>Backend Development</h5>
                </div>

                <div className="item">
                  <img src={meter1} alt="Image"/>
                  <h5>Technical Writing</h5>
                </div>

                <div className="item">
                  <img src={meter1} alt="Image"/>
                  <h5>Communication Skills</h5>
                </div>
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>

      <img className="background-image-left" src={colorSharp} />
    </section>
  )
}


