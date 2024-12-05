import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import { faEnvelope, faWikipediaW, faGoogleScholar, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { Card } from './Work'; // Assuming the draft components are in a separate file
import { Nav } from './Navbar'; // Replace with the actual path to Nav.js

function PeopleComponent() {
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
      <div id="people" className="bg-secondary py-5 px-5">
        <div className="container">
          <h1 className="text-primary fw-bold">People</h1>

          {/* Faculty Section */}
          <section>
            <h2>Faculty</h2>
            <div className="d-flex flex-row flex-wrap justify-content-between">
              {/* Add multiple Faculty cards here */}
              <Card
                image="path/to/faculty_image.jpg" // Replace with the image path
                title="Dr Anna Maria Mandalari"
                description="Lecturer in Communications & Networking"
                content={
                  <p style={{ color: 'black' }}>
                    Anna is a Lecturer in Communications & Networking at the Department of of Electronic & Electrical Engineering at University College London...
                  </p>
                }
                links={[
                  { link: 'mailto:h.haddadi@imperial.ac.uk', icon: ['fas', 'envelope'] },
                  { link: 'https://www.wikipedia.org/wiki/Hamed_Haddadi', icon: ['fab', 'wikipedia-w'] },
                  { link: 'https://scholar.google.com/citations?user=...' /* Enter Google Scholar profile */, icon: ['fab', 'google-scholar'] },
                  { link: 'https://www.linkedin.com/in/hamed-haddadi-a1199023/', icon: ['fab', 'linkedin'] },
                  { link: 'https://twitter.com/...' /* Enter Twitter profile */, icon: ['fab', 'twitter'] },
                ]}
              />
              { }
              {/* Add more Faculty cards with similar structure */}
              <div className="d-flex flex-row flex-wrap justify-content-between">
                {/* Add multiple Faculty cards here */}
                <Card
                  image="path/to/faculty_image.jpg" // Replace with the image path
                  title="Dr Anna Maria Mandalari"
                  description="Lecturer in Communications & Networking"
                  content={
                    <p style={{ color: 'black' }}>
                      Anna is a Lecturer in Communications & Networking at the Department of of Electronic & Electrical Engineering at University College London...
                    </p>
                  }
                  links={[
                    { link: 'mailto:h.haddadi@imperial.ac.uk', icon: ['fas', 'envelope'] },
                    { link: 'https://www.wikipedia.org/wiki/Hamed_Haddadi', icon: ['fab', 'wikipedia-w'] },
                    { link: 'https://scholar.google.com/citations?user=...' /* Enter Google Scholar profile */, icon: ['fab', 'google-scholar'] },
                    { link: 'https://www.linkedin.com/in/hamed-haddadi-a1199023/', icon: ['fab', 'linkedin'] },
                    { link: 'https://twitter.com/...' /* Enter Twitter profile */, icon: ['fab', 'twitter'] },
                  ]}
                />
                { }
                {/* Add more Faculty cards with similar structure */}
              </div>
              <div className="d-flex flex-row flex-wrap justify-content-between">
                {/* Add multiple Faculty cards here */}
                <Card
                  image="path/to/faculty_image.jpg" // Replace with the image path
                  title="Dr Anna Maria Mandalari"
                  description="Lecturer in Communications & Networking"
                  content={
                    <p style={{ color: 'black' }}>
                      Anna is a Lecturer in Communications & Networking at the Department of of Electronic & Electrical Engineering at University College London...
                    </p>
                  }
                  links={[
                    { link: 'mailto:h.haddadi@imperial.ac.uk', icon: ['fas', 'envelope'] },
                    { link: 'https://www.wikipedia.org/wiki/Hamed_Haddadi', icon: ['fab', 'wikipedia-w'] },
                    { link: 'https://scholar.google.com/citations?user=...' /* Enter Google Scholar profile */, icon: ['fab', 'google-scholar'] },
                    { link: 'https://www.linkedin.com/in/hamed-haddadi-a1199023/', icon: ['fab', 'linkedin'] },
                    { link: 'https://twitter.com/...' /* Enter Twitter profile */, icon: ['fab', 'twitter'] },
                  ]}
                />
                { }
                {/* Add more Faculty cards with similar structure */}
              </div>
            </div>
          </section>

          {/* Repeat the same structure for Research Staff, Graduate Students, and Alumni sections */}

          <section>
            <h2>Research Staff</h2>
            {/* Add multiple Research Staff cards here */}
            <div className="d-flex flex-row flex-wrap justify-content-between">
              {/* Add multiple Faculty cards here */}
              <Card
                image="path/to/faculty_image.jpg" // Replace with the image path
                title="Dr Anna Maria Mandalari"
                description="Lecturer in Communications & Networking"
                content={
                  <p style={{ color: 'black' }}>
                    Anna is a Lecturer in Communications & Networking at the Department of of Electronic & Electrical Engineering at University College London...
                  </p>
                }
                links={[
                  { link: 'mailto:h.haddadi@imperial.ac.uk', icon: ['fas', 'envelope'] },
                  { link: 'https://www.wikipedia.org/wiki/Hamed_Haddadi', icon: ['fab', 'wikipedia-w'] },
                  { link: 'https://scholar.google.com/citations?user=...' /* Enter Google Scholar profile */, icon: ['fab', 'google-scholar'] },
                  { link: 'https://www.linkedin.com/in/hamed-haddadi-a1199023/', icon: ['fab', 'linkedin'] },
                  { link: 'https://twitter.com/...' /* Enter Twitter profile */, icon: ['fab', 'twitter'] },
                ]}
              />
              { }
              {/* Add more Faculty cards with similar structure */}
            </div>
          </section>

          <section>
            <h2>Graduate Students</h2>
            <div className="d-flex flex-row flex-wrap justify-content-between">
              {/* Add multiple Faculty cards here */}
              <Card
                image="path/to/faculty_image.jpg" // Replace with the image path
                title="Dr Anna Maria Mandalari"
                description="Lecturer in Communications & Networking"
                content={
                  <p style={{ color: 'black' }}>
                    Anna is a Lecturer in Communications & Networking at the Department of of Electronic & Electrical Engineering at University College London...
                  </p>
                }
                links={[
                  { link: 'mailto:h.haddadi@imperial.ac.uk', icon: ['fas', 'envelope'] },
                  { link: 'https://www.wikipedia.org/wiki/Hamed_Haddadi', icon: ['fab', 'wikipedia-w'] },
                  { link: 'https://scholar.google.com/citations?user=...' /* Enter Google Scholar profile */, icon: ['fab', 'google-scholar'] },
                  { link: 'https://www.linkedin.com/in/hamed-haddadi-a1199023/', icon: ['fab', 'linkedin'] },
                  { link: 'https://twitter.com/...' /* Enter Twitter profile */, icon: ['fab', 'twitter'] },
                ]}
              />
              { }
              {/* Add more Faculty cards with similar structure */}
            </div>
            {/* Add multiple Graduate Students cards here */}
          </section>

          <section>
            <h2>Alumni</h2>
            {/* Add multiple Alumni cards here */}
            <div className="d-flex flex-row flex-wrap justify-content-between">
              {/* Add multiple Faculty cards here */}
              <Card
                image="path/to/faculty_image.jpg" // Replace with the image path
                title="Dr Anna Maria Mandalari"
                description="Lecturer in Communications & Networking"
                content={
                  <p style={{ color: 'black' }}>
                    Anna is a Lecturer in Communications & Networking at the Department of of Electronic & Electrical Engineering at University College London...
                  </p>
                }
                links={[
                  { link: 'mailto:h.haddadi@imperial.ac.uk', icon: ['fas', 'envelope'] },
                  { link: 'https://www.wikipedia.org/wiki/Hamed_Haddadi', icon: ['fab', 'wikipedia-w'] },
                  { link: 'https://scholar.google.com/citations?user=...' /* Enter Google Scholar profile */, icon: ['fab', 'google-scholar'] },
                  { link: 'https://www.linkedin.com/in/hamed-haddadi-a1199023/', icon: ['fab', 'linkedin'] },
                  { link: 'https://twitter.com/...' /* Enter Twitter profile */, icon: ['fab', 'twitter'] },
                ]}
              />
              { }
              {/* Add more Faculty cards with similar structure */}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default PeopleComponent;