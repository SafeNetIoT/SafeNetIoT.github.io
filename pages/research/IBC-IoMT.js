import Link from 'next/link';
import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import { Nav } from '../../components/Navbar';
import { SEO, navigation } from '../../config/config';

import taxonomyImage from '../../public/images/research/IBC_modalities_taxonomy.jpg';
import performanceImage from '../../public/images/research/IBC_performance_comparison.jpg';

export default function IbcIomtPaper() {
  return (
    <>
      <Header seo={SEO} />
      <Nav title={navigation.name} links={navigation.links} />

      <div className="d-flex flex-column justify-content-between bg-secondary min-vh-100">
        <div className="container py-5 px-3 px-sm-5">
          <div className="mb-4">
            <Link href="/research">
              <a className="text-primary">← Back to Research</a>
            </Link>
          </div>

          <h1 className="text-primary fw-bold">IEEE Internet of Things Journal — Accepted Paper</h1>
          <h2 className="text-primary">
            Intra-Body Communication for the Internet of Medical Things: A Survey of Communication Modalities,
            Security, and Reliability
          </h2>

          <div className="row justify-content-center mt-4">
            <div className="col-12 col-md-10 col-lg-8">
              <p><strong>Authors:</strong> Mohammad Alhussan, Francesca Boem, Anna Maria Mandalari</p>
              <p><strong>Journal:</strong> IEEE Internet of Things Journal</p>
              <p><strong>Status:</strong> Accepted for publication</p>
              <p><strong>Article Type:</strong> Survey Article</p>
              <p><strong>DOI:</strong> 10.1109/JIOT.2026.3739056</p>

              <div className="image-container mt-5">
                <img
                  src={taxonomyImage.src}
                  alt="Taxonomy of Intra-Body Communication modalities"
                  className="img-fluid border border-secondary"
                  style={{ width: '100%', display: 'block', margin: '0 auto' }}
                />
                <p className="text-center font-italic mt-2">
                  Taxonomy of Intra-Body Communication modalities, including galvanic, capacitive, ultrasound,
                  magnetic resonant, fat-based, optical, and molecular communication.
                </p>
              </div>

              <div className="mt-5">
                <h3 className="text-primary">Overview</h3>
                <p>
                  The Internet of Medical Things enables continuous monitoring, remote management, and data-driven
                  interventions using wearable and implantable medical devices. However, widespread reliance on
                  short-range radio technologies such as Bluetooth Low Energy exposes body area networks to
                  eavesdropping, physiological data manipulation, and Denial-of-Service attacks, with direct
                  implications for patient safety and privacy.
                </p>
                <p>
                  This survey examines Intra-Body Communication as an alternative communication paradigm that uses
                  the human body as a transmission medium. It classifies major IBC modalities, surveys applications
                  across implants, wearables, assistive systems, and the Internet of Bio-Nano Things, and relates IBC
                  to attack surfaces observed in BLE-based systems.
                </p>
                <p>
                  The paper compares IBC and radio-frequency body area networks across security, reliability,
                  throughput, and interference resilience. The synthesis shows that reported IBC links range from
                  tens of kb/s to Mbps depending on the modality, with Fat-IBC reaching up to 92 Mb/s, while
                  GC-IBC and CC/EQS-HBC offer stronger body-confined robustness and lower BER trends than
                  BLE/SmartBAN.
                </p>
                <p>
                  The review positions IBC as an enabling technology for connected medical devices and identifies
                  open challenges in validation, safety assessment, multi-node coordination, system integration,
                  and standardisation.
                </p>

                <div className="image-container mt-5">
                  <img
                    src={performanceImage.src}
                    alt="Comparison of IBC and BLE or SmartBAN performance"
                    className="img-fluid border border-secondary"
                    style={{ width: '100%', display: 'block', margin: '0 auto' }}
                  />
                  <p className="text-center font-italic mt-2">
                    Reported throughput and illustrative BER-versus-SNR comparison across BLE/SmartBAN and selected
                    IBC modalities.
                  </p>
                </div>

                <h3 className="text-primary mt-5">Resources</h3>
                <ul>
                  <li>
                    <a
                      href="https://doi.org/10.1109/JIOT.2026.3739056"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary"
                    >
                      Read the paper via DOI
                    </a>
                    <span className="text-muted"> — the IEEE record will become accessible through this permanent link when online publication is complete.</span>
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
