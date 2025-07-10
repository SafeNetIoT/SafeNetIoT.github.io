import React, { Fragment } from 'react';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { Nav } from '../components/Navbar';
import { SEO, navigation } from '../config/config';
import { FaLinkedin, FaGoogle, FaBook } from 'react-icons/fa';


// Define people data with categories
const people = {
  staff: [
    {
      name: "Anna Maria Mandalari",
      description: "Anna Maria Mandalari works as Assistant Professor at University College London (UCL). She is affiliated with the Electronic and Electrical Engineering Department, where she is the Director of the SafeNetIoT laboratory and the Director of the Internet Engineering/ Telecommunications MSc/ MRes Programme. ",
      image: "/images/people/anna.jpeg",
      links: [
        { name: "linkedin", url: "https://linkedin.com/in/anna-maria-mandalari" },
        { name: "google", url: "https://scholar.google.it/citations?user=iASd_SsAAAAJ&hl=it" },
      ],
    },
  ],
  researchers: [
    {
      name: "Aurelio Loris Canino",
      description: "Visiting researcher.",
      image: "/images/people/aurelio.jpeg",
      links: [
        { name: "linkedin", url: "https://www.linkedin.com/in/aurelio-loris-canino-10b07028a/?originalSubdomain=it" },
        { name: "google", url: "https://scholar.google.com/citations?user=T0JzDTsAAAAJ&hl=it" },
      ],
    },
  ],
  phdStudents: [
    {
      name: "Mohammad Alhussan",
      description: "Mohammad Alhussan is a PhD candidate in Electronic and Electrical Engineering at University College London (UCL), specializing in the cybersecurity of the Internet of Medical Things (IoMT). He holds a Master’s degree in Electrical Engineering from Texas A&M University, with a focus on power electronics, and a Bachelor’s degree in Electrical Engineering from Concordia University, specializing in electronics and systems, both earned with distinction. With extensive experience in engineering and automation for around 9 years, Mohammad has held senior roles at EQUATE Petrochemical Company and MEGlobal Americas, where his expertise encompassed process automation, control system design, industrial instrumentation, and operational technology. He has been also serving as an assistant teacher at the Public Authority for Applied Education and Training in Kuwait, contributing to the development of future engineers. Mohammad's research and innovations have been recognized with numerous accolades, including the Technical Best Presentation Award at APEC 2021 for his work on AC-DC converters and the Best Demo Award at EWSN 2024 for exposing vulnerabilities in BLE-enabled wearable medical devices.",
      image: "/images/people/mohammad.jpeg",
      links: [
        { name: "linkedin", url: "https://www.linkedin.com/in/alhussan/?originalSubdomain=uk" },
        { name: "google", url: "https://scholar.google.com/citations?user=ngObtA8AAAAJ&hl=en" },
      ],
    },
    {
      name: "Andrew Losty",
      description: "Andrew Losty is a PhD candidate in Electronic and Electrical Engineering at University College London (UCL), where he is also affiliated with the UCL Centre for Doctoral Training in Cybersecurity. His research focuses on the privacy, security, and operational behavior of Internet of Things (IoT) devices.",
      image: "/images/people/andrew4.jpg",
      links: [
        { name: "linkedin", url: "https://www.linkedin.com/in/andrew-losty-4087521a/?originalSubdomain=uk" },
        { name: "google", url: "https://scholar.google.com/citations?user=6Ks75q0AAAAJ&hl=en" },
      ],
    },
    {
      name: "Ammara Yasin",
      description: "Ammara (BSc Computer Science, MSc Science, Technology and Society) is undertaking interdisciplinary research at the intersection of Electronic and Electrical Engineering and Science and Technology Studies. This interdisciplinary approach is central to her work, which examines the privacy and security of methods to circumvent network shutdownns. Her research unpacks how these methods can contribute to reconfiguring global digital networks.",
      image: "/images/people/ammara.jpg",
      links: [
        { name: "linkedin", url: "https://www.linkedin.com/in/ammara-y/" },
      ],
    },
    {
      name: "Yuanyuan Zhou",
      description: "Yuanyuan Zhou is a PhD student in Electronic and Electrical Engineering(EEE) at University College London (UCL), specializing in Network Security. She holds a Bachelor's degree in Telecommunication Engineering from Sichuan University and a Master's degree in Machine Learning from UCL. Her research interests include the Internet of Things (IoT), privacy&security, machine learning, networking, and distributed systems.",
      image: "/images/people/yuanyuan.png",
      links: [
        { name: "linkedin", url: "https://www.linkedin.com/in/yuanyuan-zhou-b71258282/?originalSubdomain=uk" },
      ],
    },
  ],
  students: [
    {
      name: "Yuanzhe Hu",
      description: "Yuanzhe is a postgraduate student in the MSc Integrated Machine Learning Systems program at University College London (UCL), Department of Electronic and Electrical Engineering. He received his First-Class Honours BEng degree in EEE from UCL (2021–2024). His research interests include IoT edge computing and autonomous driving systems, with a focus on developing efficient, secure, and intelligent machine learning solutions for real-world applications. Yuanzhe has hands-on experience in industrial automation, system testing, and AI model deployment. He is currently involved in a distributed IoT testbed project at the UCL SafeNetIoT Lab.",
      image: "/images/people/yuanzhe_hu.png",
      links: [
      ],
    },
    {
      name: "Ruoyu Wang",
      description: "Ruoyu holds a Bachelor’s degree in Electrical and Electronic Engineering from Fuzhou University and is currently pursuing an MSc in Internet Engineering at University College London (UCL), specializing in networking and IoT development.",
      image: "/images/people/ruoyu_wang.jpg",
      links: [
      ],
    },
  ],
  alumni: [
    {
      name: "Anna Dixon",
      description: "INSERT",
      image: "/images/people/anna_dixon.jpeg",
      links: [],
    },
    {
      name: "Alex Ciechonski",
      description: "I’m a third-year Electronic and Electrical Engineering student, minoring in Application Programming for Data Science, with a final-year project focused on network security. My research involves analyzing the architecture of popular GenAI browser assistants to uncover security vulnerabilities and assess privacy risks. Beyond academia, I have a background in software engineering, gained through an internship at Accenture. I’m eager to apply these skills in cybersecurity to develop tools that identify system vulnerabilities and enhance digital security.",
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
          {/* Researchers Section */}
          <h2 className="text-primary mb-4">Alumni</h2>
          <div className="row mb-5">
            {people.alumni.map((person, index) => (
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
const PersonCard = ({ person }) => {
  // Helper function to render icons based on link name
  const renderIcon = (name) => {
    switch (name) {
      case 'linkedin':
        return <FaLinkedin size={24} color="#0A66C2" />; // LinkedIn blue
      case 'google':
        return <FaGoogle size={24} color="#DB4437" />; // Google red
      default:
        return null;
    }
  };

  return (
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
          <div style={{ display: 'flex', gap: '1rem' }}>
            {person.links.map((link, i) => (
              <a
                key={i}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.name}
                style={{ display: 'inline-flex', alignItems: 'center' }}
              >
                {renderIcon(link.name)}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};


export default PeoplePage;
