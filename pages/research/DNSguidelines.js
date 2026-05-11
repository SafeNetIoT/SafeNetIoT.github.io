// pages/research/DNSguidelines.js
import Link from 'next/link';
import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import { Nav } from '../../components/Navbar';
import { SEO, navigation } from '../../config/config';
import dnsRetryImage from '../../DNSguidelines_images/dnsretry.png';
import dnsTtlImage from '../../DNSguidelines_images/dnsttl.png';
import dnsIqtImage from '../../DNSguidelines_images/dnsiqt.png';

export default function DNSGuidelines() {
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

          <h1 className="text-primary fw-bold">
            From Lookup to Lockdown: DNS Guidelines for Securing IoT Ecosystems
          </h1>

          <div className="row justify-content-center mt-4">
            <div className="col-12 col-md-10 col-lg-8">

              <p>
                <strong>Authors:</strong> A. Losty, A.K. Mishra, M. Cunche,
                A. M. Mandalari
              </p>

              <p>
                <strong>Venue:</strong> IEEE Internet of Things Journal
              </p>

              <p>
                <strong>Published in:</strong> IEEE Internet of Things Journal
                (Early Access)
              </p>

              <p>
                <strong>DOI:</strong> 10.1109/JIOT.2026.3680083
              </p>

<div className="mt-5 text-center">

  <img
    src={dnsRetryImage.src}
    alt="DNS Retry Guidelines"
    className="img-fluid border border-secondary"
    style={{
      maxWidth: '750px',
      width: '100%',
      height: 'auto',
      display: 'block',
      margin: '0 auto'
    }}
  />
  <p className="text-center font-italic mt-2">
    DNS Retry Guidelines
  </p>

  <img
    src={dnsTtlImage.src}
    alt="DNS TTL Guidelines"
    className="img-fluid border border-secondary mt-4"
    style={{
      maxWidth: '750px',
      width: '100%',
      height: 'auto',
      display: 'block',
      margin: '0 auto'
    }}
  />
  <p className="text-center font-italic mt-2">
    DNS TTL Guidelines
  </p>

  <img
    src={dnsIqtImage.src}
    alt="DNS IQT Guidelines"
    className="img-fluid border border-secondary mt-4"
    style={{
      maxWidth: '750px',
      width: '100%',
      height: 'auto',
      display: 'block',
      margin: '0 auto'
    }}
  />
  <p className="text-center font-italic mt-2">
    DNS IQT Guidelines
  </p>

</div>



                  

              <div className="mt-5">
                <h3 className="text-primary">Abstract</h3>

                <p>
                  The Domain Name System (DNS) serves as a fundamental component
                  of Internet infrastructure; however, its frequently overlooked
                  role in consumer Internet of Things (IoT) ecosystems exposes
                  significant security vulnerabilities and operational challenges.
                </p>

                <p>
                  This paper analyzes DNS behavior in consumer IoT devices and
                  reveals widespread inconsistencies that undermine operational
                  efficiency, resilience, and security.
                </p>

                <p>
                  We construct a representative testbed spanning a heterogeneous
                  set of IoT devices and employ both passive traffic monitoring
                  and active experimentation to identify vulnerabilities,
                  including cache poisoning, predictable transaction IDs,
                  non-randomized source ports, and limited adoption of secure
                  DNS protocols such as DNS-over-HTTPS (DoH), DNS-over-TLS
                  (DoT), and Domain Name System Security Extensions (DNSSEC).
                </p>

                <p>
                  We observe erratic operational patterns, such as excessive
                  querying, poor adherence to TTL values, and overreliance on
                  hard-coded resolvers, that amplify exposure to fingerprinting
                  and denial-of-service attacks.
                </p>

                <p>
                  Our findings demonstrate a concerning lack of standardized DNS
                  practices across the IoT ecosystem.
                </p>

                <p>
                  We conclude by proposing actionable guidelines to harden DNS
                  handling in IoT devices and improve security, interoperability,
                  and network stability as the consumer IoT landscape continues
                  to expand.
                </p>

                <h3 className="text-primary mt-5">Resources</h3>

                <ul>
                  <li>
                    <a
                      href="https://ieeexplore.ieee.org/document/11471802"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary"
                    >
                      Read the paper on IEEE Xplore
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
