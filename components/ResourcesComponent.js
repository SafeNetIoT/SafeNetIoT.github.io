import React from 'react';
import { Nav } from './Navbar'; // Replace with the actual path to Nav.js


function ResourcesComponent() {
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
  return (
    <div>
      <Nav {...navigationData} />
      <div id="Resources" className="bg-secondary py-5 px-5">
        <div className="container">
          <h1 className="text-primary fw-bold">Resources</h1>

          <p className="text-black">INSERT DESCRIPTION for resources section here.</p>

          <div className="row">
            <div className="col-sm-6">
              <h2 className="text-primary fw-bold">Teaching Resources</h2>
              <ul>
                <li>
                  <a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer" className="text-black">
                    React Documentation
                  </a>
                </li>
                <li>
                  <a href="https://nextjs.org/" target="_blank" rel="noopener noreferrer" className="text-black">
                    Next.js Documentation
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-sm-6">
              <h2 className="text-primary fw-bold">Learning Resources</h2>
              <ul>
                <li>
                  <a href="https://freecodecamp.org/" target="_blank" rel="noopener noreferrer" className="text-black">
                    freeCodeCamp
                  </a>
                </li>
                <li>
                  <a href="https://www.coursera.org/" target="_blank" rel="noopener noreferrer" className="text-black">
                    Coursera
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResourcesComponent;