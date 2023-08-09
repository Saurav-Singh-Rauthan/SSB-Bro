import React from 'react';
import { Link } from 'react-router-dom';

function Footer(): React.JSX.Element {
  return (
    <section className="box-border block bg-dark-blue text-white">
      <div className="pt-5 mt-5">
        <div className="py-12">
          <div className="block ml-6 w-4/12">
            <h4 className="text-white mb-4">Contact</h4>
            <p className="mb-2">
              <i className="fa fa-map-marker-alt me-3"></i>
              <span>
                GMC ONE Apartment,
                <br />
                Kodipalya Road, Hobli, Kengeri, <br />
                Bengaluru, Karnataka 560060
              </span>
            </p>
            <p className="mb-2">
              <i className="fa fa-phone-alt me-3"></i>+91 7906127544
            </p>
            <p className="mb-2">
              <i className="fa fa-envelope me-3"></i>defencecontent@gmail.com
            </p>
          </div>
          <div className="d-flex col-lg-6 pt-2">
            <Link to="#" className="btn btn-outline-light btn-social mx-3">
              <i className="bi bi-whatsapp"></i>
            </Link>
            <Link to="#" className="btn btn-outline-light btn-social mx-3">
              <i className="bi bi-instagram"></i>
            </Link>
            <Link to="#" className="btn btn-outline-light btn-social mx-3">
              <i className="fab fa-facebook-f"></i>
            </Link>
            <Link to="#" className="btn btn-outline-light btn-social mx-3">
              <i className="fab fa-youtube"></i>
            </Link>
            <Link to="#" className="btn btn-outline-light btn-social mx-3">
              <i className="bi bi-telegram"></i>
            </Link>
          </div>
        </div>
      </div>
      <hr />
      <div className="container">
        <div className="copyright">
          <div className="row">
            <div className="text-center">
              &copy; SSB <span className="text-red-700">BRO</span>, All Rights Reserved. Designed & Developed By SSB{' '}
              <span className="text-red-700">BRO</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
