// pages/research/MatterRegulations.js
import Link from 'next/link';
import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import { Nav } from '../../components/Navbar';
import { SEO, navigation } from '../../config/config';

import assessedStandardsImg from '../../Matterregulations_images/Assessed-Standards.png';
import paperImg from '../../Matterregulations_images/Paper.png';

export default function MatterRegulations() {
  return (
    <>
      <Header seo={SEO} />
      <Nav title={navigation.name} links={navigation.links} />

      <div className="d-flex flex-column justify-content-between bg-secondary min-vh-100">
        <div className="container py-5 px-3 px-sm-5">

          {/* Back link */}
          <div className="mb-4">
            <Link href="/research">
              <a className="text-primary">← Back to Research</a>
            </Link>
          </div>

          {/* Title */}
          <h1 className="text-primary fw-bold">
            An Analysis of Matter IoT Security Against International Standards and Regulatory Framework
          </h1>

          <div className="row justify-content-center mt-4">
            <div className="col-12 col-md-10 col-lg-8">

              {/* Metadata */}
              <p>
                <strong>Publication Type:</strong> Paper
              </p>

              <p>
                <strong>Authors:</strong> Andrew Losty (UCL), Anna Maria Mandalari (UCL)
              </p>

              <p>
                <strong>Venue:</strong> Workshop on Security and Privacy in Standardized IoT (SDIoTSec) 2026, San Diego, CA, USA
              </p>

              <p>
                <strong>ISBN:</strong> 978-1-970672-01-5
              </p>

              <p>
                <strong>DOI:</strong>{" "}
                <a
                  href="https://dx.doi.org/10.14722/sdiotsec.2026.23066"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary"
                >
                  https://dx.doi.org/10.14722/sdiotsec.2026.23066
                </a>
              </p>

              <p>
                <strong>Conference Website:</strong>{" "}
                <a
                  href="https://www.ndss-symposium.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary"
                >
                  www.ndss-symposium.org
                </a>
              </p>

              {/* Images Grid */}
              <div className="mt-5">
                <div className="row g-4 text-center">

                  {/* Image 1 */}
                  <div className="col-12 col-md-6">
                    <img
                      src={assessedStandardsImg.src}
                      alt="Assessed Standards"
                      className="img-fluid border border-secondary"
                      style={{
                        width: '100%',
                        maxHeight: '320px',
                        objectFit: 'contain'
                      }}
                    />
                    <p className="font-italic mt-2">
                      Assessed Standards and Regulatory Frameworks
                    </p>
                  </div>

                  {/* Image 2 */}
                  <div className="col-12 col-md-6">
                    <img
                      src={paperImg.src}
                      alt="Matter Regulations Paper"
                      className="img-fluid border border-secondary"
                      style={{
                        width: '100%',
                        maxHeight: '320px',
                        objectFit: 'contain'
                      }}
                    />
                    <p className="font-italic mt-2">
                      Matter Security Standards Analysis
                    </p>
                  </div>

                </div>
              </div>

              {/* Abstract */}
              <div className="mt-5">
                <h3 className="text-primary">Abstract</h3>

                <p>
                  As Matter adoption and device deployment grow, it is essential to assess alignment with international IoT security frameworks and standards.
                </p>

                <p>
                  This interim study evaluates Matter specifications against 18 international frameworks to identify compliance and security gaps.
                </p>

                <p>
                  An independent IoT security framework, the Cloud Security Alliance (CSA), was used to provide a taxonomy and grouping of security controls, from which six core security domains were initially selected:
                </p>

                <p>
                  (i) device certification, (ii) attack-surface minimization, (iii) secure communications, (iv) software update mechanisms, (v) logging/telemetry, and (vi) secure storage.
                </p>

                <p>
                  The analysis highlights areas where Matter provides strong guidance and where it is less prescriptive compared to regulations and frameworks such as the Cyber Resilience Act (CRA), NIST, and ETSI.
                </p>

                <p>
                  Future work will extend the assessment with ten additional domains, extending the analytical mapping of Matter’s compliance and non-compliance, and providing valuable insights for manufacturers, developers, and regulators.
                </p>

                {/* Resources */}
                <h3 className="text-primary mt-5">Resources</h3>

                <ul>
                  <li>
                    <a
                      href="https://dx.doi.org/10.14722/sdiotsec.2026.23066"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary"
                    >
                      Read the paper
                    </a>
                  </li>

                  <li>
                    <a
                      href="https://www.ndss-symposium.org"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary"
                    >
                      Visit the NDSS Symposium website
                    </a>
                  </li>
                </ul>

              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
}
