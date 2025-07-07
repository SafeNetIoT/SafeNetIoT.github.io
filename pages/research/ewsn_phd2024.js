// pages/research/ewsn-phd.js
/* eslint-disable react/no-unescaped-entities */
import Link from 'next/link';
import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import { Nav } from '../../components/Navbar';
import { SEO, navigation } from '../../config/config';

// Import images
import phdImage2 from '../../EWSN_Demo_images/2.jpg';
import phdImage4 from '../../EWSN_Demo_images/4.png';

export default function EwsnPhdPage() {
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

          <h1 className="text-primary fw-bold">EWSN 2024 PhD School</h1>
          <h2 className="text-primary">
            PhD school: From Eavesdropping to Exploitation: Exposing<br />
            Vulnerabilities in BLE-Enabled Wearable Medical Devices
          </h2>

          <div className="row justify-content-center mt-4">
            <div className="col-12 col-md-10 col-lg-8">
              <p><strong>Authors:</strong> Mohammad Alhussan, Francesca Boem, Sara Ghoreishizadeh, Anna Maria Mandalari</p>
              <p><strong>Event:</strong> PhD School at the 21st International Conference on Embedded Wireless Systems and Networks (EWSN 2024)</p>
              <p><strong>Date:</strong> December 10–13, 2024</p>
              <p><strong>Location:</strong> St. Regis Abu Dhabi, UAE</p>

              <div className="mt-5">
                <h3 className="text-primary">Overview</h3>
                <p>
                  {`This research showcases the potential vulnerabilities in some wearable medical devices that use Bluetooth Low Energy (BLE) for communication, focusing on the risks of Man-in-the-Middle (MITM)
                  attacks, sabotaging and data manipulation attacks. We show how
                  these attacks can compromise not only the confidentiality and integrity of potentially sensitive medical data transmitted by wearable
                  medical devices, but also patients' privacy and safety as well as
                  sensors' reliability.`}
                </p>

                <h3 className="text-primary mt-5">Resources</h3>
                <ul>
                  <li>
                    <a
                      href="https://www.ewsn.org/file-repository/ewsn2024/EWSN24-PSCE_paper_3.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary"
                    >
                      EWSN 2024 PhD School Proceedings (Full paper PDF)
                    </a>
                  </li>
                </ul>

                <h3 className="text-primary mt-5">Images</h3>
                <div className="image-container mt-4">
                  <img
                    src={phdImage2.src}
                    alt="PhD School Lecture"
                    className="img-fluid border border-secondary"
                  />
                  <p className="text-center font-italic">Mohammad Alhussan delivering a lecture at EWSN 2024 PhD School.</p>
                </div>

                <div className="image-container mt-4">
                  <img
                    src={phdImage4.src}
                    alt="PhD School Group Photo"
                    className="img-fluid border border-secondary"
                  />
                  <p className="text-center font-italic">Participation Certificate of the EWSN 2024 PhD School in Abu Dhabi.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
