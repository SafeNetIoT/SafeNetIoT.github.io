// pages/research/hacking-health.js
import Link from 'next/link';
import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import { Nav } from '../../components/Navbar';
import { SEO, navigation } from '../../config/config';

// Import images using relative paths
import wmdHackingImage from '../../images/WMD_Hacking.png';
import experimentalResultsImage from '../../images/Experimental_Results.png';

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

          <h1 className="text-primary fw-bold">BioSensors 2024</h1>
          <h2 className="text-primary">Hacking Health: Unveiling Vulnerabilities in Wireless Wearable Sensors</h2>

          <div className="row justify-content-center mt-4">
            <div className="col-12 col-md-10 col-lg-8">
              <p><strong>Authors:</strong> Mohammad Alhussan, Francesca Boem, Sara Ghoreishizadeh, Anna Maria Mandalari</p>
              <p><strong>Conference:</strong> IEEE BioSensors 2024</p>

              <p className="mt-4">
                This live demonstration showcases vulnerabilities in wearable sensors using Bluetooth Low Energy (BLE), 
                focusing on Man-in-the-Middle (MITM) and data manipulation attacks. Our demo highlights security risks 
                in devices such as SnapECG, Wellue Oxylink, and Wellue BPM.
              </p>

              <div className="image-container mt-5">
                <img
                  src={wmdHackingImage.src} 
                  alt="MITM Attack Diagram for Wearable Sensors"
                  className="img-fluid border border-secondary"
                  style={{ width: '50%', display: 'block', margin: '0 auto 20px' }}
                />
                <h3 className="text-center mt-4">Wireless Wearable Sensors MITM Attack</h3>
                
                <img
                  src={experimentalResultsImage.src} 
                  alt="Experimental Results from BLE Attacks"
                  className="img-fluid border border-secondary"
                  style={{ width: '50%', display: 'block', margin: '0 auto' }}
                />
                <h3 className="text-center">(A) MITM Attack on Oximeter (B) App Interpreted Results</h3>
              </div>

              <div className="mt-5">
                <h3 className="text-primary">Resources:</h3>
                <ul>
                  <li>
                    <a
                      href="https://ieeexplore.ieee.org/document/10712697"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary"
                    >
                      View Paper on IEEE Xplore
                    </a>
                  </li>
                </ul>

                <h3 className="text-primary mt-5">Citation:</h3>
                <pre className="bg-light p-3 rounded" style={{ overflowX: 'auto' }}>
                  {`@inproceedings{alhussan2024biosensors,
  title     = {Hacking Health: Unveiling Vulnerabilities in Wireless Wearable Sensors},
  author    = {Alhussan, Mohammad and Boem, Francesca and Ghoreishizadeh, Sara and Mandalari, Anna Maria},
  booktitle = {Proceedings of the IEEE BioSensors Conference},
  year      = {2024}
}`}
                </pre>
              </div>

              <p className="font-italic text-center mt-5">
                Note: All experiments were safely performed in a controlled environment.
              </p>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
