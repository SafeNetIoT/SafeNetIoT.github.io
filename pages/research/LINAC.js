// pages/research/linac.js
import Link from 'next/link';
import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import { Nav } from '../../components/Navbar';
import { SEO, navigation } from '../../config/config';

// Import image
// Replace this with the correct image you want to use for the LINAC page
import linacImage from '../../LINAC_images/1.png';

export default function LinacPaper() {
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

          <h1 className="text-primary fw-bold">Radiotherapy and Oncology Review Article</h1>
          <h2 className="text-primary">
            Cybersecurity of Linear Accelerators in Radiation Oncology Beyond Ransomware
          </h2>

          <div className="row justify-content-center mt-4">
            <div className="col-12 col-md-10 col-lg-8">
              <p>
                <strong>Authors:</strong> Mohammad Alhussan, Abdulaziz Alhussan, Nick Chng,
                Francesca Boem, Anna Maria Mandalari
              </p>
              <p>
                <strong>Journal:</strong> Radiotherapy and Oncology (Green Journal) - Q1
              </p>
              <p>
                <strong>Article Type:</strong> Review Article
              </p>
              <p>
                <strong>DOI:</strong> 10.1016/j.radonc.2026.111474
              </p>

              <div className="image-container mt-5">
                <img
                  src={linacImage.src}
                  alt="LINAC cybersecurity in radiation oncology"
                  className="img-fluid border border-secondary"
                  style={{ width: '50%', display: 'block', margin: '0 auto' }}
                />
                <p className="text-center font-italic">
                  Conceptual illustration of key cybersecurity attack surfaces in a radiation oncology LINAC ecosystem.
                </p>
              </div>

              <div className="mt-5">
                <h3 className="text-primary">Overview</h3>
                <p>
                  The rapid digitalisation of radiation oncology has improved precision, workflow
                  efficiency, and treatment delivery. However, it has also introduced new cybersecurity
                  challenges for safety-critical clinical systems, particularly linear accelerators
                  (LINACs), which are central to modern cancer treatment.
                </p>

                <p>
                  While most reported cyber incidents in healthcare have focused on ransomware and
                  information technology disruption, this review examines a broader and more critical
                  question: how could cyberattacks affect LINAC-based radiotherapy workflows beyond
                  service downtime?
                </p>

                <p>
                  The article analyses LINAC cybersecurity risks by examining the wider radiation
                  oncology ecosystem, including treatment planning systems, oncology information
                  systems, record-and-verify platforms, treatment consoles, imaging systems, vendor
                  remote access pathways, and clinical workflow dependencies.
                </p>

                <p>
                  The review highlights several key areas:
                </p>

                <ul>
                  <li>
                    The cybersecurity risks associated with networked LINAC environments and their
                    integration with hospital IT and operational technology systems.
                  </li>
                  <li>
                    Potential attack surfaces across treatment planning, verification, treatment
                    console interaction, patient positioning, and treatment data integrity.
                  </li>
                  <li>
                    A focused threat model covering opportunistic intruders, targeted adversaries,
                    and advanced persistent threats.
                  </li>
                  <li>
                    Defence mechanisms including network segmentation, zero-trust access control,
                    intrusion detection, cryptographic data integrity, secure vendor access, resilience
                    planning, and workflow-aware cybersecurity practices.
                  </li>
                </ul>

                <p>
                  The paper argues that although confirmed malicious cyberattacks directly targeting
                  LINACs have not been publicly reported, the increasing interconnection of healthcare
                  systems makes proactive cybersecurity planning essential. Strengthening LINAC
                  cybersecurity should therefore be viewed as an investment in patient safety, treatment
                  continuity, and the resilience of cancer care.
                </p>

                <h3 className="text-primary mt-5">Resources</h3>
                <ul>
                  <li>
                    <a
                      href="https://doi.org/10.1016/j.radonc.2026.111474"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary"
                    >
                      Read the paper via DOI
                    </a>
                  </li>
                  <li>
                    <a
                      href="/images/pdfs/LINAC_Radiotherapy_Oncology.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary"
                    >
                      View Paper PDF
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
