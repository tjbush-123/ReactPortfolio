// Importing necessary modules and components
import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "../style/Resume.css";


// Resume component
function Resume() {
  return (
    <section id="resume" className="resume-margin">
      <Container className="resume-section">
        <Row>
          <Col className="text-center">
            <h1>Resume</h1>
            <hr className="star-primary" />
            <Button variant="dark" href={PDF} download>
              Download Resume
            </Button>
          </Col>
        </Row>
        <Row>
          <Col>
          <hr className="star-secondary" />
          <h3>Professional Summary</h3>
          <div className="resume-item">
              <h2>Front end Proficiencies</h2>
          <ul>
            <li>HTML</li>
            <li>Javascript</li>
            <li>Bootstrap</li>
            <li>JQuery</li>
            <li>Responsive Design</li>
            <li>React</li>
            <li>CSS</li>
          </ul>
              <h2>Back end Proficiencies</h2>
          <ul>
            <li>Rest</li>
            <li>MySQL</li>
            <li>Express</li>
            <li>APIs</li>
            <li>SQL</li>
            <li>Sequelize</li>
            <li>Node</li>
          </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
// Export Resume
export default Resume;
