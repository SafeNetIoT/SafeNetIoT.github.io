import React from 'react';
import { Nav } from './Navbar'; // Replace with the actual path to Nav.js

function PublicationsComponent() {
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

  const publications = [
    {
      title: "In Review and Preparation",
      color: "text-primary", // Color for links within this section
      links: [
        { title: "Link 1", href: "https://example.com/link1" },
        { title: "Link 2", href: "https://example.com/link2" },
      ]
    },
    {
      title: "Papers and Presentations in Refereed Conference/Journal Proceedings",
      color: "text-secondary", // Color for links within this section
      years: [
        {
          year: 2025,
          links: [
            { title: "Link 3", href: "https://example.com/link3" },
            { title: "Link 4", href: "https://example.com/link4" },
          ]
        },
        {
          year: 2024,
          links: [
            { title: "Link 3", href: "https://example.com/link3" },
            { title: "Link 4", href: "https://example.com/link4" },
          ]
        }
        // ... more years
      ]
    }
  ];

  return (
    <div>
      <Nav {...navigationData} />
      <div id="publications" className="bg-secondary py-5 px-5">
        <div className="container">
          <h1 className="text-primary fw-bold">Publications</h1>
          <p className="text-black">INSERT DESCRIPTION for publications section here.</p>

          {publications.map((publication) => (
            <div key={publication.title} className="mb-5">
              <div className={`bg-secondary p-3 rounded ${publication.color}`}> {/* Container for first subheading */}
                <h2 className="text-primary fw-bold">{publication.title}</h2>
                {publication.links && (
                  <ul>
                    {publication.links.map((link) => (
                      <li key={link.title}>
                        <a href={link.href} target="_blank" rel="noopener noreferrer" className={publication.color}>
                          {link.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
              {publication.years && (
                <div className={`bg-primary p-3 rounded text-white ${publication.color}`}> {/* Container for second subheading */}
                  {publication.years.map((year) => (
                    <div key={year.year}>
                      <h3 className="text-white">{year.year}</h3>
                      <ul>
                        {year.links.map((link) => (
                          <li key={link.title}>
                            <a href={link.href} target="_blank" rel="noopener noreferrer" className={publication.color}>
                              {link.title}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PublicationsComponent;