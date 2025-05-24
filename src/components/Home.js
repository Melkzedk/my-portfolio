import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import image1 from '../Assets/image1.jpg';

const Home = () => {
  return (
    <section
      id="home"
      style={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #e9ecef, #f8f9fa)',
        paddingTop: '80px',
      }}
    >
      <Container>
        <Row className="align-items-center">
          {/* Left Side: Text */}
          <Col md={6}>
            <h1 className="display-5 fw-bold text-dark">Hi, I'm MELKZEDEK WAFULA</h1>
            <p className="lead text-muted mt-3">
              I build modern, scalable, and responsive websites and applications that make a difference.
            </p>
            <p className="text-muted">
              Whether you need a sleek frontend, powerful backend, or a full-stack solution — I'm ready to help bring your vision to life with clean code and creative design.
            </p>
            <div className="d-flex gap-3 mt-4">
              <Button variant="primary" size="lg" href="#projects">
                View Projects
              </Button>
              <Button variant="outline-dark" size="lg" href="#contact">
                Contact Me
              </Button>
            </div>
          </Col>

          {/* Right Side: Image + Name/Title */}
          <Col md={6} className="text-center mt-5 mt-md-0">
            <img
              src={image1}
              alt="Web Developer"
              className="img-fluid rounded-circle shadow mb-3"
              style={{
                width: '220px',
                height: '220px',
                objectFit: 'cover',
                border: '5px solid #dee2e6',
              }}
            />
            <div className="text-primary fs-1">Full-Stack Web Developer</div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Home;
