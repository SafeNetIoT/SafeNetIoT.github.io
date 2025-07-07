/* eslint-disable react/no-unescaped-entities */

import React, { Fragment } from 'react';
import Link from 'next/link';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { Nav } from '../components/Navbar';
import { SEO, navigation } from '../config/config';

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

          {/* Enhanced Published Papers Section */}
          <div className="mb-5">
            <h2 className="text-primary mb-4">Published Papers</h2>
            <ul className="list-unstyled">

              <li className="mb-3">
                <a 
                  href="/research/hacking-health" 
                  className="text-dark text-decoration-none"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="bi bi-file-earmark-text me-2"></i>
                  [1] M. Alhussan, F. Boem, S. Ghoreishizadeh, and A. M. Mandalari, "Hacking Health: Unveiling Vulnerabilities in Wireless Wearable Sensors," in Proc. IEEE BioSensors Conf., 2024
                </a>
              </li>

              <li className="mb-3">
                <a
                  href="/ewsn_demo2024.html"
                  className="text-dark text-decoration-none"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="bi bi-file-earmark-text me-2"></i>
                  [2] M. Alhussan, F. Boem, S. Ghoreishizadeh, and A. M. Mandalari, "Demo: From Eavesdropping to Exploitation: Exposing Vulnerabilities in BLE-Enabled Wearable Medical Devices," in Proc. 21st Int. Conf. Embedded Wireless Syst. Netw. (EWSN), Dec. 2024, St. Regis Abu Dhabi, UAE. Best Demo Award.
                </a>
              </li>

              <li className="mb-3">
                <a
                  href="/ewsn_phd2024.html"
                  className="text-dark text-decoration-none"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="bi bi-file-earmark-text me-2"></i>
                  [3] M. Alhussan, F. Boem, S. Ghoreishizadeh, and A. M. Mandalari, "PhD School: From Eavesdropping to Exploitation: Exposing Vulnerabilities in BLE-Enabled Wearable Medical Devices," in PhD School at the 21st Int. Conf. Embedded Wireless Syst. Netw. (EWSN), Dec. 2024, St. Regis Abu Dhabi, UAE.
                </a>
              </li>

              <li className="mb-3">
                <a
                  href="/research/iscas"
                  className="text-dark text-decoration-none"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="bi bi-file-earmark-text me-2"></i>
                  [4] M. Alhussan, F. Boem, S. Ghoreishizadeh, and A. M. Mandalari, "Hacking Health: Unveiling Vulnerabilities in BLE-Enabled Wearable Sensor Nodes," in Proc. 2025 IEEE Int. Symp. Circuits Syst. (ISCAS), May 2025, London, United Kingdom.
                </a>
              </li>

              {/* Existing entries */}
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

          {/* Research Posters Section (enhanced) */}
          <div className="mb-5">
            <h2 className="text-primary mb-4">Research Posters</h2>
            <div className="row">
              {/* Poster 1 - Enhanced with HTML content */}
              <div className="col-md-6 col-lg-4 mb-4">
                <div className="card h-100">
                  <img
                    src="/images/posters/shutdownCircumventionPoster_3.jpeg"
                    alt="From Satellites to SIMs"
                    className="card-img-top"
                    style={{ height: '300px', objectFit: 'cover' }}
                  />
                  <div className="card-body">
                    <h5 className="card-title text-dark">From Satellites to SIMs: A Layered Taxonomy of Network Shutdown Circumvention Technologies</h5>
                    <p className="card-text text-muted">Mapping resilient communication solutions against adversarially-imposed network shutdowns.</p>
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

              {/* Poster 2 - Enhanced with HTML content */}
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
                    <p className="card-text text-muted">Developing intra-body communication (IBC) as a secure alternative to vulnerable BLE in medical wearables, addressing sniffing/MITM/DoS risks while maintaining clinical functionality</p>
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

              {/* Poster 3 - Enhanced with HTML content */}
              <div className="col-md-6 col-lg-4 mb-4">
                <div className="card h-100">
                  <img
                    src="/images/posters/TwinGuard.png"
                    alt="Smart Home Security Poster"
                    className="card-img-top"
                    style={{ height: '300px', objectFit: 'cover' }}
                  />
                  <div className="card-body">
                    <h5 className="card-title text-dark">TwinGuard: An Adaptive Digital Twin for Real-Time HTTP(S) Intrusion Detection and Threat Intelligence</h5>
                    <p className="card-text text-muted">TwinGuard is an adaptive digital twin system for real-time HTTP(S) intrusion detection. It combines trie-based path modeling, behavioral fingerprinting, and machine learning to detect evolving threats with 90% accuracy. Key features include dynamic retraining, attacker infrastructure profiling, and granular traffic analysis—revealing attack origins, tools, and strategies.</p>
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
        </div>

        <Footer />
      </div>
    </Fragment>
  );
};

export default ResearchPage;
