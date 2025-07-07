// pages/research/ewsn-demo.js
/* eslint-disable react/no-unescaped-entities */
import Link from 'next/link';
import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import { Nav } from '../../components/Navbar';
import { SEO, navigation } from '../../config/config';

// Import images
import demoImage1 from '../../EWSN_Demo_images/1.jpg';
import demoImage3 from '../../EWSN_Demo_images/3.jpg';

export default function EwsnDemoPage() {
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

          <h1 className="text-primary fw-bold">EWSN 2024 Best Demo Award</h1>
          <h2 className="text-primary">
            Demo: From Eavesdropping to Exploitation:<br />
            Exposing Vulnerabilities in BLE-Enabled Wearable Medical Devices
          </h2>

          <div className="row justify-content-center mt-4">
            <div className="col-12 col-md-10 col-lg-8">
              <p><strong>Authors:</strong> Mohammad Alhussan, Francesca Boem, Sara Ghoreishizadeh, Anna Maria Mandalari</p>
              <p><strong>Conference:</strong> 21st International Conference on Embedded Wireless Systems and Networks (EWSN 2024)</p>
              <p><strong>Date:</strong> December 10–13, 2024</p>
              <p><strong>Location:</strong> St. Regis Abu Dhabi, UAE</p>

              <div className="mt-5">
                <h3 className="text-primary">Overview</h3>
                <p>
                  This award-winning live demonstration showcased the potential vulnerabilities in
                  some wearable medical devices that use Bluetooth Low Energy
                  (BLE) for communication, focusing on the risks of Man-in-the-Middle (MITM) attacks, 
                  sabotaging and data manipulation attacks.
                  We showed how these attacks can compromise not only the confidentiality and integrity 
                  of potentially sensitive medical data transmitted
                  by wearable medical devices, but also patients' privacy and safety
                  as well as sensors' reliability.
                </p>

                <h3 className="text-primary mt-5">Award</h3>
                <p><strong>🏆 Best Demo Award</strong> received at EWSN 2024.</p>
                <p>Recognized by UCL and the Kuwait Cultural Office for outstanding impact in wearable medical devices cybersecurity.</p>

                <h3 className="text-primary mt-5">Resources</h3>
                <ul>
                  <li>
                    <a
                      href="https://www.ewsn.org/file-repository/ewsn2024/ewsn2024demos-final1.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary"
                    >
                      EWSN 2024 Demo Proceedings (Full paper PDF)
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.ucl.ac.uk/electronic-electrical-engineering/news/2024/dec/phd-student-wins-best-demonstration-award-ewsn-2024"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary"
                    >
                      UCL News – Best Demo Award
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.kcouk.org/2025/05/06/congratulations-mr-mohammad-alhussan/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary"
                    >
                      Kuwait Cultural Office Announcement
                    </a>
                  </li>
                </ul>

                <h3 className="text-primary mt-5">Images</h3>
                <div className="image-container mt-4">
                  <img
                    src={demoImage1.src}
                    alt="Mohammad Alhussan presenting demo"
                    className="img-fluid border border-secondary"
                  />
                  <p className="text-center font-italic">Best Demo Award at EWSN 2024.</p>
                </div>

                <div className="image-container mt-4">
                  <img
                    src={demoImage3.src}
                    alt="Award Ceremony"
                    className="img-fluid border border-secondary"
                  />
                  <p className="text-center font-italic">Receiving the Best Demo Award at the ceremony.</p>
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
