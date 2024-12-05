import React from 'react';
import { Nav } from './Navbar'; // Replace with the actual path to Nav.js
import { Projects, Card } from './Work'; // Update path to your components

function ResearchComponent() {
  const navigationData = {
    title: "SafeNet IoT", // Customize with your application title
    links: [
      { title: "People", link: "/people" },
      { title: "Research", link: "/research" },
      { title: "Publications", link: "/publications" },
      { title: "Events", link: "/events" },
      { title: "Lab", link: "/lab" },
      { title: "Resources", link: "/resources" },
      { title: "Contact", link: "/contact" }
    ],
  };

  const researchProjects = [
    {
      title: "Project Title 1",
      description: "A brief description of the project.",
      image: "path/to/image1.jpg", // Add image paths
      content: "Some additional details about the project.",
    },
    {
      title: "Project Title 2",
      description: "Another project description.",
      image: "path/to/image2.jpg", // Add image paths
    },
    // Add more projects 
  ];

  return (
    <div style={{ backgroundColor: '#365b6d' }}>
      <Nav {...navigationData} />
      <div className="container">
        <Projects title="Our Research " cards={researchProjects} />
      </div>
    </div>
  );
}

export default ResearchComponent;