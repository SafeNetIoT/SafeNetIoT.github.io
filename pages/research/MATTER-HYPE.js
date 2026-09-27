// pages/research/iscas.js
import Link from 'next/link';
import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import { Nav } from '../../components/Navbar';
import { SEO, navigation } from '../../config/config';

// Import images
import paperImg from '../../images/research/Matter-security-assessment.png';

export default function IscasPaper() {
  return (
    <>
      <Header seo={SEO} />
      <Nav title={navigation.name} links={navigation.links} />

      <div className="d-flex flex-column justify-content-between bg-secondary min-vh-100">
        <div className="container py-5 px-3 px-sm-5">
          {/* Back link to research page */}
          <div className="mb-4">
            <Link href="/research">
              <a className="text-primary">← Back to Research</a>
            </Link>
          </div>

          <h1 className="text-primary fw-bold">IMC 2026 Conference Paper</h1>
          <h2 className="text-primary">Beyond the Hype: Empirical Analysis of Matter Standard’s Security and Privacy</h2>

          <div className="row justify-content-center mt-4">
            <div className="col-12 col-md-10 col-lg-8">
              <p><strong>Authors:</strong> Andrew Losty, Tianrui Hu, Daniel J. Dubois, Narmeen Shafqat, Aanjhan Ranganathan, David Choffnes, Anna Maria Mandalari</p>
              <p><strong>Conference:</strong> 2025 Internet Measurement Conference (IMC)</p>
              <p><strong>Date:</strong> October 12-16, 2026</p>
              <p><strong>Location:</strong> Karlsruhe, Germany</p>

              <div className="image-container mt-5">
                <img
                  src={paperImg.src}
                  alt="Matter security assessment overview"
                  className="img-fluid border border-secondary"
                  style={{ width: '100%', display: 'block', margin: '0 auto' }}
                />
                <p className="text-center font-italic">Security assessment of Matter and non-Matter IoT devices.</p>
              </div>

              <div className="mt-5">
                <h3 className="text-primary">Overview</h3>
                <p>
                  Smart home IoT ecosystems have long suffered from fragmented, proprietary protocols with no mandatory security baseline and heavy cloud dependency. Matter (2022) promised to address this through a unified, open standard with mandatory encryption, certificate-based device authentication, and local-first operation. However, whether Matter delivers meaningfully improved security and privacy in practice remains an open question.
                </p>
                <p>
                  In this work, we conduct an empirical, network-traffic-based evaluation of 25 Matter and 14 legacy devices across four ecosystems, examining::
                </p>
                <ul>
                  <li>Whether Matter devices offer measurably stronger security and privacy than comparable non-Matter devices.</li>
                  <li>How ecosystem-specific implementations introduce privacy exposure through mDNS advertisements and inconsistent Rotating Device Identifier behaviour.</li>
                  <li>The risks posed by dual-stack devices maintaining persistent non-Matter cloud connections outside the Matter trust model.</li>
                  <li>The resilience by Matter devices to traffic-inference attacks, replay attacks, and unauthorized commissioning.</li>
                </ul>
                <p>
                  Our results show that Matter raises the IoT security baseline through enforced encryption and authentication, but meaningful privacy and security gaps persist — driven by vendor non-compliance, infrequent firmware updates, and specification ambiguities that require regulatory attention.
                </p>

                <h3 className="text-primary mt-5">Resources</h3>
                <ul>
                  <li>
                    <a
                      href="https://conferences.sigcomm.org/imc/2026/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary"
                    >
                      See IMC Conference details
                    </a>
                  </li>
                  <li>
                    <a
                    href="https://doi.org/10.1145/3777912.3809142%E2%80%8B"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary"
                  >
                    View Paper 
                  </a>
                  </li>
                  <li>
                    <a
                    href="https://github.com/SafeNetIoT/matter_sec_privacy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary"
                  >
                    Github Repository (Scripts and Dataset Overview)
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
