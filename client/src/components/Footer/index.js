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
              <a href="mailto:thisisfake@gmail.com">Contact Us</a>
            </li>
            <li className="list">
              <a href="">About Pipeline</a>
            </li>
            {/* <li className="list">
              <a href="">Privacy &amp; Security</a>
            </li> */}
            <li className="list">
              <a href="">Careers</a>
            </li>
            <li className="list">
              <a href="">Our Developers</a>
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
            <li className="list">Richmond, VA</li>
            <li className="list">23173</li>
            <li className="list google">
              <a href="https://www.google.com/maps/place/410+Westhampton+Way,+Richmond,+VA+23173/@37.5751669,-77.5429033,17z/data=!4m13!1m7!3m6!1s0x89b114a18c3fffff:0x1da45f9a0c6f393b!2s410+Westhampton+Way,+Richmond,+VA+23173!3b1!8m2!3d37.5751669!4d-77.5407146!3m4!1s0x89b114a18c3fffff:0x1da45f9a0c6f393b!8m2!3d37.5751669!4d-77.5407146">View on Google Maps</a>
            </li>
          </ul>
        </p>
      </div>
      <div className="rightFooter">
        <p>
          <span>Legal</span>
          <ul>
            <li className="list">Copyright &copy;2020</li>
            <li className="list">All rights reserved.</li>
            <li className="list">Terms &amp; Conditions</li>
          </ul>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
