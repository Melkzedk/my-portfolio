import React from 'react';
import { Container } from 'react-bootstrap';
import { FaFacebook, FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#212529', color: '#fff', padding: '20px 0' }}>
      <Container className="text-center">
        <div className="mb-3">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-light mx-3">
            <FaFacebook size={24} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-light mx-3">
            <FaTwitter size={24} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-light mx-3">
            <FaLinkedin size={24} />
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-light mx-3">
            <FaGithub size={24} />
          </a>
        </div>
        <p className="mb-0">&copy; {new Date().getFullYear()} MelkTech. All rights reserved.</p>
      </Container>
    </footer>
  );
};

export default Footer;
