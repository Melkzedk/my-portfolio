import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

function Skills() {
  return (
    <section id="skills" className="py-5 bg-light">
      <Container>
        <h2 className="mb-4">Skills</h2>
        <Row>
          <Col md={4} className="mb-4">
            <Card className="h-100 shadow-sm">
              <Card.Body>
                <Card.Title>Frontend</Card.Title>
                <Card.Text>
                  React, HTML, CSS, Bootstrap, TailwindCSS
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="mb-4">
            <Card className="h-100 shadow-sm">
              <Card.Body>
                <Card.Title>Backend</Card.Title>
                <Card.Text>
                  Node.js, PHP
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="mb-4">
            <Card className="h-100 shadow-sm">
              <Card.Body>
                <Card.Title>Database</Card.Title>
                <Card.Text>
                  MongoDB, SQL
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Skills;
