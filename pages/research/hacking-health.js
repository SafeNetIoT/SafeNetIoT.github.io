// pages/research/hacking-health.js
import Link from 'next/link';
import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import { Nav } from '../../components/Navbar';
import { SEO, navigation } from '../../config/config';

export default function HackingHealthPaper() {
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

          <h1 className="text-primary fw-bold">Hacking Health (BioSensors 2024)</h1>

          <div className="row justify-content-center mt-4">
            <div className="col-12 col-md-10 col-lg-8">
              <h2 className="text-center text-primary">Live Demonstration</h2>
              <p className="text-center lead"><em>Unveiling Vulnerabilities in Wireless Wearable Sensors</em></p>

              <p className="text-center">
                Mohammad Alhussan, Francesca Boem, Sara Ghoreishizadeh, Anna Maria Mandalari<br />
                University College London
              </p>

              <p className="text-center text-muted">Last updated: May 2025</p>

              <div className="paper-content mt-5">
                <h3 className="text-center text-primary"><strong>Abstract</strong></h3>
                <p className="text-justify">
                  This live demonstration showcases the potential vulnerabilities in some wireless wearable sensors that
                  use Bluetooth Low Energy (BLE) for communication, focusing on the risks of Man-in-the-Middle (MITM)
                  attacks, data sabotage, and manipulation. We show how these attacks can compromise not only the
                  confidentiality and integrity of sensitive medical data transmitted by wearable devices, but also
                  patients privacy and sensor reliability.
                </p>

                <h3 className="text-center text-primary mt-4"><strong>Demonstration Setup</strong></h3>
                <p className="text-justify">
                  Our setup includes commercial BLE-enabled medical sensors such as ECGs, oximeters, and blood pressure
                  monitors (e.g., SnapECG, Wellue Oxylink, Wellue BPM). Using the Mirage tool and BLE dongles with Kali
                  Linux, we simulate MITM attacks to intercept and alter health data. These demonstrations are conducted
                  live, enabling visitors to engage with the devices and observe real-time exploits.
                </p>

                <h3 className="text-center text-primary mt-4"><strong>Visitor Engagement</strong></h3>
                <p className="text-justify">
                  Attendees experience firsthand the risks associated with BLE-based communication in wearable sensors.
                  They can wear the sensors, see intercepted data visualized, and even participate in launching attacks in
                  a controlled environment.
                </p>

                <h3 className="text-center text-primary mt-4"><strong>Impact</strong></h3>
                <p className="text-justify">
                  This demo emphasizes the importance of strengthening the cybersecurity of wearable devices. Our findings
                  call for urgent action by manufacturers, researchers, and regulators to implement robust safeguards for
                  patient safety in the Internet of Medical Things (IoMT).
                </p>

                <div className="text-center my-5">
                  <img
                    src="/images/research/biosensors_diagram.png"
                    alt="BLE Attack Diagram"
                    className="img-fluid border border-secondary"
                    style={{ maxWidth: '80%' }}
                  />
                </div>

                <div className="text-center my-5">
                  <img
                    src="/images/research/biosensors_photo.png"
                    alt="MITM Attack Setup"
                    className="img-fluid border border-secondary"
                    style={{ maxWidth: '80%' }}
                  />
                </div>

                <p className="text-center font-italic"><em>All experiments were performed in a controlled testbed and pose no
                  real-world risk.</em></p>

                <div className="paper-meta mt-5">
                  <h3 className="text-center text-primary"><strong>About this publication</strong></h3>
                  <p><strong>Conference:</strong> IEEE BioSensors 2024</p>
                  <p><strong>Paper Title:</strong> Hacking Health: Unveiling Vulnerabilities in Wireless Wearable Sensors</p>
                  <p><strong>Authors:</strong> Mohammad Alhussan, Francesca Boem, Sara Ghoreishizadeh, Anna Maria Mandalari</p>
                  <p>
                    <strong>Link:</strong>{' '}
                    <a
                      href="https://ieeexplore.ieee.org/document/10712697"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary"
                    >
                      IEEE Xplore
                    </a>
                  </p>
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