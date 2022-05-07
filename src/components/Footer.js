import React from "react";
import { Link } from "react-router-dom";


const Footer = () => {
    return (
    <div className="container-fluid">
      {/* <!-- Remove the container if you want to extend the Footer to full width. --> */}
      <div className=" mt-4 colorfooter">
        {/* <!-- Footer --> */}
        <footer className="text-center text-lg-start text-white ">
          {/* style="background-color: #45526e" */}
          {/* <!-- Grid container --> */}
          <div className="container p-4 pb-0">

            {/* <!-- Section: Links --> */}
            <section className="">
              {/* <!--Grid row--> */}
              <div className="row">
                {/* <!-- Grid column --> */}
                <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                  <h6 className="text-uppercase mb-4 font-weight-bold">
                    {/* Company name */}
                  </h6>
                  <p>
                  Be it clothing, footwear or accessories, Maxsavecloth offers you the ideal combination of fashion and functionality for men, women and kids. 
                  </p>
                </div>
                {/* <!-- Grid column --> */}

                <hr className="w-100 clearfix d-md-none" />

                {/* <!-- Grid column --> */}
                <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
                  <h6 className="text-uppercase mb-4 font-weight-bold">
                    Shopping
                  </h6>
                  <p>
                    <a className="text-white nav-link-style">Men</a>
                  </p>
                  <p>
                    <a className="text-white nav-link-style">Women</a>
                  </p>
                  <p>
                    <a className="text-white nav-link-style">Kids</a>
                  </p>
                  <p>
                    <a className="text-white nav-link-style">Beauty</a>
                  </p>
                  <p>
                    <a className="text-white nav-link-style">Gift Cards</a>
                  </p>
                  <p>
                    <a className="text-white nav-link-style">Home & Living</a>
                  </p>
                </div>
                {/* <!-- Grid column --> */}

                <hr className="w-100 clearfix d-md-none" />

                {/* <!-- Grid column --> */}
                <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
                  <h6 className="text-uppercase mb-4 font-weight-bold">
                    Useful links
                  </h6>
                  <p>
                    <Link className="text-white nav-link-style" to="/">Home</Link>
                  </p>
                  <p>
                    <Link className="text-white nav-link-style" to="/about">About</Link>
                  </p>
                  <p>
                    <Link className="text-white nav-link-style" to="/product">Product</Link>
                  </p>
                  <p>
                    <Link className="text-white nav-link-style " to="/contact">Contact Us</Link>  
                  </p>
                  <p>
                    <a className="text-white nav-link-style" >Help</a>
                  </p>
                  <p>
                    <a className="text-white nav-link-style">T&C</a>
                  </p>
                </div>

                {/* <!-- Grid column --> */}
                <hr className="w-100 clearfix d-md-none" />

                {/* <!-- Grid column --> */}
                <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
                  <h6 className="text-uppercase mb-4 font-weight-bold">
                    Contact
                  </h6>
                  <p>
                    <i className="fas fa-home mr-3"></i> Surat, Ved Road-395004, India
                  </p>
                  <p>
                    <i className="fas fa-envelope mr-3"></i> 
                  <a href = "mailto:abc@example.com?subject = Feedback&body = Message" className="mx-2 nav-link-style" style={{color:"white"}}>
                     Maxsavecloth@gmail.com</a>
                  </p>
                  <p>
                    <i className="fas fa-phone mr-3"></i> + 91 98767 67999
                  </p>
                  <p>
                    <i className="fas fa-print mr-3"></i> + 91 90890 90890
                  </p>
                </div>
                {/* <!-- Grid column --> */}
              </div>
              {/* <!--Grid row--> */}
            </section>
            {/* <!-- Section: Links --> */}

            <hr className="my-3" />

            {/* <!-- Section: Copyright --> */}
            <section className="p-3 pt-0">
              <div className="row d-flex align-items-center">
                {/* <!-- Grid column --> */}
                <div className="col-md-7 col-lg-8 text-center text-md-start">
                  {/* <!-- Copyright --> */}
                  <div className="p-3">
                    © 2020 Copyright:
                    <a className="text-white mx-2 nav-link-style" href="https://mdbootstrap.com/">
                      Maxsavecloth.com
                    </a>
                  </div>
                  {/* <!-- Copyright --> */}
                </div>
                {/* <!-- Grid column --> */}

                {/* <!-- Grid column --> */}
                <div className="col-md-5 col-lg-4 ml-lg-0 text-center text-md-end">
                  {/* <!-- Facebook --> */}
                  <a
                    className="btn btn-outline-light btn-floating m-1 text-white"
                    role="button"
                  >
                    <i className="fab fa-facebook-f"></i>
                  </a>

                  {/* <!-- Twitter --> */}
                  <a
                    className="btn btn-outline-light btn-floating m-1 text-white"
                    role="button"
                  >
                    <i className="fab fa-twitter"></i>
                  </a>

                  {/* <!-- Google --> */}
                  <a
                    className="btn btn-outline-light btn-floating m-1 text-white"
                    role="button"
                  >
                    <i className="fab fa-google"></i>
                  </a>

                  {/* <!-- Instagram --> */}
                  <a
                    className="btn btn-outline-light btn-floating m-1 text-white"
                    role="button"
                  >
                    <i className="fab fa-instagram"></i>
                  </a>
                </div>
                {/* <!-- Grid column --> */}
              </div>
            </section>
            {/* <!-- Section: Copyright --> */}
          </div>
          {/* <!-- Grid container --> */}
        </footer>
        {/* <!-- Footer --> */}
      </div>
      {/* <!-- End of .container --> */}
    </div>
  );
};

export default Footer;
