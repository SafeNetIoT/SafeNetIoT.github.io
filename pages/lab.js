import React, { Fragment } from 'react';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { Nav } from '../components/Navbar';
import { SEO, navigation } from '../config/config';

const LabPage = () => {
  return (
    <Fragment>
      <Header seo={SEO} />
      <Nav title={navigation.name} links={navigation.links} />

      <div className="d-flex flex-column justify-content-between bg-primary min-vh-100">
        <div className="container py-5 px-3 px-sm-5">
          <h1 className="text-light fw-bold text-left mb-4">Our Lab</h1>

          <div className="row justify-content-center mb-5">
            <div className="col-12 col-md-10 col-lg-8">
              <p className="text-light lead text-left">
                This video tours our advanced research facility dedicated to securing connected devices and networks. See real-time vulnerability testing of smart home systems, industrial IoT prototypes under stress analysis, and collaborative spaces where we develop encryption frameworks and privacy-preserving architectures. Learn how we are combatting emerging cyberthreats in an increasingly connected world.
              </p>
            </div>
          </div>

          <div className="row justify-content-left">
            <div className="col-12 col-lg-10">
              <div className="ratio ratio-16x9">
                <iframe
                  src="https://www.youtube.com/embed/0fg0acuRbUA?si=zwN-CGzefdqRgPmv"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                  style={{ borderRadius: '15px', overflow: 'hidden' }}
                ></iframe>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </Fragment>
  );
};

export default LabPage;