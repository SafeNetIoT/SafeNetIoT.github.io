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
                <strong>Principal Investigator:</strong> Yuanyuan Zhou
              </p>

              <p>
                <strong>Funder:</strong> CRANE Phase One Pilot Project (EPSRC)
              </p>

              <p>
                <strong>Duration:</strong> 7 months (Oct–Dec 2026 to Apr–Jun 2027)
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

            </div>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
}
