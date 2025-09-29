import React, { Fragment } from 'react';
import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import { Nav } from '../../components/Navbar';
import { SEO, navigation } from '../../config/config';

const CrownPrince2025 = () => {
  return (
    <Fragment>
      <Header seo={SEO} />
      <Nav title={navigation.name} links={navigation.links} />
      <div className="d-flex flex-column justify-content-between bg-primary min-vh-100">
        <div className="py-5 px-5 container">
          <h1 className="text-secondary fw-bold text-left mb-3">
            Recognition by H.H. the Crown Prince of Kuwait in London
          </h1>
          <h5 className="text-muted mb-4">September 2025</h5>

          <p className="text-secondary lead">
            Mohammad Alhussan, PhD candidate at UCL Electronic & Electrical Engineering
            and member of the SafeNetIoT Lab, was honored to meet His Highness the Crown Prince
            Sheikh Sabah Khaled Al-Hamad Al-Sabah during a gathering with distinguished Kuwaiti students in London.
            The occasion also included the Ambassador of Kuwait and the leadership of the Cultural Office.
            Special appreciation to Dr. Abdullah Al-Meshal (Cultural Counselor & Head of the Cultural Office)
            and Dr. Hessah Alojayan (Cultural Attaché) for their invitation and excellent organization.
            This recognition highlights the continued academic excellence and representation of Kuwaiti students abroad.
          </p>

          <div className="row mb-4">
            <div className="col-md-6 mb-3">
              <img
                src="/images/news/crown-prince-london.jpeg"
                alt="Mohammad Alhussan with H.H. the Crown Prince of Kuwait in London"
                className="img-fluid rounded shadow"
              />
            </div>
            <div className="col-md-6 mb-3">
              <img
                src="/images/news/cultural-office-london.jpeg"
                alt="Mohammad Alhussan with Dr. Abdullah Al-Meshal and Dr. Hessah Alojayan in London"
                className="img-fluid rounded shadow"
              />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </Fragment>
  );
};

export default CrownPrince2025;
