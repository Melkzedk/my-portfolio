import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function About() {
  return (
    <section id="about" className="py-5 bg-light">
      <Container>
        <Row>
          <Col md={12}>
            <h2 className="mb-4">About Me</h2>
            <p>
              Hello, I’m <strong>Melkzedek Wafula</strong>, a Kenyan-based full-stack web and mobile developer with a passion for creating clean, modern, and efficient applications.
            </p>
            <p>
              I specialize in frontend technologies like <strong>React</strong>, <strong>Bootstrap</strong>, <strong>TailwindCSS</strong>, and backend technologies including <strong>Node.js</strong> and <strong>PHP</strong>. I'm also experienced with both <strong>MongoDB</strong> and <strong>SQL</strong> databases.
            </p>
            <p>
              Over time, I’ve worked on multiple projects, including:
              <ul>
                <li>Train Ticket Booking System</li>
                <li>Leave Management System</li>
                <li>Doctor Appointment Platform</li>
                <li>Airbnb-like Rental System</li>
                <li>Vehicle Maintenance Tracker</li>
                <li>Online Voting Platform</li>
              </ul>
            </p>
            <p>
              I’m results-driven and focused on delivering high-end user experiences within tight deadlines. I value clear communication and professional integrity, which has earned me the trust of collaborators like <strong>Felex Onyango</strong> and <strong>Ian Omondi</strong>.
            </p>
            <p>
              Let’s build something impactful together.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default About;
