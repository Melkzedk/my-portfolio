import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

function Clients() {
  const clientReferences = [
    {
      name: 'Felix Onyango',
      title: 'Software Engineer',
      email: 'felexonyango02@gmail.com',
      phone: '+254 748 793 263.',
    },
    {
      name: 'Ian Omondi',
      title: 'Developer Mentor',
      email: 'ianokoth289@gmail.com',
      phone: '+254 745 425 621.',
    },
  ];

  return (
    <section id="clients" className="py-5 bg-light">
      <Container>
        <h2 className="text-center mb-5">REFERENCE</h2>
        <Row>
          {clientReferences.map((client, index) => (
            <Col md={6} key={index} className="mb-4">
              <Card className="shadow-sm border-0 h-100">
                <Card.Body>
                  <Card.Title className="text-primary">{client.name}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">{client.title}</Card.Subtitle>
                  <Card.Text>
                    <strong>Email:</strong> <a href={`mailto:${client.email}`}>{client.email}</a><br />
                    <strong>Phone:</strong> <a href={`tel:${client.phone}`}>{client.phone}</a>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default Clients;
