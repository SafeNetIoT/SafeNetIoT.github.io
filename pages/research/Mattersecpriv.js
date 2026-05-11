// pages/research/MatterSecurityPrivacy.js
import Link from 'next/link';
import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import { Nav } from '../../components/Navbar';
import { SEO, navigation } from '../../config/config';

export default function MatterSecurityPrivacy() {
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

          <h1 className="text-primary fw-bold">
            Beyond the Hype: Empirical Analysis of Matter Standard’s Security and Privacy
          </h1>

          <div className="row justify-content-center mt-4">
            <div className="col-12 col-md-10 col-lg-8">

              <p>
                <strong>Authors:</strong> Andrew Losty, Tianrui Hu, Daniel J. Dubois, Narmeen Shafqat, Aanjhan Ranganathan, David Choffnes, Anna Maria Mandalari
              </p>

              <p>
                <strong>Venue:</strong> Internet Measurement Conference (IMC ’26), October 12–16, 2026, Karlsruhe, Germany
              </p>

              <p>
                <strong>ACM ISBN:</strong> 979-8-4007-2327-8/26/10
              </p>

              <p>
                <strong>DOI:</strong>{" "}
                <a
                  href="https://doi.org/10.1145/3777912.3809142"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary"
                >
                  https://doi.org/10.1145/3777912.3809142
                </a>
              </p>

              <div className="mt-5">
                <h3 className="text-primary">Abstract</h3>

                  <p>
    The rapid growth of the Internet of Things (IoT) has created fragmented smart home ecosystems, with platforms such as Apple Home, Google Home, and Samsung SmartThings historically relying on proprietary protocols and device-specific implementations that limited interoperability.
  </p>

  <p>
    The Matter standard defines a common, secure application-layer framework enabling cross-platform interoperability for Internet of Things (IoT) devices. It is developed under the Connectivity Standards Alliance (CSA), an industry consortium comprising more than 860 member organizations.
  </p>

  <p>
    This study empirically analyzes Matter and non-Matter ecosystems, focusing on security and privacy. We evaluate 25 Matter devices and 14 non-Matter devices with comparable functionality, examining network traffic during commissioning, device control, and data transmission.
  </p>

  <p>
    Our evaluation shows that Matter improves security and privacy through AES-128-CCM encryption, device attestation, and secure commissioning. Its local-first design further reduces cloud dependency and limits data exposure.
  </p>

  <p>
    However, we identify several risks. Persistent multicast DNS broadcasts reveal detailed device metadata, and rotating key identifiers are inconsistently implemented, with some devices failing to renew keys for extended periods.
  </p>

  <p>
    We also observe ecosystem-specific differences in commissioning behavior. In addition, many devices maintain persistent connections to vendor or third-party cloud services.
  </p>

  <p>
    Firmware maintenance is inconsistent, as most devices in our study run early versions of Matter and do not receive updates over the observation period.
  </p>

  <p>
    Finally, traffic patterns in encrypted unicast communication can still reveal device types and user activities to an in-network adversary.
  </p>

              </div>

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

        <Footer />
      </div>
    </>
  );
}
