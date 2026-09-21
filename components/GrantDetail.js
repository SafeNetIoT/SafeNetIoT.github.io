import Link from 'next/link';
import { Footer } from './Footer';
import { Header } from './Header';
import { Nav } from './Navbar';
import { SEO, navigation } from '../config/config';

export const GrantDetail = ({ title, description, image, imageAlt, children }) => (
  <>
    <Header seo={{ ...SEO, title: `${title} | SafeNetIoT`, description }} />
    <Nav title={navigation.name} links={navigation.links} />

    <div className="d-flex flex-column justify-content-between bg-secondary min-vh-100">
      <main className="container py-5 px-3 px-sm-5">
        <div className="mb-4">
          <Link href="/grants">
            <a className="text-primary">← Back to Grants</a>
          </Link>
        </div>

        <h1 className="text-primary fw-bold">{title}</h1>

        <div className="row justify-content-center mt-4">
          <div className="col-12 col-md-10 col-lg-8">
            <div className="grant-detail-logo mb-4">
              <img src={image.src} alt={imageAlt} />
            </div>
            {children}
          </div>
        </div>
      </main>

      <Footer />
    </div>

    <style jsx>{`
      .grant-detail-logo {
        align-items: center;
        display: flex;
        justify-content: flex-start;
        min-height: 150px;
      }
      .grant-detail-logo img {
        height: auto;
        max-height: 240px;
        max-width: min(100%, 560px);
        object-fit: contain;
        width: auto;
      }
    `}</style>
  </>
);
