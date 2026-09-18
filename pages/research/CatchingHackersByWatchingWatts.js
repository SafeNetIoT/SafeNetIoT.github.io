// pages/research/CatchingHackersByWatchingWatts.js
import Link from 'next/link';
import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import { Nav } from '../../components/Navbar';
import { SEO, navigation } from '../../config/config';

import paperImg from '../../images/research/CatchingHackersByWatchingWatts.png';

export default function CatchingHackersByWatchingWatts() {
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

          {/* Title */}
          <h1 className="text-primary fw-bold">
            Catching Hackers by Watching Watts: A Measurement Study of Power-Only Attack Detection on Consumer IoT Devices
          </h1>

          <div className="row justify-content-center mt-4">
            <div className="col-12 col-md-10 col-lg-8">

              {/* Meta info */}
              <p>
                <strong>Authors:</strong> Yuanyuan Zhou, Hashim Zia, Jiahui Qin, Sandra Siby, Anna Maria Mandalari
              </p>

              <p>
                <strong>Venue:</strong> IEEE Internet of Things Journal (Volume: 13, Issue: 16, 15 August 2026)
              </p>

              <p>
                <strong>DOI:</strong>{" "}
                <a
                  href="https://doi.org/10.1109/JIOT.2026.3702795"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary"
                >
                  https://doi.org/10.1109/JIOT.2026.3702795
                </a>
              </p>

              {/* Images Grid */}
              <div className="mt-5">
                <div className="row g-4 justify-content-center">

                  {/* Image 1 */}
                  <div className="col-12 col-md-8">
                    <img
                      src={paperImg.src}
                      alt="Catching Hackers by Watching Watts overview"
                      className="img-fluid border border-secondary"
                      style={{ width: '100%', height: 'auto', display: 'block' }}
                    />
                    <p className="text-center font-italic mt-2">
                      Power-only attack detection across 33 consumer IoT devices
                    </p>
                  </div>

                </div>
              </div>

              {/* Abstract */}
              <div className="mt-5">
                <h3 className="text-primary">Abstract</h3>

                <p>
                  Security analysis of consumer Internet of Things (IoT) devices is increasingly constrained by limited visibility into encrypted traffic and closed firmware, which motivates the exploration of observable and privacy-preserving external signals. Prior work has shown that adversarial activity can induce measurable changes in device power usage, indicating that power-based intrusion detection is feasible, yet its stability and reliability under realistic operating conditions remain unclear.
                </p>

                <p>
                  We address this gap through a systematic measurement study of 33 commercial IoT devices, collecting per-second power traces and complete background traffic logs during idle operation and realistic active use under denial of service (DoS) and reconnaissance attacks.
                </p>

                <p>
                  Our analysis shows that power usage provides clear separation between benign and adversarial behavior in stable idle states, while legitimate activity introduces masking that varies across devices. We identify four behavioral regimes that describe how activity suppresses or alters attack-related increments and analyze power stability and background traffic characteristics to explain the observed differences in detection strength.
                </p>

                <p>
                  Our findings provide the first systematic large-scale characterization of when power-based detection remains reliable and when it degrades, highlighting the physical and network conditions that govern its robustness in realistic deployments.
                </p>
              </div>

              {/* Resources */}
              <h3 className="text-primary mt-5">Resources</h3>

              <ul>
                <li>
                  <a
                    href="https://ieeexplore.ieee.org/abstract/document/11558329"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary"
                  >
                    Read the paper on IEEE Xplore
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/SafeNetIoT/PowerIDS"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary"
                  >
                    Code on GitHub
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
