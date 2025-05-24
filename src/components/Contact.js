import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';

function Contact() {
  return (
    <section id="contact" className="py-5" style={{ backgroundColor: '#f8f9fa' }}>
      <Container>
        <h2 className="text-center mb-4">Contact Me</h2>
        <Row className="justify-content-center">
          <Col md={6} lg={4}>
            <Card className="text-center shadow-sm mb-4">
              <Card.Body>
                <FaEnvelope size={30} className="mb-3 text-primary" />
                <Card.Title>Email</Card.Title>
                <Card.Text>
                  <a href="mailto:melkywafula29@gmail.com" className="text-decoration-none text-dark">
                    melkywafula29@gmail.com
                  </a>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col md={6} lg={4}>
            <Card className="text-center shadow-sm mb-4">
              <Card.Body>
                <FaLinkedin size={30} className="mb-3 text-primary" />
                <Card.Title>LinkedIn</Card.Title>
                <Card.Text>
                  <a
                    href="https://www.linkedin.com/in/melkzedek-wafula-4a8b46203/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-decoration-none text-dark"
                  >
                    linkedin.com/in/melkzedek-wafula
                  </a>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col md={6} lg={4}>
            <Card className="text-center shadow-sm mb-4">
              <Card.Body>
                <FaGithub size={30} className="mb-3 text-dark" />
                <Card.Title>GitHub</Card.Title>
                <Card.Text>
                  <a
                    href="https://github.com/Melkzedk/Melkzedk"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-decoration-none text-dark"
                  >
                    github.com/Melkzedk
                  </a>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Contact;
