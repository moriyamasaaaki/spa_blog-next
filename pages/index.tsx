import BaseLayout from "../components/layouts/BaseLayout";
import { Container, Row, Col } from "reactstrap";
import Typed from "react-typed";

const ROLES = [
  "Developer",
  "Tech Lover",
  "Team Player",
  "Course Creator",
  "React.js",
  "Angular",
];
const Index = () => {
  return (
    <BaseLayout className="cover">
      <div className="main-section">
        <Container>
          <Row>
            <Col md="6">
              <div className="hero-section">
                <div className={`flipper`}>
                  <div className="back">
                    <img className="image" src="/images/IMG_6179.PNG" />
                    <div className="shadow-custom">
                      <div className="shadow-inner"> </div>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
            <Col md="6" className="hero-welcome-wrapper">
              <div className="hero-welcome-text">
                <h1>
                  Welcome to the portfolio website of Masaaaki Moriya. This is
                  the first project created with Next.js.
                </h1>
              </div>
              <Typed
                loop
                typeSpeed={70}
                backSpeed={70}
                strings={ROLES}
                backDelay={1000}
                loopCount={0}
                showCursor
                className="self-typed"
                cursorChar="|"
              />
              <div className="hero-welcome-bio">
                <h1>Let's take a look on my work.</h1>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </BaseLayout>
  );
};

export default Index;

