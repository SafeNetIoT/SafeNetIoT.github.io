import React from 'react';
import { Nav } from './Navbar'; // Replace with the actual path to Nav.js

function LabComponent() {
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
  }

  return (
    <div>
      <Nav {...navigationData} />
      <div id="Lab" className="bg-secondary py-5 px-5">
        <div className="container">
          <h1 className="text-primary fw-bold">Lab</h1>
          <p>DESCRIPTION HERE.</p>
          <div className="video-container">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/0fg0acuRbUA?si=whABsYVy-sVgbc2S" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LabComponent;