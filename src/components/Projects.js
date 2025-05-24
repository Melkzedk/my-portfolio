import React from 'react';
import { FaTrain, FaUserMd, FaVoteYea, FaTools, FaParking, FaCalendarCheck, FaHotel } from 'react-icons/fa';

const projects = [
  {
    name: 'Train Ticket Booking System',
    tech: 'React, Node.js, MongoDB',
    icon: <FaTrain className="text-success display-6 mb-3" />,
    github: 'https://github.com/Melkzedk/Train-Ticket-System',
  },
  {
    name: 'Doctor Dashboard',
    tech: 'React, Node.js, MongoDB',
    icon: <FaUserMd className="text-danger display-6 mb-3" />,
    github: 'https://github.com/itfunda123/Doctor-Appointment-System',
  },
  {
    name: 'Voting System',
    tech: 'React, Express.js, MongoDB',
    icon: <FaVoteYea className="text-primary display-6 mb-3" />,
    github: 'https://github.com/Melkzedk/Voting-system',
  },
  {
    name: 'Vehicle Maintenance Tracker',
    tech: 'React, Node.js, MongoDB',
    icon: <FaTools className="text-warning display-6 mb-3" />,
    github: 'https://github.com/Melkzedk/vehicle-maintenance-tracker',
  },
  {
    name: 'Parking Spot Finder',
    tech: 'React, Express, MongoDB, Map API',
    icon: <FaParking className="text-info display-6 mb-3" />,
    github: 'https://github.com/itfunda123/Parking-Finder',
  },
  {
    name: 'Leave Management System',
    tech: 'React, Node.js, MongoDB',
    icon: <FaCalendarCheck className="text-secondary display-6 mb-3" />,
    github: 'https://github.com/Melkzedk/Leave-Management-System',
  },
  {
    name: 'Airbnb-like System',
    tech: 'React, Bootstrap, MongoDB',
    icon: <FaHotel className="text-purple display-6 mb-3" />,
    github: 'https://github.com/Melkzedk/AirBnb-System',
  },
];

function Projects() {
  return (
    <section id="projects" className="py-5 bg-light">
      <div className="container">
        <h2 className="text-center mb-5">Projects</h2>
        <div className="row">
          {projects.map((proj, index) => (
            <div className="col-md-6 col-lg-4 mb-4" key={index}>
              <div className="card h-100 text-center shadow-sm border-0">
                <div className="card-body d-flex flex-column align-items-center">
                  {proj.icon}
                  <h5 className="card-title mt-2">{proj.name}</h5>
                  <p className="card-text text-muted"><strong>Tech:</strong> {proj.tech}</p>
                  <a
                    href={proj.github}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-outline-dark btn-sm mt-auto w-100"
                  >
                    View on GitHub
                  </a>
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
