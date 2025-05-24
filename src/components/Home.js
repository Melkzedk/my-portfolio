import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

const Home = () => {
  return (
    <section id="home" style={{ minHeight: '100vh', background: '#f8f9fa', paddingTop: '80px' }}>
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <h1 className="display-4 fw-bold text-dark">Crafting Elegant Web Solutions</h1>
            <p className="lead text-muted mt-4">
              I specialize in designing and developing responsive, visually compelling websites that drive results. 
              With a strong track record of delivering under pressure and exceeding client expectations, I’m here to turn your vision into a high-end digital experience.
            </p>
            <p className="text-muted">
              Let’s work together to build a website that reflects your brand, engages your audience, and achieves your goals — all within your timeline.
            </p>
            <Button variant="dark" size="lg" href="#projects" className="mt-3">
              View My Work
            </Button>
          </Col>
          <Col md={6}>
            <img
              src="https://source.unsplash.com/600x400/?technology,website"
              alt="Web Design"
              className="img-fluid rounded shadow"
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Home;
