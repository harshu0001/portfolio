import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img11.png";
import projImg2 from "../assets/img/project-img22.png";
import projImg3 from "../assets/img/project-img34.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Solar System",
      description: "Exploring the Universe",
      imgUrl: projImg1,
    },
    {
      title: "Cadence",
      description: "Your Sound, Your Way!",
      imgUrl: projImg2,
    },
    {
      title: "De SchoolMate",
      description: "Your Academic Helper",
      imgUrl: projImg3,
      
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Explore the cosmos with my 3D solar system visualization, built using Three.js. Immerse yourself in a stunning, interactive experience of our solar system. For music lovers, I've created a dynamic music app using React. This app offers a seamless way to discover, play, and manage your favorite tunes.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
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
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
