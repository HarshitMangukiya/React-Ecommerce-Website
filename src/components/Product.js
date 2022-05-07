import React from "react";

const Product = () => {
  return (
    <div className="container">
      <h1 className="text-center my-4">Trending products</h1>
      <div className="row">
        <div className="col-lg-3 col-md-4 col-sm-6 px-2 mb-4 my-1">
          <div className="card product-card">
            <div className="d-grid gap-2 position-absolute top-0 end-0 d-md-flex justify-content-md-end m-3 ">
              <button
                type="button"
                className="btn btn-outline-danger btn-circle"
              >
                <i className="fa-regular fa-1x fa-heart"></i>
              </button>
            </div>

            <a className="card-img-top d-block overflow-hidden" href="/">
              <img
                src="./image/01.jpeg"
                alt="Product"
                className="img-thumbnail"
              />
            </a>
            <div className="card-body py-2">
              <a className="product-meta d-block fs-xs pb-1" href="#">
                Sneakers &amp; Keds
              </a>
              <h3 className="product-title fs-sm">
                <a href="shop-single-v1.html">Women Colorblock Sneakers</a>
              </h3>
              <div className="d-flex justify-content-between">
                <div className="product-price">
                  <span className="text-accent">
                    $154.<small>00</small>
                  </span>
                </div>
                <div className="star-rating">
                  <i className="star-rating-icon ci-star-filled active"></i>
                  <i className="star-rating-icon ci-star-filled active"></i>
                  <i className="star-rating-icon ci-star-filled active"></i>
                  <i className="star-rating-icon ci-star-half active"></i>
                  <i className="star-rating-icon ci-star"></i>
                </div>
              </div>
            </div>
            <div className="card-body card-body-hidden">
              <div
                className="btn-group my-2 d-flex flex-wrap justify-content-start"
                role="group"
                aria-label="First group"
              >
                <button
                  type="button"
                  className="btn btn-outline-danger m-1 rounded-1"
                >
                  XS
                </button>
                <button
                  type="button"
                  className="btn btn-outline-danger m-1 rounded-1"
                >
                  S
                </button>
                <button
                  type="button"
                  className="btn btn-outline-danger m-1 rounded-1"
                >
                  M
                </button>
                <button
                  type="button"
                  className="btn btn-outline-danger m-1 rounded-1"
                >
                  L
                </button>
              </div>
              <button
                className="btn btnmain btn-sm d-block w-100 mb-2"
                type="button"
              >
                <i className="fa-solid fa-1x fa-cart-shopping mx-2"></i>
                Add to Cart
              </button>
              <div className="text-center">
                <a
                  className="nav-link-style fs-ms"
                  href="#quick-view"
                  data-bs-toggle="modal"
                >
                  <i className="fa-regular fa-1x fa-eye mx-2"></i>Quick view
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-4 col-sm-6 px-2 mb-4 my-1">
          {/* new product */}
          <div className="card product-card">
            <div className="d-grid gap-2 position-absolute top-0 end-0 d-md-flex justify-content-md-end m-3 ">
              <button
                type="button"
                className="btn btn-outline-danger btn-circle"
              >
                <i className="fa-regular fa-1x fa-heart"></i>
              </button>
            </div>

            <a className="card-img-top d-block overflow-hidden" href="/">
              <img
                src="./image/01.jpeg"
                alt="Product"
                className="img-thumbnail"
              />
            </a>
            <div className="card-body py-2">
              <a className="product-meta d-block fs-xs pb-1" href="#">
                Sneakers &amp; Keds
              </a>
              <h3 className="product-title fs-sm">
                <a href="shop-single-v1.html">Women Colorblock Sneakers</a>
              </h3>
              <div className="d-flex justify-content-between">
                <div className="product-price">
                  <span className="text-accent">
                    $154.<small>00</small>
                  </span>
                </div>
                <div className="star-rating">
                  <i className="star-rating-icon ci-star-filled active"></i>
                  <i className="star-rating-icon ci-star-filled active"></i>
                  <i className="star-rating-icon ci-star-filled active"></i>
                  <i className="star-rating-icon ci-star-half active"></i>
                  <i className="star-rating-icon ci-star"></i>
                </div>
              </div>
            </div>
            <div className="card-body card-body-hidden">
              <div
                className="btn-group my-2 d-flex flex-wrap justify-content-start"
                role="group"
                aria-label="First group"
              >
                <button
                  type="button"
                  className="btn btn-outline-danger m-1 rounded-1"
                >
                  XS
                </button>
                <button
                  type="button"
                  className="btn btn-outline-danger m-1 rounded-1"
                >
                  S
                </button>
                <button
                  type="button"
                  className="btn btn-outline-danger m-1 rounded-1"
                >
                  M
                </button>
                <button
                  type="button"
                  className="btn btn-outline-danger m-1 rounded-1"
                >
                  L
                </button>
              </div>
              <button
                className="btn btnmain btn-sm d-block w-100 mb-2"
                type="button"
              >
                <i className="fa-solid fa-1x fa-cart-shopping mx-2"></i>
                Add to Cart
              </button>
              <div className="text-center">
                <a
                  className="nav-link-style fs-ms"
                  href="#quick-view"
                  data-bs-toggle="modal"
                >
                  <i className="fa-regular fa-1x fa-eye mx-2"></i>Quick view
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-4 col-sm-6 px-2 mb-4 my-1">
          {/* new product */}
          <div className="card product-card">
            <div className="d-grid gap-2 position-absolute top-0 end-0 d-md-flex justify-content-md-end m-3 ">
              <button
                type="button"
                className="btn btn-outline-danger btn-circle"
              >
                <i className="fa-regular fa-1x fa-heart"></i>
              </button>
            </div>

            <a className="card-img-top d-block overflow-hidden" href="/">
              <img
                src="./image/01.jpeg"
                alt="Product"
                className="img-thumbnail"
              />
            </a>
            <div className="card-body py-2">
              <a className="product-meta d-block fs-xs pb-1" href="#">
                Sneakers &amp; Keds
              </a>
              <h3 className="product-title fs-sm">
                <a href="shop-single-v1.html">Women Colorblock Sneakers</a>
              </h3>
              <div className="d-flex justify-content-between">
                <div className="product-price">
                  <span className="text-accent">
                    $154.<small>00</small>
                  </span>
                </div>
                <div className="star-rating">
                  <i className="star-rating-icon ci-star-filled active"></i>
                  <i className="star-rating-icon ci-star-filled active"></i>
                  <i className="star-rating-icon ci-star-filled active"></i>
                  <i className="star-rating-icon ci-star-half active"></i>
                  <i className="star-rating-icon ci-star"></i>
                </div>
              </div>
            </div>
            <div className="card-body card-body-hidden">
              <div
                className="btn-group my-2 d-flex flex-wrap justify-content-start"
                role="group"
                aria-label="First group"
              >
                <button
                  type="button"
                  className="btn btn-outline-danger m-1 rounded-1"
                >
                  XS
                </button>
                <button
                  type="button"
                  className="btn btn-outline-danger m-1 rounded-1"
                >
                  S
                </button>
                <button
                  type="button"
                  className="btn btn-outline-danger m-1 rounded-1"
                >
                  M
                </button>
                <button
                  type="button"
                  className="btn btn-outline-danger m-1 rounded-1"
                >
                  L
                </button>
              </div>
              <button
                className="btn btnmain btn-sm d-block w-100 mb-2"
                type="button"
              >
                <i className="fa-solid fa-1x fa-cart-shopping mx-2"></i>
                Add to Cart
              </button>
              <div className="text-center">
                <a
                  className="nav-link-style fs-ms"
                  href="#quick-view"
                  data-bs-toggle="modal"
                >
                  <i className="fa-regular fa-1x fa-eye mx-2"></i>Quick view
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-4 col-sm-6 px-2 mb-4 my-1">
          {/* new product */}
          <div className="card product-card">
            <div className="d-grid gap-2 position-absolute top-0 end-0 d-md-flex justify-content-md-end m-3 ">
              <button
                type="button"
                className="btn btn-outline-danger btn-circle"
              >
                <i className="fa-regular fa-1x fa-heart"></i>
              </button>
            </div>

            <a className="card-img-top d-block overflow-hidden" href="/">
              <img
                src="./image/01.jpeg"
                alt="Product"
                className="img-thumbnail"
              />
            </a>
            <div className="card-body py-2">
              <a className="product-meta d-block fs-xs pb-1" href="#">
                Sneakers &amp; Keds
              </a>
              <h3 className="product-title fs-sm">
                <a href="shop-single-v1.html">Women Colorblock Sneakers</a>
              </h3>
              <div className="d-flex justify-content-between">
                <div className="product-price">
                  <span className="text-accent">
                    $154.<small>00</small>
                  </span>
                </div>
                <div className="star-rating">
                  <i className="star-rating-icon ci-star-filled active"></i>
                  <i className="star-rating-icon ci-star-filled active"></i>
                  <i className="star-rating-icon ci-star-filled active"></i>
                  <i className="star-rating-icon ci-star-half active"></i>
                  <i className="star-rating-icon ci-star"></i>
                </div>
              </div>
            </div>
            <div className="card-body card-body-hidden">
              <div
                className="btn-group my-2 d-flex flex-wrap justify-content-start"
                role="group"
                aria-label="First group"
              >
                <button
                  type="button"
                  className="btn btn-outline-danger m-1 rounded-1"
                >
                  XS
                </button>
                <button
                  type="button"
                  className="btn btn-outline-danger m-1 rounded-1"
                >
                  S
                </button>
                <button
                  type="button"
                  className="btn btn-outline-danger m-1 rounded-1"
                >
                  M
                </button>
                <button
                  type="button"
                  className="btn btn-outline-danger m-1 rounded-1"
                >
                  L
                </button>
              </div>
              <button
                className="btn btnmain btn-sm d-block w-100 mb-2"
                type="button"
              >
                <i className="fa-solid fa-1x fa-cart-shopping mx-2"></i>
                Add to Cart
              </button>
              <div className="text-center">
                <a
                  className="nav-link-style fs-ms"
                  href="#quick-view"
                  data-bs-toggle="modal"
                >
                  <i className="fa-regular fa-1x fa-eye mx-2"></i>Quick view
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
