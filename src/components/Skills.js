import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaLaptopCode, FaServer, FaDatabase, FaBug } from 'react-icons/fa';

function Skills() {
  return (
    <section id="skills" className="py-5 bg-light">
      <Container>
        <h2 className="text-center mb-5 fw-bold">My Skill Set</h2>
        <Row className="gy-4">
          <Col md={6} lg={3}>
            <Card className="h-100 text-center border-0 shadow-sm">
              <Card.Body>
                <FaLaptopCode size={40} className="mb-3 text-primary" />
                <Card.Title>Frontend</Card.Title>
                <Card.Text>React, HTML, CSS, Bootstrap, TailwindCSS</Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col md={6} lg={3}>
            <Card className="h-100 text-center border-0 shadow-sm">
              <Card.Body>
                <FaServer size={40} className="mb-3 text-success" />
                <Card.Title>Backend</Card.Title>
                <Card.Text>Node.js, PHP</Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col md={6} lg={3}>
            <Card className="h-100 text-center border-0 shadow-sm">
              <Card.Body>
                <FaDatabase size={40} className="mb-3 text-warning" />
                <Card.Title>Database</Card.Title>
                <Card.Text>MongoDB, SQL</Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col md={6} lg={3}>
            <Card className="h-100 text-center border-0 shadow-sm">
              <Card.Body>
                <FaBug size={40} className="mb-3 text-danger" />
                <Card.Title>System Testing</Card.Title>
                <Card.Text>Unit Testing, Integration Testing, Manual Testing</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Skills;
