import React from 'react';

const projects = [
  {
    name: 'Train Ticket Booking System',
    tech: 'React, Node.js, MongoDB',
    github: 'https://github.com/yourusername/train-booking',
  },
  {
    name: 'Doctor Dashboard',
    tech: 'React, Node.js, MongoDB',
    github: 'https://github.com/yourusername/doctor-dashboard',
  },
  {
    name: 'Voting System',
    tech: 'React, Express.js, MongoDB',
    github: 'https://github.com/yourusername/voting-system',
  },
  {
    name: 'Vehicle Maintenance Tracker',
    tech: 'React, Node.js, MongoDB',
    github: 'https://github.com/yourusername/vehicle-tracker',
  },
  {
    name: 'Parking Spot Finder',
    tech: 'React, Express, MongoDB, Map API',
    github: 'https://github.com/yourusername/parking-finder',
  },
  {
    name: 'Leave Management System',
    tech: 'React, Node.js, MongoDB',
    github: 'https://github.com/yourusername/leave-management',
  },
  {
    name: 'Kenyan Adult App (Blur & Confirm)',
    tech: 'React, TailwindCSS',
    github: 'https://github.com/yourusername/kenyan-app',
  },
  {
    name: 'Online Learning Platform',
    tech: 'React, Node.js, MongoDB',
    github: 'https://github.com/yourusername/online-learning',
  },
  {
    name: 'Airbnb-like System',
    tech: 'React, Bootstrap, MongoDB',
    github: 'https://github.com/yourusername/airbnb-clone',
  },
];

function Projects() {
  return (
    <section id="projects" className="p-5">
      <h2 className="text-center mb-4">Projects</h2>
      <div className="container">
        <div className="row">
          {projects.map((proj, index) => (
            <div className="col-md-6 mb-4" key={index}>
              <div className="card h-100">
                <div className="card-body">
                  <h5 className="card-title">{proj.name}</h5>
                  <p className="card-text"><strong>Tech:</strong> {proj.tech}</p>
                  <a href={proj.github} target="_blank" rel="noreferrer" className="btn btn-dark">View on GitHub</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
