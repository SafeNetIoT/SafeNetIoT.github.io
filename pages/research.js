import React, { Fragment } from 'react';
import Link from 'next/link'; // Import the Link component
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { Nav } from '../components/Navbar';
import { SEO, navigation } from '../config/config'; // Import SEO and navigation from config

const ResearchPage = () => {
  return (
    <Fragment>
      <Header seo={SEO} />
      <Nav title={navigation.name} links={navigation.links} />

      <div className="d-flex flex-column justify-content-between bg-secondary min-vh-100">
        <div className="container py-5 px-3 px-sm-5">
          {/* Title */}
          <h1 className="text-primary fw-bold text-left mb-4">Research</h1>

          <div className="row justify-content-center mb-5">
            <div className="col-12 col-md-10 col-lg-8">
              <p className="text-primary lead text-left">
                Our research focuses on securing IoT systems across smart homes, healthcare, and industrial environments.
                We develop innovative solutions to address emerging threats and privacy challenges in connected ecosystems.
              </p>
            </div>
          </div>

          {/* Upcoming Papers */}
          <div className="mb-5">
            <h2 className="text-primary mb-4">Upcoming Papers</h2>
            <ul className="list-unstyled">
              <li className="mb-3">
                <a
                  href="https://example.com/upcoming-paper-1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-dark text-decoration-none"
                >
                  <i className="bi bi-file-earmark-text me-2"></i>
                  - PENDING
                </a>
              </li>
              {/* <li className="mb-3">
                <a
                  href="https://example.com/upcoming-paper-2"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-dark text-decoration-none"
                >
                  <i className="bi bi-file-earmark-text me-2"></i>
                  "Privacy-Preserving Data Aggregation in Healthcare IoT Systems"
                </a>
              </li>
              <li className="mb-3">
                <a
                  href="https://example.com/upcoming-paper-3"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-dark text-decoration-none"
                >
                  <i className="bi bi-file-earmark-text me-2"></i>
                  "Real-Time Threat Detection in Industrial IoT Networks"
                </a>
              </li> */}
            </ul>
          </div>

          {/* Published Papers */}
          <div className="mb-5">
            <h2 className="text-primary mb-4">Published Papers</h2>
            <ul className="list-unstyled">
              <li className="mb-3">
                <a
                  href="https://www.researchgate.net/publication/384992278_Live_Demonstration_Hacking_Health_Unveiling_Vulnerabilities_in_Wireless_Wearable_Sensors"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-dark text-decoration-none"
                >
                  <i className="bi bi-file-earmark-text me-2"></i>
                  - Hacking Health: Unveiling Vulnerabilities in Wireless Wearable Sensors
                </a>
              </li>
              <li className="mb-3">
                <a
                  href="https://www.ewsn.org/file-repository/ewsn2024/EWSN24-PSCE_paper_14.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-dark text-decoration-none"
                >
                  <i className="bi bi-file-earmark-text me-2"></i>
                  - An Investigation of Matter Smart Home Mechanisms to Mitigate Denial-of-Service (DoS) Attacks
                </a>
              </li>
              <li className="mb-3">
                <a
                  href="https://www.researchgate.net/publication/383139967_Enabling_Lawful_Interception_in_Environments_Protected_by_IoT_Safeguard"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-dark text-decoration-none"
                >
                  <i className="bi bi-file-earmark-text me-2"></i>
                  - Enabling Lawful Interception in Environments Protected by IoT Safeguard
                </a>
              </li>
            </ul>
          </div>
        </div>

        <Footer />
      </div>
    </Fragment>
  );
};

export default ResearchPage;