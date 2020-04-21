import React from "react";
import "./footer.css";

function Footer() {
  return (
    <footer className="footsie">
      <div className="leftFooter">
        <p>
          <span>Useful Links</span>
          <ul>
            <li className="list">
              <a href="">Contact Us</a>
            </li>
            <li className="list">
              <a href="">Careers</a>
            </li>
            <li className="list">
              <a href="">Privacy &amp; Security</a>
            </li>
            <li className="list">
              <a href="">About Pipeline</a>
            </li>
            <li className="list">
              <a href="">Feedback</a>
            </li>
          </ul>
        </p>
      </div>
      <div className="middleFooter">
        <p>
          <span>Address</span>
          <ul>
            <li className="list">Pipeline</li>
            <li className="list">410 Westhapton Way</li>
            <li className="list">Richond, VA</li>
            <li className="list">23173</li>
            <li className="list google">
              <a href="https://goo.gl/maps/mWEHKqH5Q6s">View on Google Maps</a>
            </li>
          </ul>
        </p>
      </div>
      <div className="rightFooter">
        <p>
          <span>Legal</span>
          <ul>
            <li className="list">Copyright &copy;2012 - 2016</li>
            <li className="list">All rights reserved.</li>
            <li className="list">Terms &amp; Conditions</li>
          </ul>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
