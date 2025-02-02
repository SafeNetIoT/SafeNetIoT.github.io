import React, { Fragment } from 'react';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { Nav } from '../components/Navbar'; // Import the Nav component
import { about, SEO, navigation } from '../config/config'; // Import navigation from config

const NewsPage = () => {
  return (
    <Fragment>
      <Header seo={SEO} />
      <Nav
        title={navigation.name}
        links={navigation.links}
      />
      <div className="d-flex flex-column justify-content-between bg-primary min-vh-100">
        <div className="py-5 px-5 container">

          <h1 className="text-secondary fw-bold text-left mb-5">All News</h1>

          {/* Short Description */}
          <div className="row justify-content-center mb-5">
            <div className="col-12 col-md-10 col-lg-8">
              <p className="text-secondary lead text-left">
                The latest updates on our achievements, events, and collaborations.
                <div>
                  - Award Wins: Celebrating our recognition for excellence in IoT security research and innovation.
                </div>
                <div>
                  - Conferences: Highlights of conferences we have organized, attended, or presented at, showcasing our contributions to the global IoT community.
                </div>
                <div>
                  - Speakers: Insights from renowned experts and thought leaders who have shared their knowledge at our events.
                </div>
              </p>
            </div>
          </div>



          <div className="row">
            {about.news.map((item, index) => (
              <div key={index} className="col-md-6 col-lg-4 mb-4">
                <div className="card h-100">
                  <img
                    src={item.image}
                    alt={`News from ${item.date}`}
                    className="card-img-top"
                    style={{ height: '200px', objectFit: 'cover' }}
                  />
                  <div className="card-body">
                    <h5 className="card-title text-primary">{item.date}</h5>
                    <p className="card-text text-primary">{item.description}</p>
                    <a href={item.link} className="btn btn-outline-primary">
                      Learn More
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <Footer />
      </div>
    </Fragment>
  );
};

export default NewsPage;