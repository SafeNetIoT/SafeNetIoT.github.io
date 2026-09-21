/* eslint-disable react/no-unescaped-entities */

import React, { Fragment } from 'react';
import Link from 'next/link';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { Nav } from '../components/Navbar';
import { SEO, navigation } from '../config/config';

import craneImg from '../images/grants/crane.png';
import epsrcImg from '../images/grants/epsrc.png';
import icureImg from '../images/grants/icure-discover.png';
import kfasImg from '../images/grants/kfas.png';
import nntiImg from '../images/grants/nnti.png';
import uclIeImg from '../images/grants/ucl-ie.jpg';

const grantsByYear = [
  {
    year: '2026',
    grants: [
      {
        title: 'CYBERMED: Dual-Communication Security for Wearable Medical Devices Using Intra-Body Communication - Phase 2',
        people: 'Dr Anna Maria Mandalari (Project Lead), Mohammad Alhussan, Dr Francesca Boem and Aurelio Loris Canino',
        funder: 'UCL Innovation & Enterprise',
        scheme: 'HEIF ESC Innovation Funding',
        image: uclIeImg,
        imageAlt: 'UCL Innovation and Enterprise - CYBERMED Phase 2',
        href: '/grants/UCL-IE',
      },
      {
        title: 'BODYCOM: Body-Coupled Networking for Reliable Wearable Medical Communication',
        people: 'Dr Anna Maria Mandalari (PI), Mohammad Alhussan, Aurelio Loris Canino and Dr Francesca Boem',
        funder: 'Huawei-UCL NNTI Joint Laboratory',
        scheme: 'Base Exploratory Project',
        funding: '£62,500',
        image: nntiImg,
        imageAlt: 'Huawei NNTI Joint Laboratory',
        href: '/grants/NNTI',
      },
      {
        title: 'ICURe Discover Programme',
        people: 'Mohammad Alhussan',
        funder: 'Innovate UK',
        scheme: 'ICURe Discover, delivered by The Helix Way',
        funding: 'Up to £2,500',
        image: icureImg,
        imageAlt: 'UKRI, Innovate UK and ICURe Discover',
        href: '/grants/ICURe-Discover',
      },
      {
        title: 'Securing Wearable Medical Communication Through Neuromorphic-Inspired Anomaly Detection',
        people: 'Dr Anna Maria Mandalari (PI), Yuanyuan Zhou',
        funder: 'CRANE Phase One Pilot Project (EPSRC)',
        image: craneImg,
        imageAlt: 'CRANE',
        href: '/grants/CRANE',
      },
    ],
  },
  {
    year: '2025',
    grants: [
      {
        title: 'CYBERMED: Dual-Communication Security for Wearable Medical Devices Using Intra-Body Communication',
        people: 'Dr Anna Maria Mandalari (PI), Mohammad Alhussan, Dr Francesca Boem and Aurelio Loris Canino',
        funder: 'EPSRC via UCL Innovation & Enterprise',
        scheme: 'EPSRC IAA Uplift',
        funding: '£30,000',
        image: epsrcImg,
        imageAlt: 'Engineering and Physical Sciences Research Council (EPSRC)',
        href: '/grants/EPSRC-IAA-Uplift',
      },
      {
        title: 'CYBERMED: Dual-Communication Security for Wearable Medical Devices Using Intra-Body Communication',
        people: 'Dr Anna Maria Mandalari (PI), Mohammad Alhussan, Dr Francesca Boem and Aurelio Loris Canino',
        funder: 'EPSRC Impact Acceleration Account',
        scheme: 'Discovery to Use',
        funding: 'Approximately £30,000',
        image: epsrcImg,
        imageAlt: 'Engineering and Physical Sciences Research Council (EPSRC)',
        href: '/grants/EPSRC-IAA',
      },
    ],
  },
  {
    year: '2024',
    grants: [
      {
        title: 'Exploring the Limitations and Challenges of the Internet of Medical Things (IoMT) Devices',
        people: 'Mohammad Alhussan (Student Researcher), Dr Anna Maria Mandalari (Supervisor)',
        funder: 'Kuwait Foundation for the Advancement of Sciences (KFAS)',
        funding: 'Approximately £25,000',
        image: kfasImg,
        imageAlt: 'Kuwait Foundation for the Advancement of Sciences (KFAS)',
        href: '/grants/KFAS',
      },
    ],
  },
];

const GrantCard = ({ grant }) => (
  <div className="card border-0 shadow-sm">
    <div className="card-body p-4">
      <div className="d-flex gap-4 align-items-center flex-wrap">
        <div className="grant-image-wrap">
          <img src={grant.image.src} alt={grant.imageAlt} />
        </div>
        <div className="flex-grow-1 grant-copy">
          {grant.scheme && (
            <span className="badge rounded-pill text-bg-light border text-primary mb-2">
              {grant.scheme}
            </span>
          )}
          <h5 className="text-dark fw-semibold mb-2">{grant.title}</h5>
          <p className="text-muted mb-2">{grant.people}</p>
          <p className={grant.funding ? 'text-muted mb-2' : 'text-muted mb-3'}>
            <span className="fw-semibold">Funder:</span> {grant.funder}
          </p>
          {grant.funding && (
            <p className="text-muted mb-3">
              <span className="fw-semibold">Funding:</span> {grant.funding}
            </p>
          )}
          <Link href={grant.href}>
            <a className="btn btn-outline-primary btn-sm" aria-label={`Read more about ${grant.title}`}>
              Read More
            </a>
          </Link>
        </div>
      </div>
    </div>
  </div>
);

const GrantsPage = () => (
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

        <div className="mb-5">
          <div className="d-flex align-items-center justify-content-between flex-wrap gap-2 mb-3">
            <h2 className="text-primary mb-0">Accepted Grants</h2>
            <span className="badge rounded-pill text-bg-light border text-primary">7 items</span>
          </div>

          {grantsByYear.map(({ year, grants }) => (
            <div className="mb-4" key={year}>
              <h5 className="text-primary fw-bold mb-3">{year}</h5>
              <div className="d-flex flex-column gap-3">
                {grants.map((grant) => <GrantCard grant={grant} key={grant.href} />)}
              </div>
            </div>
          ))}

          <style jsx global>{`
            .card {
              transition: transform 120ms ease, box-shadow 120ms ease;
            }
            .card:hover {
              transform: translateY(-2px);
              box-shadow: 0 .5rem 1.25rem rgba(0,0,0,.08) !important;
            }
            .grant-image-wrap {
              align-items: center;
              display: flex;
              flex: 0 0 280px;
              justify-content: center;
              min-height: 150px;
              width: 280px;
            }
            .grant-image-wrap img {
              height: auto;
              max-height: 170px;
              max-width: 100%;
              object-fit: contain;
              width: auto;
            }
            .grant-copy {
              flex-basis: 320px;
              min-width: 0;
            }
            @media (max-width: 575.98px) {
              .grant-image-wrap {
                flex-basis: 100%;
                min-height: 110px;
                width: 100%;
              }
            }
          `}</style>
        </div>
      </div>

      <Footer />
    </div>
  </Fragment>
);

export default GrantsPage;
