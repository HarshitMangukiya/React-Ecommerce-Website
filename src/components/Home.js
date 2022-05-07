import React from "react";
import Carousel from "./Carousel";
import Product from "./Product";

const Home = () => {
  return (
    <div>
      <Carousel />
      <Product />
      <section className="container py-lg-4 my-5">
        <h2 className="h3 text-center pb-4">Shop by brand</h2>
        <div className="row">
          <div className="col-md-3 col-sm-4 col-6 my-2">
            <a
              className="d-block bg-white shadow-sm rounded-3 py-3 py-sm-4 mb-grid-gutter"
              href="#"
            >
              <img
                className="d-block mx-auto"
                src="./brandimage/01.png"
                style={{ width: "150px" }}
                alt="Brand"
              />
            </a>
          </div>
          <div className="col-md-3 col-sm-4 col-6 my-2">
            <a
              className="d-block bg-white shadow-sm rounded-3 py-3 py-sm-4 mb-grid-gutter"
              href="#"
            >
              <img
                className="d-block mx-auto"
                src="./brandimage/02.png"
                style={{ width: "150px" }}
                alt="Brand"
              />
            </a>
          </div>
          <div className="col-md-3 col-sm-4 col-6 my-2">
            <a
              className="d-block bg-white shadow-sm rounded-3 py-3 py-sm-4 mb-grid-gutter"
              href="#"
            >
              <img
                className="d-block mx-auto"
                src="./brandimage/03.png"
                style={{ width: "150px" }}
                alt="Brand"
              />
            </a>
          </div>
          <div className="col-md-3 col-sm-4 col-6 my-2">
            <a
              className="d-block bg-white shadow-sm rounded-3 py-3 py-sm-4 mb-grid-gutter"
              href="#"
            >
              <img
                className="d-block mx-auto"
                src="./brandimage/04.png"
                style={{ width: "150px" }}
                alt="Brand"
              />
            </a>
          </div>
          <div className="col-md-3 col-sm-4 col-6 my-2">
            <a
              className="d-block bg-white shadow-sm rounded-3 py-3 py-sm-4 mb-grid-gutter"
              href="#"
            >
              <img
                className="d-block mx-auto"
                src="./brandimage/05.png"
                style={{ width: "150px" }}
                alt="Brand"
              />
            </a>
          </div>
          <div className="col-md-3 col-sm-4 col-6 my-2">
            <a
              className="d-block bg-white shadow-sm rounded-3 py-3 py-sm-4 mb-grid-gutter"
              href="#"
            >
              <img
                className="d-block mx-auto"
                src="./brandimage/06.png"
                style={{ width: "150px" }}
                alt="Brand"
              />
            </a>
          </div>
          <div className="col-md-3 col-sm-4 col-6 my-2">
            <a
              className="d-block bg-white shadow-sm rounded-3 py-3 py-sm-4 mb-grid-gutter"
              href="#"
            >
              <img
                className="d-block mx-auto"
                src="./brandimage/07.png"
                style={{ width: "150px" }}
                alt="Brand"
              />
            </a>
          </div>
          <div className="col-md-3 col-sm-4 col-6 my-2">
            <a
              className="d-block bg-white shadow-sm rounded-3 py-3 py-sm-4 mb-grid-gutter"
              href="#"
            >
              <img
                className="d-block mx-auto"
                src="./brandimage/08.png"
                style={{ width: "150px" }}
                alt="Brand"
              />
            </a>
          </div>
          <div className="col-md-3 col-sm-4 col-6 my-2">
            <a
              className="d-block bg-white shadow-sm rounded-3 py-3 py-sm-4 mb-grid-gutter"
              href="#"
            >
              <img
                className="d-block mx-auto"
                src="./brandimage/09.png"
                style={{ width: "150px" }}
                alt="Brand"
              />
            </a>
          </div>
          <div className="col-md-3 col-sm-4 col-6 my-2">
            <a
              className="d-block bg-white shadow-sm rounded-3 py-3 py-sm-4 mb-grid-gutter"
              href="#"
            >
              <img
                className="d-block mx-auto"
                src="./brandimage/10.png"
                style={{ width: "150px" }}
                alt="Brand"
              />
            </a>
          </div>
          <div className="col-md-3 col-sm-4 col-6 my-2">
            <a
              className="d-block bg-white shadow-sm rounded-3 py-3 py-sm-4 mb-grid-gutter"
              href="#"
            >
              <img
                className="d-block mx-auto"
                src="./brandimage/11.png"
                style={{ width: "150px" }}
                alt="Brand"
              />
            </a>
          </div>
          <div className="col-md-3 col-sm-4 col-6 my-2">
            <a
              className="d-block bg-white shadow-sm rounded-3 py-3 py-sm-4 mb-grid-gutter"
              href="#"
            >
              <img
                className="d-block mx-auto"
                src="./brandimage/12.png"
                style={{ width: "150px" }}
                alt="Brand"
              />
            </a>
          </div>
        </div>
      </section>
      <section className="container pb-4 mb-md-3">
        <div className="row">
          <div className="col-md-8 mb-4">
            <div className="d-sm-flex justify-content-between align-items-center bg-light overflow-hidden rounded-3">
              <div className="py-4 my-2 my-md-0 py-md-5 px-4 ms-md-3 text-center text-sm-start" >
                <h4 className="fs-lg fw-light mb-2">Hurry up! Limited time offer</h4>
                <h3 className="mb-4">Converse All Star on Sale</h3><a className="btn btn-primary btn-shadow btn-sm" href="#">Shop Now</a>
              </div><img className="d-block ms-auto" src="./image/banner.jpeg" alt="Shop Converse" />
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="d-flex flex-column h-100 justify-content-center bg-size-cover bg-position-center rounded-3" style={{backgroundImage: "url(./image/banner-bg.jpeg)"}}>
              <div className="py-4 my-2 px-4 text-center">
                <div className="py-1">
                  <h5 className="mb-2">Your Add Banner Here</h5>
                  <p className="fs-sm text-muted">Hurry up to reserve your spot</p><a className="btn btn-primary btn-shadow btn-sm" href="#">Contact us</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
