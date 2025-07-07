// pages/research/iscas.js
import Link from 'next/link';
import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import { Nav } from '../../components/Navbar';
import { SEO, navigation } from '../../config/config';

// Import images
import iscasImage from '../../ISCAS_images/3.png';
import presentationPdf from '../images/pdfs/ISCAS_Template_Presentation.pdf';

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

          <h1 className="text-primary fw-bold">ISCAS 2025 Conference Paper</h1>
          <h2 className="text-primary">Hacking Health: Unveiling Vulnerabilities in BLE-Enabled Wearable Sensor Nodes</h2>

          <div className="row justify-content-center mt-4">
            <div className="col-12 col-md-10 col-lg-8">
              <p><strong>Authors:</strong> Mohammad Alhussan, Francesca Boem, Sara Ghoreishizadeh, Anna Maria Mandalari</p>
              <p><strong>Conference:</strong> 2025 IEEE International Symposium on Circuits and Systems (ISCAS)</p>
              <p><strong>Date:</strong> May 25–28, 2025</p>
              <p><strong>Location:</strong> London, United Kingdom</p>

              <div className="image-container mt-5">
                <img
                  src={iscasImage.src}
                  alt="ISCAS 2025 presentation"
                  className="img-fluid border border-secondary"
                  style={{ width: '100%', display: 'block', margin: '0 auto' }}
                />
                <p className="text-center font-italic">BLE Sniffing & MITM Execution Process.</p>
              </div>

              <div className="mt-5">
                <h3 className="text-primary">Overview</h3>
                <p>
                  The rise of the Internet of Medical Things (IoMT) in healthcare brings benefits like continuous monitoring, remote patient care, and data-driven treatments. However, it also poses cybersecurity risks. While prior research has investigated this issue, it has not looked at advanced wearable sensor nodes that use Bluetooth Low Energy (BLE) alongside other wireless protocols.
                </p>
                <p>
                  In this work, we conduct a black-box audit of wearable sensor nodes to explore vulnerabilities. Our systematic approach:
                </p>
                <ul>
                  <li>Investigates whether common attacks are effective against BLE-enabled sensor nodes.</li>
                  <li>Groups vulnerabilities based on susceptibility to MITM, sniffing, and DoS threats.</li>
                  <li>Provides an in-depth security gap analysis for commercial devices used in an IoMT setting.</li>
                </ul>
                <p>
                  We present results from hundreds of experiments using popular commercial sensor nodes, showing that not only are these devices vulnerable to common attacks, but their weaknesses also pose threats to patient safety and data integrity.
                </p>

                <h3 className="text-primary mt-5">Resources</h3>
                <ul>
                  <li>
                    <a
                      href="https://ieeexplore.ieee.org/document/11043235"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary"
                    >
                      Read the paper on IEEE Xplore
                    </a>
                  </li>
                  <li>
                    <a
                      href={presentationPdf.src}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary"
                    >
                      View Paper Presentation (pdf)
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
