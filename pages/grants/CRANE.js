// pages/grants/CRANE.js
import Link from 'next/link';
import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import { Nav } from '../../components/Navbar';
import { SEO, navigation } from '../../config/config';

export default function CraneGrant() {
  return (
    <>
      <Header seo={SEO} />
      <Nav title={navigation.name} links={navigation.links} />

      <div className="d-flex flex-column justify-content-between bg-secondary min-vh-100">
        <div className="container py-5 px-3 px-sm-5">

          {/* Back link */}
          <div className="mb-4">
            <Link href="/grants">
              <a className="text-primary">← Back to Grants</a>
            </Link>
          </div>

          {/* Title */}
          <h1 className="text-primary fw-bold">
            Securing Wearable Medical Communication Through Neuromorphic-Inspired Anomaly Detection
          </h1>

          <div className="row justify-content-center mt-4">
            <div className="col-12 col-md-10 col-lg-8">

              {/* Meta info */}
              <p>
                <strong>Principal Investigator:</strong> Anna Maria Mandalari
              </p>

              <p>
                <strong>Researcher:</strong> Yuanyuan Zhou
              </p>

              <p>
                <strong>Funder:</strong> CRANE Phase One Pilot Project (EPSRC)
              </p>

              <p>
                <strong>Duration:</strong> 7 months (Oct–Dec 2026 to Apr–Jun 2027)
              </p>

              <p>
                <strong>Keywords:</strong> secure cyber-physical autonomy, medical IoT resilience, anomaly detection, event-driven verification, energy-efficient system
              </p>

              <p>
                <strong>Link:</strong>{" "}
                <a
                  href="https://www.crane.ac.uk/crane/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary"
                >
                  CRANE Phase One Pilot Projects Call: Securing Trust, Autonomy, and Resilience in Future Cyber Ecosystems
                </a>
              </p>

              {/* Abstract */}
              <div className="mt-5">
                <h3 className="text-primary">Abstract</h3>

                <p>
                  BLE-based medical IoT (IoMT) devices face real, demonstrated threats like man-in-the-middle attacks (MITM), denial-of-service (DoS), and eavesdropping which we have verified through hardware-based exploits. In closed-loop medical contexts, such vulnerabilities carry direct implications for patient safety, from corrupted readings to silently dropped alerts.
                </p>

                <p>
                  Neuromorphic computing offers a promising alternative: an event-driven paradigm particularly well suited to energy-constrained edge and sensory applications, where sparse, meaningful transmissions could in principle reduce both attack exposure and network congestion compared to conventional always-on communication.
                </p>

                <p>
                  This project sets out to build and empirically validate a neuromorphic-inspired verification mechanism for wearable medical devices, testing whether it can deliver stronger resilience and greater efficiency while matching the attack detection performance of continuous verification.
                </p>
              </div>

            </div>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
}
