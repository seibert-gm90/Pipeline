import React from "react";
import "./footer.css";

function Footer() {
  return (
    <footer class="footsie">
      <div class="leftFooter">
        <p>
          <span>Useful Links</span>
          <ul>
            <li class="list">
              <a href="">Contact Us</a>
            </li>
            <li class="list">
              <a href="">Careers</a>
            </li>
            <li class="list">
              <a href="">Privacy &amp; Security</a>
            </li>
            <li class="list">
              <a href="">About Pipeline</a>
            </li>
            <li class="list">
              <a href="">Feedback</a>
            </li>
          </ul>
        </p>
      </div>
      <div class="middleFooter">
        <p>
          <span>Address</span>
          <ul>
            <li class="list">Pipeline</li>
            <li class="list">410 Westhapton Way</li>
            <li class="list">Richond, VA</li>
            <li class="list">23173</li>
            <li class="list google">
              <a href="https://goo.gl/maps/mWEHKqH5Q6s">View on Google Maps</a>
            </li>
          </ul>
        </p>
      </div>
      <div class="rightFooter">
        <p>
          <span>Legal</span>
          <ul>
            <li class="list">Copyright &copy;2012 - 2016</li>
            <li class="list">All rights reserved.</li>
            <li class="list">Terms &amp; Conditions</li>
          </ul>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
