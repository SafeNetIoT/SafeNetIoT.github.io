// pages/research/MatterSecurityPrivacy.js
import Link from 'next/link';
import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import { Nav } from '../../components/Navbar';
import { SEO, navigation } from '../../config/config';

import cyncPlugImg from '../../MatterSecPriv_images/Cync-Matter-Plug-d3.png';
import linkindPlugImg from '../../MatterSecPriv_images/Linkind-Matter-Plug-d3.png';
import tuyaPlugImg from '../../MatterSecPriv_images/Tuya-Matter-Plug-7.png';

export default function MatterSecurityPrivacy() {
  return (
    <>
      <Header seo={SEO} />
      <Nav title={navigation.name} links={navigation.links} />

      <div className="d-flex flex-column justify-content-between bg-secondary min-vh-100">
        <div className="container py-5 px-3 px-sm-5">

          {/* Back link */}
          <div className="mb-4">
            <Link href="/research">
              <a className="text-primary">← Back to Research</a>
            </Link>
          </div>

          <h1 className="text-primary fw-bold">
            Beyond the Hype: Empirical Analysis of Matter Standard’s Security and Privacy
          </h1>

          <div className="row justify-content-center mt-4">
            <div className="col-12 col-md-10 col-lg-8">

              <p>
                <strong>Authors:</strong>{" "}
                <entity>
                  :contentReference[oaicite:0]{index=0}
                </entity>,{" "}
                <entity>
                  :contentReference[oaicite:1]{index=1}
                </entity>,{" "}
                <entity>
                  :contentReference[oaicite:2]{index=2}
                </entity>,{" "}
                <entity>
                  :contentReference[oaicite:3]{index=3}
                </entity>,{" "}
                <entity>
                  :contentReference[oaicite:4]{index=4}
                </entity>,{" "}
                <entity>
                  :contentReference[oaicite:5]{index=5}
                </entity>,{" "}
                <entity>
                  :contentReference[oaicite:6]{index=6}
                </entity>
              </p>

              <p>
                <strong>Venue:</strong> Internet Measurement Conference (IMC ’26), October 12–16, 2026, Karlsruhe, Germany
              </p>

              <p>
                <strong>ACM ISBN:</strong> 979-8-4007-2327-8/26/10
              </p>

              <p>
                <strong>DOI:</strong>{" "}
                [10.1145/3777912.3809142](https://doi.org/10.1145/3777912.3809142?utm_source=chatgpt.com)
              </p>

              {/* Images */}
              <div className="mt-5 image-container">

                <img
                  src={cyncPlugImg.src}
                  alt="Cync Matter Plug Analysis"
                  className="img-fluid border border-secondary"
                  style={{ width: '100%', display: 'block', margin: '0 auto' }}
                />
                <p className="text-center font-italic">Cync Matter Plug (Security Analysis)</p>

                <img
                  src={linkindPlugImg.src}
                  alt="Linkind Matter Plug Analysis"
                  className="img-fluid border border-secondary mt-4"
                  style={{ width: '100%', display: 'block', margin: '0 auto' }}
                />
                <p className="text-center font-italic">Linkind Matter Plug (Privacy Evaluation)</p>

                <img
                  src={tuyaPlugImg.src}
                  alt="Tuya Matter Plug Analysis"
                  className="img-fluid border border-secondary mt-4"
                  style={{ width: '100%', display: 'block', margin: '0 auto' }}
                />
                <p className="text-center font-italic">Tuya Matter Plug (Traffic Behaviour Study)</p>

              </div>

              {/* Abstract */}
              <div className="mt-5">
                <h3 className="text-primary">Abstract</h3>

                <p>
                  The rapid growth of the Internet of Things (IoT) has created fragmented smart home ecosystems, with platforms such as Apple Home, Google Home, and Samsung SmartThings historically relying on proprietary protocols and device-specific implementations that limited interoperability.
                </p>

                <p>
                  The Matter standard defines a common, secure application-layer framework enabling cross-platform interoperability for IoT devices. Developed under the Connectivity Standards Alliance (CSA), it aims to unify device communication across ecosystems.
                </p>

                <p>
                  This study empirically analyzes Matter and non-Matter ecosystems, focusing on security and privacy. We evaluate 25 Matter devices and 14 non-Matter devices with comparable functionality, examining network traffic during commissioning, device control, and data transmission.
                </p>

                <p>
                  Our evaluation shows that Matter improves security and privacy through AES-128-CCM encryption, device attestation, and secure commissioning. Its local-first design further reduces cloud dependency and limits data exposure.
                </p>

                <p>
                  However, we identify several risks, including multicast DNS metadata leakage, inconsistent key rotation behavior, and persistent cloud connectivity in many devices. Firmware updates are also infrequent, with most devices remaining on early Matter versions.
                </p>

                <p>
                  We also show that encrypted traffic patterns can still reveal device types and user activities to in-network adversaries, highlighting the limits of encryption alone.
                </p>

                <h3 className="text-primary mt-5">Resources</h3>

                <ul>
                  <li>
                    <a
                      href="https://doi.org/10.1145/3777912.3809142"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary"
                    >
                      Read the paper on ACM Digital Library
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
