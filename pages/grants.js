/* eslint-disable react/no-unescaped-entities */

import React, { Fragment } from 'react';
import Link from 'next/link';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { Nav } from '../components/Navbar';
import { SEO, navigation } from '../config/config';

import craneImg from '../images/grants/crane.png';

const GrantsPage = () => {
  return (
    <Fragment>
      <Header seo={SEO} />
      <Nav title={navigation.name} links={navigation.links} />

      <div className="d-flex flex-column justify-content-between bg-secondary min-vh-100">
        <div className="container py-5 px-3 px-sm-5">
          <h1 className="text-primary fw-bold text-left mb-4">Grants</h1>

          <div className="row justify-content-center mb-5">
            <div className="col-12 col-md-10 col-lg-8">
              <p className="text-primary lead text-left">
                Funded projects supporting our research into securing IoT systems across smart homes, healthcare, and industrial environments.
              </p>
            </div>
          </div>

          {/* Accepted Grants */}
          <div className="mb-5">
            <div className="d-flex align-items-center justify-content-between flex-wrap gap-2 mb-3">
              <h2 className="text-primary mb-0">Accepted Grants</h2>
              <span className="badge rounded-pill text-bg-light border text-primary">
                1 item
              </span>
            </div>



            {/* ── Year: 2026 ── */}
            <div className="mb-4">
              <h5 className="text-primary fw-bold mb-3">2026</h5>
              <div className="d-flex flex-column gap-3">

                {/* Item */}
                <div className="card border-0 shadow-sm">
                  <div className="card-body p-4">
                    <div className="d-flex gap-4 align-items-center flex-wrap">
                      <img
                        src={craneImg.src}
                        alt="CRANE"
                        style={{ width: '300px', height: 'auto', objectFit: 'contain', flexShrink: 0 }}
                      />
                      <div className="flex-grow-1" style={{ flexBasis: 0, minWidth: '250px' }}>
                        <div className="d-flex justify-content-between align-items-start gap-3 flex-wrap">
                          <div className="flex-grow-1">
                            <h5 className="text-dark fw-semibold mb-2">
                              Securing Wearable Medical Communication Through Neuromorphic-Inspired Anomaly Detection
                            </h5>
                            <p className="text-muted mb-2">
                              Anna Maria Mandalari (PI), Yuanyuan Zhou
                            </p>
                            <p className="text-muted mb-0">
                              <span className="fw-semibold">Funder:</span> CRANE Phase One Pilot Project (EPSRC)
                            </p>
                          </div>
                          <div className="d-flex gap-2">
                            <a
                              href="/grants/CRANE"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="btn btn-outline-primary btn-sm"
                            >
                              <i className="bi bi-box-arrow-up-right me-2"></i>
                              Read More
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
            {/* ── End Year: 2026 ── */}

            {/* Tiny hover polish without changing branding */}
            <style jsx>{`
              .card {
                transition: transform 120ms ease, box-shadow 120ms ease;
              }
              .card:hover {
                transform: translateY(-2px);
                box-shadow: 0 .5rem 1.25rem rgba(0,0,0,.08) !important;
              }
            `}</style>
          </div>
          {/* ── End Accepted Grants ── */}

        </div>

        <Footer />
      </div>
    </Fragment>
  );
};

export default GrantsPage;
