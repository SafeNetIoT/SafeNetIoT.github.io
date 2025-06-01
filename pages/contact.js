import React, { Fragment } from 'react';
import Link from 'next/link';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { Nav } from '../components/Navbar';
import { SEO, navigation } from '../config/config';

const ContactPage = () => {
  return (
    <Fragment>
      <Header seo={SEO} />
      <Nav title={navigation.name} links={navigation.links} />

      <div className="d-flex flex-column justify-content-between bg-secondary min-vh-100">
        <div className="container py-5 px-3 px-sm-5">

          <h1 className="text-primary fw-bold text-left mb-4">Contact Us</h1>

          <div className="row justify-content-center mb-5">
            <div className="col-12 col-md-10 col-lg-8">
              <p className="text-primary lead text-left">
                Get in touch with the SafeNetIoT Lab at the UCL Department of Electronic and Electrical Engineering.
                We welcome collaboration inquiries, research questions, and visitor requests.
              </p>
            </div>
          </div>

          <div className="row mb-5">
            <div className="col-md-6 mb-4">
              <div className="card h-100">
                <div className="card-body">
                  <h2 className="text-primary mb-4">Our Location</h2>
                  <h4 className="mb-3">Roberts Building</h4>
                  <p className="mb-4">
                    Torrington Place<br />
                    London WC1E 7JE<br />
                    United Kingdom
                  </p>

                  <h2 className="text-primary mb-4">Primary Contact</h2>
                  <p className="mb-4">
                    <strong>Dr. Anna Mandalari</strong><br />
                    Director, SafeNetIoT Lab<br />
                    <a href="mailto:a.mandalari@ucl.ac.uk" className="text-decoration-none">
                      anna.mandalari@ucl.ac.uk
                    </a>
                  </p>

                  <div className="d-flex gap-2">
                    <a
                      href="mailto:anna.mandalari@ucl.ac.uk"
                      className="btn btn-primary"
                    >
                      Email Us
                    </a>
                    <a
                      href="https://www.ucl.ac.uk/engineering/about/getting-here"
                      className="btn btn-outline-primary"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Directions
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-6 mb-4">
              <div className="card h-100">
                <div className="card-body p-0">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2482.412703024877!2d-0.13497268422938252!3d51.52382217963797!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761b2f016b5a65%3A0x2a199e1a0a1a5b9!2sRoberts%20Building!5e0!3m2!1sen!2suk!4v1620000000000!5m2!1sen!2suk"
                    width="100%"
                    height="100%"
                    style={{ border: 0, minHeight: '400px' }}
                    allowFullScreen=""
                    loading="lazy"
                    title="Map to Roberts Building">
                  </iframe>
                </div>
              </div>
            </div>
          </div>

          <div className="card mb-5">
            <div className="card-body">
              <h2 className="text-primary mb-4">Contact Form</h2>
              <form>
                <div className="row mb-3">
                  <div className="col-md-6 mb-3 mb-md-0">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input type="text" className="form-control" id="name" required />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="email" className="form-control" id="email" required />
                  </div>
                </div>
                <div className="mb-3">
                  <label htmlFor="subject" className="form-label">Subject</label>
                  <input type="text" className="form-control" id="subject" required />
                </div>
                <div className="mb-3">
                  <label htmlFor="message" className="form-label">Message</label>
                  <textarea className="form-control" id="message" rows="5" required></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Send Message</button>
              </form>
            </div>
          </div>

        </div>

        <Footer />
      </div>
    </Fragment>
  );
};

export default ContactPage;