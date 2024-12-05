import React from 'react';
import { Nav } from './Navbar'; // Replace with the actual path to Nav.js

function EventsComponent() {
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

  const events = [
    {
      year: 2025,
      events: [
        {
          title: "Pending",
          speaker: "Placeholder description for 2025 events",
          month: "January",
          link: "#"
        }
      ]
    },
    {
      year: 2024,
      events: [
        {
          title: "Elevating Health Awareness through Personalized Multimodal Sensing",
          speaker: "Mohammad Malekzadeh (Nokia Bell Labs)",
          month: "November"
        },
        {
          title: "Anonymity, Consent, and Other Noble Lies: An Empirical Study of the Data Economy",
          speaker: "Joel Reardon (University of Calgary)",
          month: "October"
        },
        {
          title: "The Quest for a Small and Trustworthy TCB",
          speaker: "Ardalan Amiri Sani (UC Irvine)",
          month: "October"
        }
      ]
    }
  ];

  return (
    <div>
      <Nav {...navigationData} />
      <div id="Events" className="bg-secondary py-5 px-5">
        <div className="container">
          <h1 className="text-primary fw-bold">Events</h1>

          {events.map((yearData) => (
            <div key={yearData.year}>
              <h2 className="text-primary">{yearData.year}</h2>
              {yearData.events.map((event, index) => (
                <div key={index} className="mb-3">
                  <h4 className="text-primary">{event.title}</h4>
                  <p className="text-dark">{event.speaker}</p>
                  <p className="text-dark">{event.month}</p>
                  <a href={event.link} className="btn btn-primary">Learn More</a>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EventsComponent;