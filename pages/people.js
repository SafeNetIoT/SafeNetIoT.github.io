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
      description: "Mohammad Alhussan is a PhD candidate in Electronic and Electrical Engineering at University College London (UCL), specializing in the cybersecurity of the Internet of Medical Things (IoMT). He holds a Master’s degree in Electrical Engineering from Texas A&M University, with a focus on power electronics, and a Bachelor’s degree in Electrical Engineering from Concordia University, specializing in electronics and systems, both earned with distinction. With extensive experience in engineering and automation for around 9 years, Mohammad has held senior roles at EQUATE Petrochemical Company and MEGlobal Americas, where his expertise encompassed process automation, control system design, industrial instrumentation, and operational technology. He has been also serving as an assistant teacher at the Public Authority for Applied Education and Training in Kuwait, contributing to the development of future engineers. Mohammad's research and innovations have been recognized with numerous accolades, including the Technical Best Presentation Award at APEC 2021 for his work on AC-DC converters and the Best Demo Award at EWSN 2024 for exposing vulnerabilities in BLE-enabled wearable medical devices.",
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
      description: "Ammara (BSc Computer Science, MSc Science, Technology and Society) is undertaking interdisciplinary research at the intersection of Electronic and Electrical Engineering and Science and Technology Studies. This interdisciplinary approach is central to her research, which examines the privacy ans security of methods to circumvent telecommunication shutdownns. Her research unpacks how these methods can contribute to reconfiguring global digital networks.",
      image: "/images/people/ammara.jpg",
      links: [],
    },
    {
      name: "Yuanyuan Zhou",
      description: "Yuanyuan Zhou is a PhD candidate in Electronic and Electrical Engineering(EEE) at University College London (UCL), specializing in Honeypot and Network Security. She holds a Bachelor's degree in Telecommunication Engineering from Sichuan University and a Master's degree in Machine Learning from UCL. Her research interests include the Internet of Things (IoT), privacy&security, machine learning, networking, and distributed systems.",
      image: "/images/people/yuanyuan.png",
      links: [],
    },
  ],
  students: [
    {
      name: "Anna Dixon",
      description: "INSERT",
      image: "/images/people/anna_dixon.jpeg",
      links: [],
    },
    {
      name: "Alex Ciechonski",
      description: "INSERT",
      image: "/images/people/alex.jpeg",
      links: [],
    },
    {
      name: "Lepakshi Venkatraman",
      description: "Lepakshi is an MRes Telecommunications student at University College London (UCL), specializing in IoT security and privacy. She holds a Bachelor of Engineering in Electronics and Telecommunications Engineering from St. Joseph’s College of Engineering, Chennai, where she focused on video steganography with multi-factor authentication, published in IEEE Xplore. Her current research involves analyzing IoT traffic from 2023 onward, uncovering security and privacy risks across devices in the UCL IoT Lab. Her expertise includes network traffic analysis, IoT privacy, and large-scale traffic monitoring.",
      image: "/images/people/lepakshi.jpg",
      links: [],
    },
  ]
};

const PeoplePage = () => {
  return (
    <Fragment>
      <Header seo={SEO} />
      <Nav title={navigation.name} links={navigation.links} />
      <div className="d-flex flex-column justify-content-between bg-secondary min-vh-100">
        <div className="py-5 px-5 container">
          <h1 className="text-primary fw-bold text-left mb-5">People</h1>

          <div className="row justify-content-center mb-5">
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

          {/* Researchers Section */}
          <h2 className="text-primary mb-4">Students</h2>
          <div className="row mb-5">
            {people.students.map((person, index) => (
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