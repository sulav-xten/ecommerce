// Import FontAwesome icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faLinkedin,
  faFacebook,
  faInstagram,
  faTwitter
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer py-4 bg-dark">
      <div className="container">
        <div className="row mb-3">
          {/*Links*/}
          <div className="col-12 col-sm-6 col-md-2">
            <h5 className="text-white mb-3">Quick Links</h5>
            <ul className="list-unstyled mb-4">
              <li>
                <Link to={``} className="text-white text-decoration-none">
                  Home
                </Link>
              </li>
              <li>
                <Link to={``} className="text-white text-decoration-none">
                  link
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-12 col-sm-6 col-md-2">
            <h5 className="text-white mb-3">Links</h5>
            <ul className="list-unstyled mb-4">
              <li>
                <Link to={``} className="text-white text-decoration-none">
                  link
                </Link>
              </li>
              <li>
                <Link to={``} className="text-white text-decoration-none">
                  link
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-12 col-sm-6 col-md-2">
            <h5 className="text-white mb-3">Links</h5>
            <ul className="list-unstyled mb-4">
              <li>
                <Link to={``} className="text-white text-decoration-none">
                  link
                </Link>
              </li>
              <li>
                <Link to={``} className="text-white text-decoration-none">
                  link
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter Subscription */}
          <div className="col-12 col-sm-6 col-md-6">
            <h5 className="text-white mb-3">Subscribe to Our Newsletter</h5>
            <p className="text-white">dhsfijsdbfibsdifbshidbfhidsb</p>
            <form className="row g-2">
              {/* Email Input Field */}
              <div className="col-8">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter your email"
                />
              </div>

              {/* Subscribe Button */}
              <div className="col-4">
                <button type="submit" className="btn btn-primary w-100">
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>

        <hr />

        {/* Copyright and Made With Love */}
        <div className="row g-2">
          <div className="col-6">
            <p className="text-white mb-1">Copyright ©2024 Ecommerce.</p>
            <p className="text-white mb-0">
              Made with
              <FontAwesomeIcon icon={faHeart} className="text-danger" /> in
              Pokhara, Nepal
            </p>
          </div>
          {/*Social Links*/}
          <div className="col-6">
            <a href="" className="text-white mx-3">
              <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </a>
            <a href="" className="text-white mx-3">
              <FontAwesomeIcon icon={faFacebook} size="2x" />
            </a>
            <a href="" className="text-white mx-3">
              <FontAwesomeIcon icon={faInstagram} size="2x" />
            </a>
            <a href="" className="text-white mx-3">
              <FontAwesomeIcon icon={faTwitter} size="2x" />
            </a>
            <a href="mailto:mail@xten.com.np" className="text-white mx-3">
              <FontAwesomeIcon icon={faEnvelope} size="2x" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
