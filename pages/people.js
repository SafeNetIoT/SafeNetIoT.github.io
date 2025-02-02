import React, { Fragment } from 'react';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { Nav } from '../components/Navbar';
import { SEO, navigation } from '../config/config';

// Define people data with categories
const people = {
  staff: [
    {
      name: "Anna Maria Mandalari",
      description: "Anna Maria Mandalari works as Assistant Professor at University College London (UCL). She is affiliated with the Electronic and Electrical Engineering Department, where she is the Director of the SafeNetIoT laboratory and the Director of the Internet Engineering/ Telecommunications MSc/ MRes Programme. ",
      image: "/images/people/anna.jpeg",
      links: [
        { name: "linkedin", url: "https://linkedin.com/in/anna-maria-mandalari" },
        { name: "google", url: "https://scholar.google.com/citations?user=example" },
      ],
    },
  ],
  researchers: [
    {
      name: "Baraa Zieni",
      description: "Dr Zieni (B.Eng., M.Eng, Ph.D. ) is a Senior Research Fellow in Computer Science and Engineering, joint the Department of Electrical & Electronic Engineering in UCL in 2024. Her current research is focus on homecare sensing technologies their communication, control system and privacy challenges.",
      image: "/images/people/baraa.jpeg",
      links: [
        { name: "linkedin", url: "https://linkedin.com/in/baraa-zieni" },
      ],
    },
    {
      name: "Aurelio Loris Canino",
      description: "Visiting researcher.",
      image: "/images/people/aurelio.jpeg",
      links: [
        { name: "google", url: "https://scholar.google.com/citations?user=example" },
      ],
    },
  ],
  phdStudents: [
    {
      name: "Mohammad Alhussan",
      description: "Research focus: The Medical Internet of Things",
      image: "/images/people/mohammad.jpeg",
      links: [],
    },
    {
      name: "Andrew Losty",
      description: "Research focus: Smart home privacy",
      image: "/images/people/andrew.jpg",
      links: [],
    },
    {
      name: "Ammara Yasin",
      description: "Research focus: Circumventing Telecommunication Shutdowns",
      image: "/images/people/ammara.jpg",
      links: [],
    },
  ],
};

const PeoplePage = () => {
  return (
    <Fragment>
      <Header seo={SEO} />
      <Nav title={navigation.name} links={navigation.links} />
      <div className="d-flex flex-column justify-content-between bg-secondary min-vh-100">
        <div className="py-5 px-5 container">
          <h1 className="text-primary fw-bold text-left mb-5">People</h1>

          <div className="row justify-content-left mb-5">
            <div className="col-12 col-md-10 col-lg-8">
              <p className="text-dark lead text-left">
                The members of SafeNetIot conduct cutting-edge research into all aspects of IoT Security and Privacy.
              </p>
            </div>
          </div>
          {/* Staff Section */}
          <h2 className="text-primary mb-4">Staff</h2>
          <div className="row mb-5">
            {people.staff.map((person, index) => (
              <PersonCard key={index} person={person} />
            ))}
          </div>

          {/* Researchers Section */}
          <h2 className="text-primary mb-4">Research Staff</h2>
          <div className="row mb-5">
            {people.researchers.map((person, index) => (
              <PersonCard key={index} person={person} />
            ))}
          </div>

          {/* PhD Students Section */}
          <h2 className="text-primary mb-4">PhD Students</h2>
          <div className="row">
            {people.phdStudents.map((person, index) => (
              <PersonCard key={index} person={person} />
            ))}
          </div>
        </div>
        <Footer />
      </div>
    </Fragment>
  );
};

// Reusable Person Card Component
const PersonCard = ({ person }) => (
  <div className="col-md-6 col-lg-4 mb-4">
    <div className="card h-100">
      <img
        src={person.image}
        alt={person.name}
        className="card-img-top"
        style={{ height: '300px', objectFit: 'cover' }}
      />
      <div className="card-body">
        <h5 className="card-title text-primary">{person.name}</h5>
        <p className="card-text text-primary">{person.description}</p>
        <div className="d-flex justify-content-start">
          {person.links.map((link, i) => (
            <a
              key={i}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="me-3"
            >
              <i className={`bi bi-${link.name} text-primary`} style={{ fontSize: '1.5rem' }}></i>
            </a>
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default PeoplePage;