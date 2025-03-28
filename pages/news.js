import React, { Fragment } from 'react';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { Nav } from '../components/Navbar';
import { SEO, navigation } from '../config/config';

const allNews = [
  {
    date: "6th February 2025 - BBC's Blue Room Visit",
    description: "We recieved an invitation to visit the BBC's 'Blue Room' - the consumer technology research and demo lab from BBC Research & Development. We discussed our work on Smart TVs as well as our Matter Device study and the security of medical devices",
    image: "/images/news/BBCVisit.jpg",
    link: "https://www.bbc.com/blueroom",
  },
  {
    date: "31st January 2025 - Visiting Speaker Michele Chiappalone",
    description: "We were thrilled to welcome Michele Chiappalone from Google to our Security and Privacy course at UCL Electronic and Electrical Engineering! With deep expertise in cloud, Michele shared insights into the latest challenges, best practices, and innovations in cloud environments. This is a fantastic opportunity for our students to gain real-world knowledge from an industry leader at the forefront.",
    image: "/images/news/googleTalk.jpg",
    link: "https://www.linkedin.com/posts/anna-maria-mandalari_cloudsecurity-cybersecurity-privacy-activity-7291073049213190144-tmhV?utm_source=share&utm_medium=member_desktop",
  },
  {
    date: "8th January 2025 -  London Networks & Systems Symposium",
    description: "Prof. Anna Mandalari gave a talk at Imperial College London's London Networks & Systems Symposium, titled 'Towards IoT Privacy and Security Verification'.",
    image: "/images/news/imperialSymposium.jpeg",
    link: "https://ix.imperial.ac.uk/event/london-networks-systems-symposium/",
  },
  {
    date: "10th -13th December 2024: The 21st International Conference on Embedded Wireless Systems and Networks (EWSN 2024)",
    description: "Prof. Anna Mandalari and PhD Students Mohammad Alhussan and Andrew Losty attended the 21st International Conference on Embedded Wireless Systems and Networks (EWSN 2024). Muhammad won the Best Demo Award for research on the potential vulnerabilities in wearable medical devices.",
    image: "/images/news/bestDemo.jpeg",
    link: "https://www.ucl.ac.uk/electronic-electrical-engineering/news/2024/dec/phd-student-wins-best-demonstration-award-ewsn-2024",
  },
  {
    date: "26th November 2024: Connected Ecosystems: Security and Resilience in IoT",
    description: "Prof. Anna Mandalari hosted a panel bringing together cybersecurity experts, industry leaders, and policymakers to explore emerging regulations, best practices, and innovative approaches to safeguarding IoT.",
    image: "/images/news/august-2023.jpg",
    link: "https://www.digicatapult.org.uk/apply/events/connected-ecosystems-security-and-resilience-in-iot/#:~:text=This%20event%20brings%20together%20cybersecurity,security%20standardisation%20and%20implementation%20strategies.",
  },
];

const NewsPage = () => {
  return (
    <Fragment>
      <Header seo={SEO} />
      <Nav
        title={navigation.name}
        links={navigation.links}
      />
      <div className="d-flex flex-column justify-content-between bg-primary min-vh-100">
        <div className="py-5 px-5 container">
          <h1 className="text-secondary fw-bold text-left mb-5">All News</h1>

          {/* Updated Description */}
          <div className="row justify-content-center mb-5">
            <div className="col-12 col-md-10 col-lg-8">
              <div className="text-secondary lead text-left">
                The latest updates on our achievements, events, and collaborations.
                <ul className="list-unstyled">
                  <li>- Award Wins: Celebrating our recognition for excellence in IoT security research and innovation.</li>
                  <li>- Conferences: Highlights of conferences we have organized, attended, or presented at, showcasing our contributions to the global IoT community.</li>
                  <li>- Speakers: Insights from renowned experts and thought leaders who have shared their knowledge at our events.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* News Cards */}
          <div className="row">
            {allNews.map((item, index) => (
              <div key={index} className="col-md-6 col-lg-4 mb-4">
                <div className="card h-100">
                  <img
                    src={item.image}
                    alt={`News from ${item.date}`}
                    className="card-img-top"
                    style={{ height: '200px', objectFit: 'cover' }}
                  />
                  <div className="card-body">
                    <h5 className="card-title text-primary">{item.date}</h5>
                    <p className="card-text text-primary">{item.description}</p>
                    <a href={item.link} className="btn btn-outline-primary">
                      Learn More
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <Footer />
      </div>
    </Fragment>
  );
};

export default NewsPage;