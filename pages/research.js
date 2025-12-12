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

{/* Published Papers */}
<div className="mb-5">
  <div className="d-flex align-items-center justify-content-between flex-wrap gap-2 mb-3">
    <h2 className="text-primary mb-0">Published Papers</h2>
    <span className="badge rounded-pill text-bg-light border text-primary">
      7 items
    </span>
  </div>

  <p className="text-primary mb-4" style={{ maxWidth: 900 }}>
    Selected peer-reviewed papers, demos, and workshop publications related to IoT security in smart homes, healthcare, and industrial environments.
  </p>

  {/* Year: 2025 */}
  <div className="mb-4">
    <h5 className="text-primary fw-bold mb-3">2025</h5>

    <div className="d-flex flex-column gap-3">
      {/* Item */}
      <div className="card border-0 shadow-sm">
        <div className="card-body p-4">
          <div className="d-flex justify-content-between align-items-start gap-3 flex-wrap">
            <div className="flex-grow-1">
              <div className="d-flex align-items-center gap-2 mb-2">
                <span className="badge rounded-pill text-bg-primary">Conference</span>
                <span className="text-muted small">May 2025 • London, UK</span>
              </div>

              <h5 className="text-dark fw-semibold mb-2">
                Hacking Health: Unveiling Vulnerabilities in BLE-Enabled Wearable Sensor Nodes
              </h5>

              <p className="text-muted mb-2">
                <span className="fw-semibold text-dark">M.</span> Alhussan, F. Boem, S. Ghoreishizadeh, A. M. Mandalari
              </p>

              <p className="text-muted mb-0">
                <span className="fw-semibold">Venue:</span> Proc. 2025 IEEE International Symposium on Circuits and Systems (ISCAS)
              </p>
            </div>

            <div className="d-flex gap-2">
              <a
                href="/research/ISCAS"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline-primary btn-sm"
              >
                <i className="bi bi-box-arrow-up-right me-2"></i>
                View
              </a>
            </div>
          </div>
        </div>
      </div>

 {/* Item */}
      <div className="card border-0 shadow-sm">
        <div className="card-body p-4">
          <div className="d-flex justify-content-between align-items-start gap-3 flex-wrap">
            <div className="flex-grow-1">
              <div className="d-flex align-items-center gap-2 mb-2">
                <span className="badge rounded-pill text-bg-secondary">Preprint</span>
                <span className="text-muted small">March 2025 • Seattle, USA </span>
              </div>

              <h5 className="text-dark fw-semibold mb-2">
                Big Help or Big Brother? Auditing Tracking, Profiling, and Personalization in Generative AI Assistants
              </h5>

              <p className="text-muted mb-2">
                Yash Vekaria, Aurelio Loris Canino, Jonathan Levitsky, Alex Ciechonski, Patricia Callejo, Anna Maria Mandalari, Zubair Shafiq
              </p>

              <p className="text-muted mb-0">
                <span className="fw-semibold">Venue:</span> 34th USENIX Security Symposium
              </p>
            </div>

            <div className="d-flex gap-2">
              <a
                href="https://www.usenix.org/conference/usenixsecurity25/presentation/vekaria"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline-primary btn-sm"
              >
                <i className="bi bi-file-earmark-text me-2"></i>
                Read
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Item */}
      <div className="card border-0 shadow-sm">
        <div className="card-body p-4">
          <div className="d-flex justify-content-between align-items-start gap-3 flex-wrap">
            <div className="flex-grow-1">
              <div className="d-flex align-items-center gap-2 mb-2">
                <span className="badge rounded-pill text-bg-secondary">Workshop</span>
                <span className="text-muted small">July 2025 • IETF Madrid, Spain</span>
              </div>

              <h5 className="text-dark fw-semibold mb-2">
                Towards Operational and Security Best Practices for DNS in the Internet of Things
              </h5>

              <p className="text-muted mb-2">
                A. Losty, A. M. Mandalari, A. K. Mishra, M. Cunche
              </p>

              <p className="text-muted mb-0">
                <span className="fw-semibold">Venue:</span> ANRW 2025 (Applied Networking Research Workshop)
              </p>
            </div>

            <div className="d-flex gap-2">
              <a
                href="https://hal.science/hal-05110445/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline-primary btn-sm"
              >
                <i className="bi bi-file-earmark-text me-2"></i>
                Read
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Item */}
      <div className="card border-0 shadow-sm">
        <div className="card-body p-4">
          <div className="d-flex justify-content-between align-items-start gap-3 flex-wrap">
            <div className="flex-grow-1">
              <div className="d-flex align-items-center gap-2 mb-2">
                <span className="badge rounded-pill text-bg-light border text-primary">Preprint</span>
                <span className="text-muted small">arXiv</span>
              </div>

              <h5 className="text-dark fw-semibold mb-2">
                Intelligent Detection of Non-Essential IoT Traffic on the Home Gateway
              </h5>

         <p className="text-muted mb-2">
                Palmese, Fabio ;  Mandalari, Anna Maria ;  Haddadi, Hamed ; Enrico Cesare Redondi, Alessandro
              </p>
        

              <p className="text-muted mb-0">
                <span className="fw-semibold">Link:</span> arXiv PDF
              </p>
            </div>

            <div className="d-flex gap-2">
              <a
                href="https://arxiv.org/pdf/2504.18571?"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline-primary btn-sm"
              >
                <i className="bi bi-download me-2"></i>
                PDF
              </a>
            </div>
          </div>
        </div>
      </div>



  {/* Year: 2024 */}

  <div>
    <h5 className="text-primary fw-bold mb-3">2024</h5>

    <div className="d-flex flex-column gap-3">

          {/* Item */}
      <div className="card border-0 shadow-sm">
        <div className="card-body p-4">
          <div className="d-flex justify-content-between align-items-start gap-3 flex-wrap">
            <div className="flex-grow-1">
              <div className="d-flex align-items-center gap-2 mb-2">
                <span className="badge rounded-pill text-bg-light border text-primary">Conference Paper</span>
                <span className="text-muted small"> August 2024 • Electronic Government and the Information Systems Perspective </span>
              </div>

              <h5 className="text-dark fw-semibold mb-2">
                Enabling Lawful Interception in Environments Protected by IoT Safeguard
              </h5>

        <p className="text-muted mb-2">
                Aurelio Loris Canino, Gianluca Lax 
              </p>

              <p className="text-muted mb-0">
                <span className="fw-semibold">Link:</span> Springer
              </p>
            </div>

            <div className="d-flex gap-2">
              <a
                href="https://link.springer.com/chapter/10.1007/978-3-031-68211-7_12"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline-primary btn-sm"
              >
                <i className="bi bi-box-arrow-up-right me-2"></i>
                Open
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

      {/* Item */}
      <div className="card border-0 shadow-sm">
        <div className="card-body p-4">
          <div className="d-flex justify-content-between align-items-start gap-3 flex-wrap">
            <div className="flex-grow-1">
              <div className="d-flex align-items-center gap-2 mb-2">
                <span className="badge rounded-pill text-bg-primary">Conference</span>
                <span className="text-muted small">2024 • IEEE BioSensors</span>
              </div>

              <h5 className="text-dark fw-semibold mb-2">
                Hacking Health: Unveiling Vulnerabilities in Wireless Wearable Sensors
              </h5>

              <p className="text-muted mb-2">
                M. Alhussan, F. Boem, S. Ghoreishizadeh, A. M. Mandalari
              </p>

              <p className="text-muted mb-0">
                <span className="fw-semibold">Venue:</span> Proc. IEEE BioSensors Conference (2024)
              </p>
            </div>

            <div className="d-flex gap-2">
              <a
                href="/research/hacking-health"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline-primary btn-sm"
              >
                <i className="bi bi-box-arrow-up-right me-2"></i>
                View
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Item */}
      <div className="card border-0 shadow-sm">
        <div className="card-body p-4">
          <div className="d-flex justify-content-between align-items-start gap-3 flex-wrap">
            <div className="flex-grow-1">
              <div className="d-flex align-items-center gap-2 mb-2">
                <span className="badge rounded-pill text-bg-secondary">Demo</span>
                <span className="text-muted small">Dec 2024 • St. Regis Abu Dhabi, UAE</span>
                <span className="badge rounded-pill text-bg-warning text-dark">Best Demo Award</span>
              </div>

              <h5 className="text-dark fw-semibold mb-2">
                Demo: From Eavesdropping to Exploitation: Exposing Vulnerabilities in BLE-Enabled Wearable Medical Devices
              </h5>

              <p className="text-muted mb-2">
                M. Alhussan, F. Boem, S. Ghoreishizadeh, A. M. Mandalari
              </p>

              <p className="text-muted mb-0">
                <span className="fw-semibold">Venue:</span> 21st Intl. Conf. on Embedded Wireless Systems and Networks (EWSN)
              </p>
            </div>

            <div className="d-flex gap-2">
              <a
                href="/research/ewsn_demo2024"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline-primary btn-sm"
              >
                <i className="bi bi-box-arrow-up-right me-2"></i>
                View
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Item */}
      <div className="card border-0 shadow-sm">
        <div className="card-body p-4">
          <div className="d-flex justify-content-between align-items-start gap-3 flex-wrap">
            <div className="flex-grow-1">
              <div className="d-flex align-items-center gap-2 mb-2">
                <span className="badge rounded-pill text-bg-secondary">PhD School</span>
                <span className="text-muted small">Dec 2024 • St. Regis Abu Dhabi, UAE</span>
              </div>

              <h5 className="text-dark fw-semibold mb-2">
                PhD School: From Eavesdropping to Exploitation: Exposing Vulnerabilities in BLE-Enabled Wearable Medical Devices
              </h5>

              <p className="text-muted mb-2">
                M. Alhussan, F. Boem, S. Ghoreishizadeh, A. M. Mandalari
              </p>

              <p className="text-muted mb-0">
                <span className="fw-semibold">Venue:</span> PhD School at EWSN (2024)
              </p>
            </div>

            <div className="d-flex gap-2">
              <a
                href="/research/ewsn_phd2024"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline-primary btn-sm"
              >
                <i className="bi bi-box-arrow-up-right me-2"></i>
                View
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Item */}
      <div className="card border-0 shadow-sm">
        <div className="card-body p-4">
          <div className="d-flex justify-content-between align-items-start gap-3 flex-wrap">
            <div className="flex-grow-1">
              <div className="d-flex align-items-center gap-2 mb-2">
                <span className="badge rounded-pill text-bg-secondary">PhD School</span>
                <span className="text-muted small">Dec 2024 • St. Regis Abu Dhabi, UAE</span>
              </div>

              <h5 className="text-dark fw-semibold mb-2">
                An Investigation of Matter Smart Home Mechanisms to Mitigate Denial-of-Service (DoS) Attacks
              </h5>

              <p className="text-muted mb-2">
                A. Losty, A. M. Mandalari
              </p>

              <p className="text-muted mb-0">
                <span className="fw-semibold">Venue:</span> PhD School at EWSN (2024)
              </p>
            </div>

            <div className="d-flex gap-2">
              <a
                href="https://www.ewsn.org/file-repository/ewsn2024/EWSN24-PSCE_paper_14.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline-primary btn-sm"
              >
                <i className="bi bi-download me-2"></i>
                PDF
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  {/* Tiny hover polish without changing branding */}
  <style jsx>{`
    .card {
      transition: transform 120ms ease, box-shadow 120ms ease;
    }
    .card:hover {
      transform: translateY(-2px);
      box-shadow: 0 .5rem 1.25rem rgba(0,0,0,.08) !important;
    }
  `}</style>
</div>


        
          <div className="mb-5">
            <h2 className="text-primary mb-4">Research Posters</h2>
            <div className="row">
              {/* Poster 1 */}
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
