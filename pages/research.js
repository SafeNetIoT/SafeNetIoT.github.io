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

          <h1 className="text-primary fw-bold text-left mb-4">Research</h1>

          <div className="row justify-content-center mb-5">
            <div className="col-12 col-md-10 col-lg-8">
              <p className="text-primary lead text-left">
                Our research focuses on securing IoT systems across smart homes, healthcare, and industrial environments.
                We develop innovative solutions to address emerging threats and privacy challenges in connected ecosystems.
              </p>
            </div>
          </div>


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

          <div className="mb-5">
            <h2 className="text-primary mb-4">Published Papers</h2>
            <ul className="list-unstyled">

              <li className="mb-3">
                <a
                  href="https://arxiv.org/pdf/2504.18571?"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-dark text-decoration-none"
                >
                  <i className="bi bi-file-earmark-text me-2"></i>
                  - Intelligent Detection of Non-Essential IoT Traffic on the Home Gateway
                </a>
              </li>

              <li className="mb-3">
                <Link href="/research/hacking-health">
                  <a className="text-dark text-decoration-none">
                    <i className="bi bi-file-earmark-text me-2"></i>
                    - Hacking Health: Unveiling Vulnerabilities in Wireless Wearable Sensors*
                  </a>
                </Link>
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

        <div className="mb-5">
          <h2 className="text-primary mb-4">Research Posters</h2>
          <div className="row">
            {/* Poster 1 */}
            <div className="col-md-6 col-lg-4 mb-4">
              <div className="card h-100">
                <img
                  src="/images/posters/shutdownCircumventionPoster_3.jpeg"
                  alt="From Satellites to SIMs: A Layered Taxonomy of Network Shutdown Circumvention Technologies Used in Adversarial Settings"
                  className="card-img-top"
                  style={{ height: '300px', objectFit: 'cover' }}
                />
                <div className="card-body">
                  <h5 className="card-title text-dark">From Satellites to SIMs: A Layered Taxonomy of Network Shutdown Circumvention Technologies Used in Adversarial Settings
                  </h5>
                  <p className="card-text text-muted">
                    Mapping resilient communication solutions against adversarially-imposed network shutdowns, analyzing global shutdown cases to identify the safest bypass methods for protest and conflict zones
                  </p>
                  <a
                    href="images/pdfs/shutdownCircumventionPoster_3.jpg"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline-primary"
                  >
                    View Poster
                  </a>
                </div>
              </div>
            </div>

            {/* Poster 2 */}
            <div className="col-md-6 col-lg-4 mb-4">
              <div className="card h-100">
                <img
                  src="/images/posters/Mohammad Alhussan Poster V4 - A1.png"
                  alt="CYBERMED: Enhancing Cybersecurity in Wearable Medical Devices using Intra-Body Communication"
                  className="card-img-top"
                  style={{ height: '300px', objectFit: 'cover' }}
                />
                <div className="card-body">
                  <h5 className="card-title text-dark">CYBERMED: Enhancing Cybersecurity in Wearable Medical Devices using Intra-Body Communication</h5>
                  <p className="card-text text-muted">
                    Developing intra-body communication (IBC) as a secure alternative to vulnerable BLE in medical wearables, addressing sniffing/MITM/DoS risks while maintaining clinical functionality
                  </p>
                  <a
                    href="/images/pdfs/Mohammad Alhussan Poster V4 - A1.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline-primary"
                  >
                    View Poster
                  </a>
                </div>
              </div>
            </div>

            {/* Poster 3 */}
            <div className="col-md-6 col-lg-4 mb-4">
              <div className="card h-100">
                <img
                  src="/images/posters/TwinGuard.png"
                  alt="Smart Home Security Poster"
                  className="card-img-top"
                  style={{ height: '300px', objectFit: 'cover' }}
                />
                <div className="card-body">
                  <h5 className="card-title text-dark">TwinGuard: An Adaptive Digital Twin for Real-Time HTTP(S)
                    Intrusion Detection and Threat Intelligence</h5>
                  <p className="card-text text-muted">
                    TwinGuard is an adaptive digital twin system for real-time HTTP(S) intrusion detection. It combines trie-based path modeling, behavioral fingerprinting, and machine learning to detect evolving threats with 90% accuracy. Key features include dynamic retraining, attacker infrastructure profiling, and granular traffic analysis—revealing attack origins, tools, and strategies.
                  </p>
                  <a
                    href="/pdfs/TwinGuard.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline-primary"
                  >
                    View Poster
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>


        <Footer />
      </div>
    </Fragment>
  );
};

export default ResearchPage;
