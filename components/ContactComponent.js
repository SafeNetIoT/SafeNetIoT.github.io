import { Nav } from './Navbar'; // Replace with the actual path to Nav.js

const ContactComponent = () => {
  const navigationData = {
    title: "SafeNet IoT", // Customize with your application title
    links: [
      { title: "People", link: "/people" },
      { title: "Research", link: "/research" },
      { title: "Publications", link: "/publications" },
      { title: "Events", link: "/events" },
      { title: "Lab", link: "/lab" },
      { title: "Resources", link: "/resources" },
      { title: "Contact", link: "/contact" }
    ],
  };
  return (
    <div>
      <Nav {...navigationData} />
      <div id="Contact Us" className="bg-secondary py-5 px-5">
        <div className="container">
          <h1 className="text-primary fw-bold">Contact Us</h1>
          <p>Feel free to reach out with any questions or inquiries.</p>

          <div className="row">
            <div className="fw-bold col-md-6">
              <img src="https://maps.googleapis.com/maps/api/staticmap?center=51.524664,-0.118132&zoom=17&size=400x300&markers=color:red%7Clabel:R%7C51.524664,-0.118132" alt="UCL Roberts Building Map" className="img-fluid" />
            </div>
            <div className="col-md-6">
              <h2>Contact Information</h2>
              <p>
                <strong>Address:</strong><br />
                Roberts Building<br />
                University College London<br />
                Torrington Place<br />
                London WC1E 7JE
              </p>
              <p>
                <strong>Tel:</strong><br />
                +44(0)20 3108 1123
              </p>
            </div>
          </div>

          <form>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Name</label>
              <input type="text" className="form-control" id="name" placeholder="Your Name" />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email address</label>
              <input type="email" className="form-control" id="email" placeholder="your.email@example.com" />
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-label">Message</label>
              <textarea className="form-control" id="message" rows="3"></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        </div>
      </div>
      /</div>
  );
}

export default ContactComponent;