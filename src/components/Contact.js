import React from "react";

const Contact = () => {
  return (
    <div>
      <div className="d-flex justify-content-center">
        <h1 className="wallpaperpicture">CONTACT US</h1>
      </div>
      <div className="img-fluid">
        <img
          src="./image/daniel.jpg" 
          className="d-block w-100 heightimage1"
          alt="..."
        />
      </div>
      <section className="container pt-grid-gutter my-5">
        <div className="row">
          <div className="col-xl-3 col-sm-6 mb-grid-gutter">
            <a className="card h-100" href="#map" data-scroll="">
              <div className="card-body text-center">
                <i className="ci-location h3 mt-2 mb-4 text-primary"></i>
                <h3 className="h6 mb-3 contact-textstyle">Main store address</h3>
                <p className="fs-sm text-muted contact-textstyle">
                  396 Lillian Blvd, Holbrook, NY 11741, USA
                </p>
              </div>
            </a>
          </div>
          <div className="col-xl-3 col-sm-6 mb-grid-gutter">
            <div className="card h-100">
              <div className="card-body text-center">
                <i className="ci-time h3 mt-2 mb-4 text-primary"></i>
                <h3 className="h6 mb-3">Working hours</h3>
                <ul className="list-unstyled fs-sm text-muted mb-0">
                  <li>Mon - Fri: 10AM - 7PM</li>
                  <li className="mb-0">Sta: 11AM - 5PM</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-sm-6 mb-grid-gutter">
            <div className="card h-100">
              <div className="card-body text-center">
                <i className="ci-phone h3 mt-2 mb-4 text-primary"></i>
                <h3 className="h6 mb-3">Phone numbers</h3>
                <ul className="list-unstyled fs-sm mb-0">
                  <li>
                    <span className="text-muted me-1">For customers:</span>
                    <a className="nav-link-style" href="tel:+108044357260">
                      +1 (080) 44 357 260
                    </a>
                  </li>
                  <li className="mb-0">
                    <span className="text-muted me-1">Tech support:</span>
                    <a className="nav-link-style" href="tel:+100331697720">
                      +1 00 33 169 7720
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-sm-6 mb-grid-gutter">
            <div className="card h-100">
              <div className="card-body text-center">
                <i className="ci-mail h3 mt-2 mb-4 text-primary"></i>
                <h3 className="h6 mb-3">Email addresses</h3>
                <ul className="list-unstyled fs-sm mb-0">
                  <li>
                    <span className="text-muted me-1">For customers:</span>
                    <a className="nav-link-style" href="mailto:+108044357260">
                      customer@example.com
                    </a>
                  </li>
                  <li className="mb-0">
                    <span className="text-muted me-1">Tech support:</span>
                    <a
                      className="nav-link-style"
                      href="mailto:support@example.com"
                    >
                      support@example.com
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="container mt-md-4 mb-5">
        <h2 className="h3 text-center mb-3">Partner outlet stores</h2>
        <div className="row pt-4">
          <div className="col-md-4 col-sm-6 mb-grid-gutter">
            <div className="card border-0 shadow">
              <img
                className="card-img-top"
                src="./image/orlando.jpeg"
                alt="Orlando"
              />
              <div className="card-body">
                <h6>Orlando, USA</h6>
                <ul className="list-unstyled mb-0">
                  <li className="d-flex pb-3 border-bottom">
                    <i className="ci-location fs-lg mt-2 mb-0 text-primary"></i>
                    <div className="ps-3">
                      <span className="fs-ms text-muted">Find us</span>
                      <a className="d-block text-heading fs-sm" href="#">
                        514 S. Magnolia St. Orlando, FL 32806, USA
                      </a>
                    </div>
                  </li>
                  <li className="d-flex pt-2 pb-3 border-bottom">
                    <i className="ci-phone fs-lg mt-2 mb-0 text-primary"></i>
                    <div className="ps-3">
                      <span className="fs-ms text-muted">Call us</span>
                      <a
                        className="d-block text-heading fs-sm"
                        href="tel:+178632256040"
                      >
                        +1 (786) 322 560 40
                      </a>
                    </div>
                  </li>
                  <li className="d-flex pt-2">
                    <i className="ci-mail fs-lg mt-2 mb-0 text-primary"></i>
                    <div className="ps-3">
                      <span className="fs-ms text-muted">Write us</span>
                      <a
                        className="d-block text-heading fs-sm"
                        href="mailto:orlando@example.com"
                      >
                        orlando@example.com
                      </a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-6 mb-grid-gutter">
            <div className="card border-0 shadow">
              <img
                className="card-img-top"
                src="./image/orlando.jpeg"
                alt="Chicago"
              />
              <div className="card-body">
                <h6>Chicago, USA</h6>
                <ul className="list-unstyled mb-0">
                  <li className="d-flex pb-3 border-bottom">
                    <i className="ci-location fs-lg mt-2 mb-0 text-primary"></i>
                    <div className="ps-3">
                      <span className="fs-ms text-muted">Find us</span>
                      <a className="d-block text-heading fs-sm" href="#">
                        769, Industrial, West Chicago, IL 60185, USA
                      </a>
                    </div>
                  </li>
                  <li className="d-flex pt-2 pb-3 border-bottom">
                    <i className="ci-phone fs-lg mt-2 mb-0 text-primary"></i>
                    <div className="ps-3">
                      <span className="fs-ms text-muted">Call us</span>
                      <a
                        className="d-block text-heading fs-sm"
                        href="tel:+184725276533"
                      >
                        +1 (847) 252 765 33
                      </a>
                    </div>
                  </li>
                  <li className="d-flex pt-2">
                    <i className="ci-mail fs-lg mt-2 mb-0 text-primary"></i>
                    <div className="ps-3">
                      <span className="fs-ms text-muted">Write us</span>
                      <a
                        className="d-block text-heading fs-sm"
                        href="mailto:chicago@example.com"
                      >
                        chicago@example.com
                      </a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-12 mb-grid-gutter">
            <div className="card border-0 shadow">
              <img
                className="card-img-top"
                src="./image/orlando.jpeg"
                alt="New York"
              />
              <div className="card-body">
                <h6>New York, USA</h6>
                <ul className="list-unstyled mb-0">
                  <li className="d-flex pb-3 border-bottom">
                    <i className="ci-location fs-lg mt-2 mb-0 text-primary"></i>
                    <div className="ps-3">
                      <span className="fs-ms text-muted">Find us</span>
                      <a className="d-block text-heading fs-sm" href="#">
                        396 Lillian Blvd, Holbrook, NY 11741, USA
                      </a>
                    </div>
                  </li>
                  <li className="d-flex pt-2 pb-3 border-bottom">
                    <i className="ci-phone fs-lg mt-2 mb-0 text-primary"></i>
                    <div className="ps-3">
                      <span className="fs-ms text-muted">Call us</span>
                      <a
                        className="d-block text-heading fs-sm"
                        href="tel:+1212477690000"
                      >
                        +1 (212) 477 690 000
                      </a>
                    </div>
                  </li>
                  <li className="d-flex pt-2">
                    <i className="ci-mail fs-lg mt-2 mb-0 text-primary"></i>
                    <div className="ps-3">
                      <span className="fs-ms text-muted">Write us</span>
                      <a
                        className="d-block text-heading fs-sm"
                        href="mailto:newyork@example.com"
                      >
                        newyork@example.com
                      </a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="container" id="map">
        <div className="row g-0">
          <div className="col-lg-6 my-1 iframe-full-height-wrap">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3718.9727259177967!2d72.83436221744384!3d21.232930099999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04ec5a6286edb%3A0x31cbe334a785bfbf!2sV%20Plaza!5e0!3m2!1sen!2sin!4v1650964767937!5m2!1sen!2sin"
            className="mapsize"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="col-lg-6 px-4 my-1 px-xl-5 ">
            <h2 className="h4 mb-4">Contact Us</h2>
            <form className="needs-validation mb-3">
              <div className="row g-3">
                <div className="col-sm-6">
                  <label className="form-label" htmlFor="cf-name">
                    Your name:&nbsp;<span className="text-danger">*</span>
                  </label>
                  <input
                    className="form-control"
                    type="text"
                    id="cf-name"
                    placeholder="John Doe"
                    required=""
                  />
                  <div className="invalid-feedback">
                    Please fill in you name!
                  </div>
                </div>
                <div className="col-sm-6">
                  <label className="form-label" htmlFor="cf-email">
                    Email address:&nbsp;<span className="text-danger">*</span>
                  </label>
                  <input
                    className="form-control"
                    type="email"
                    id="cf-email"
                    placeholder="johndoe@email.com"
                    required=""
                  />
                  <div className="invalid-feedback">
                    Please provide valid email address!
                  </div>
                </div>
                <div className="col-sm-6">
                  <label className="form-label" htmlFor="cf-phone">
                    Your phone:&nbsp;<span className="text-danger">*</span>
                  </label>
                  <input
                    className="form-control"
                    type="text"
                    id="cf-phone"
                    placeholder="+1 (212) 00 000 000"
                    required=""
                  />
                  <div className="invalid-feedback">
                    Please provide valid phone number!
                  </div>
                </div>
                <div className="col-sm-6">
                  <label className="form-label" htmlFor="cf-subject">
                    Subject:
                  </label>
                  <input
                    className="form-control"
                    type="text"
                    id="cf-subject"
                    placeholder="Provide short title of your request"
                  />
                </div>
                <div className="col-12">
                  <label className="form-label" htmlFor="cf-message">
                    Message:&nbsp;<span className="text-danger">*</span>
                  </label>
                  <textarea
                    className="form-control"
                    id="cf-message"
                    rows="6"
                    placeholder="Please describe in detail your request"
                    required=""
                  ></textarea>
                  <div className="invalid-feedback">
                    Please write a message!
                  </div>
                  <button className="btn btn-primary mt-4" type="submit">
                    Send message
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
