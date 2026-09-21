import Link from 'next/link';
import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import { Nav } from '../../components/Navbar';
import { SEO, navigation } from '../../config/config';
import kfasImg from '../../images/grants/kfas.png';

const title = 'Exploring the Limitations and Challenges of the Internet of Medical Things (IoMT) Devices';

export default function KfasGrant() {
  return (
    <>
      <Header seo={{
        ...SEO,
        title: 'KFAS Student Research Grant | SafeNetIoT',
        description: `${title}. A KFAS-funded student research project at UCL, November 2024 to June 2027.`,
      }} />
      <Nav title={navigation.name} links={navigation.links} />

      <div className="d-flex flex-column justify-content-between bg-secondary min-vh-100">
        <div className="container py-5 px-3 px-sm-5">
          <div className="mb-4">
            <Link href="/grants">
              <a className="text-primary">← Back to Grants</a>
            </Link>
          </div>

          <h1 className="text-primary fw-bold">{title}</h1>

          <div className="row justify-content-center mt-4">
            <div className="col-12 col-md-10 col-lg-8">
              <img
                src={kfasImg.src}
                alt="Kuwait Foundation for the Advancement of Sciences (KFAS)"
                width={kfasImg.width}
                height={kfasImg.height}
                className="mb-4"
                style={{ width: '300px', maxWidth: '100%', height: 'auto', objectFit: 'contain' }}
              />

              <p><strong>Student Researcher:</strong> Mohammad Alhussan</p>
              <p><strong>Supervisor:</strong> Dr Anna Maria Mandalari</p>
              <p><strong>Institution:</strong> University College London (UCL)</p>
              <p><strong>Funder:</strong> Kuwait Foundation for the Advancement of Sciences (KFAS)</p>
              <p><strong>Scheme:</strong> Student Research Grant</p>
              <p><strong>Funding:</strong> Approximately £25,000 (awarded amount: £24,900)</p>
              <p><strong>Project Code:</strong> CB24-18EE-01</p>
              <p><strong>Duration:</strong> 31 months (November 2024 – June 2027)</p>
              <p>
                <strong>Link:</strong>{' '}
                <a href="https://www.kfas.org/" target="_blank" rel="noopener noreferrer" className="text-primary">
                  Kuwait Foundation for the Advancement of Sciences
                </a>
              </p>

              <div className="mt-5">
                <h3 className="text-primary">Project Overview</h3>
                <p>
                  This KFAS Student Research Grant supports Mohammad Alhussan&apos;s research at University College London,
                  under the supervision of Dr Anna Maria Mandalari. The project explores the limitations and challenges
                  of Internet of Medical Things (IoMT) devices.
                </p>
              </div>

              <div className="mt-4">
                <h3 className="text-primary">Funding Acknowledgement</h3>
                <p>
                  The project was partially funded by Kuwait Foundation for the Advancement of Sciences (KFAS)
                  under project code “CB24-18EE-01”.
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
