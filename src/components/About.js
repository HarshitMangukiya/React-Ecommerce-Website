import React from "react";


const About = () => {

  return (
    <div>
    
      <div className="d-flex justify-content-center">
        <h1 className="wallpaperpicture">ABOUT US  </h1>
      </div>
      <div className="img-fluid">
        <img
          src="./image/daniel.jpg"
          className="d-block w-100 heightimage1"
          alt="..."
        />
      </div>
      <div className="container">
        <div className="card mb-3 border-0 my-5">
          <div className="row g-0">
            <div className="col-md-4">
              <img
                src="./image/11.jpg"
                className="img-fluid rounded-start rounded-3"
                alt="..."
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">Company</h5>
                <p className="card-text">
                  Maxsavecloth is a family of brands and businesses, making it
                  possible for customers around the world to express themselves
                  through fashion and design, and to choose a more sustainable
                  lifestyle. We create value for people and society in general
                  by delivering our customer offering and by developing with a
                  focus on sustainable and profitable growth.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="card mb-3 border-0 my-5">
          <div className="row g-0">
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">Company History</h5>
                <p className="card-text">
                Maxsavecloth is a family of brands and businesses, making it
                  possible for customers around the world to express themselves
                  through fashion and design, and to choose a more sustainable
                  lifestyle. We create value for people and society in general
                  by delivering our customer offering and by developing with a
                  focus on sustainable and profitable growth.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <img
                src="./image/12.jpg"
                className="img-fluid rounded-start rounded-3"
                alt="..."
              />
            </div>
          </div>
        </div>
      </div>
      <section className="container py-3 py-lg-5 mt-4 mb-3">
          <h2 className="h3 my-2">Our core team</h2>
          <p className="fs-sm text-muted">People behind your great shopping experience</p>
          <div className="row pt-3">
            <div className="col-lg-4 col-sm-6 mb-grid-gutter my-3">
              <div className="d-flex align-items-center"><img className="rounded-circle" src="./image/03.jpeg" width="96" alt="Jonathan Doe" />
                <div className="ps-3">
                  <h6 className="fs-base pt-1 mb-1">Jonathan Doe</h6>
                  <p className="fs-ms text-muted mb-0">CEO, Co-founder</p><a className="nav-link-style fs-ms text-nowrap" href="mailto:johndoe@example.com"><i className="ci-mail me-2"></i>johndoe@example.com</a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 mb-grid-gutter my-3">
              <div className="d-flex align-items-center"><img className="rounded-circle" src="./image/04.jpeg" width="96" alt="Barbara Palson" />
                <div className="ps-3">
                  <h6 className="fs-base pt-1 mb-1">Barbara Palson</h6>
                  <p className="fs-ms text-muted mb-0">Chief of Marketing</p><a className="nav-link-style fs-ms text-nowrap" href="mailto:b.palson@example.com"><i className="ci-mail me-2"></i>b.palson@example.com</a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 mb-grid-gutter my-3">
              <div className="d-flex align-items-center"><img className="rounded-circle" src="./image/06.jpeg" width="96" alt="William Smith" />
                <div className="ps-3">
                  <h6 className="fs-base pt-1 mb-1">William Smith</h6>
                  <p className="fs-ms text-muted mb-0">Financial director</p><a className="nav-link-style fs-ms text-nowrap" href="mailto:w.smith@example.com"><i className="ci-mail me-2"></i>w.smith@example.com</a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 mb-grid-gutter my-3">
              <div className="d-flex align-items-center"><img className="rounded-circle" src="./image/02.jpeg" width="96" alt="Amanda Gallaher" />
                <div className="ps-3">
                  <h6 className="fs-base pt-1 mb-1">Amanda Gallaher</h6>
                  <p className="fs-ms text-muted mb-0">Lead UX designer</p><a className="nav-link-style fs-ms text-nowrap" href="mailto:a.gallaher@example.com"><i className="ci-mail me-2"></i>a.gallaher@example.com</a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 mb-grid-gutter my-3">
              <div className="d-flex align-items-center"><img className="rounded-circle" src="./image/02.jpeg" width="96" alt="Benjamin Miller" />
                <div className="ps-3">
                  <h6 className="fs-base pt-1 mb-1">Benjamin Miller</h6>
                  <p className="fs-ms text-muted mb-0">Website development</p><a className="nav-link-style fs-ms text-nowrap" href="mailto:b.miller@example.com"><i className="ci-mail me-2"></i>b.miller@example.com</a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 mb-grid-gutter my-3">
              <div className="d-flex align-items-center"><img className="rounded-circle" src="./image/07.jpeg" width="96" alt="Miguel Rodrigez" />
                <div className="ps-3">
                  <h6 className="fs-base pt-1 mb-1">Miguel Rodrigez</h6>
                  <p className="fs-ms text-muted mb-0">Content manager</p><a className="nav-link-style fs-ms text-nowrap" href="mailto:b.miller@example.com"><i className="ci-mail me-2"></i>m.rodrigez@example.com</a>
                </div>
              </div>
            </div>
          </div>
        </section>
    </div>
  );
};

export default About;
