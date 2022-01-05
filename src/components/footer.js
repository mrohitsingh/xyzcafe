import React from "react";

function Footer() {
  return (
    <div className="foo-items">
      <div className="social">
        <ul>
          <a href="https://www.facebook.com/mrohitsinghonfb/" target="_blank">
            <li>
              <i class="fab fa-facebook-f"></i>
            </li>
          </a>
          <a href="https://www.instagram.com/rohitsingh.code/" target="_blank">
            <li>
              <i class="fab fa-instagram"></i>
            </li>
          </a>
          <a href="https://www.linkedin.com/in/mrohitsingh/" target="_blank">
            <li>
              <i class="fab fa-linkedin"></i>
            </li>
          </a>
          <a href="https://github.com/mrohitsingh/" target="_blank">
            <li>
              <i class="fab fa-github"></i>
            </li>
          </a>
        </ul>
      </div>
      <div className="desc">
        Copyright 2022 by Rohit Singh. All Rights Reserved.
      </div>
    </div>
  );
}

export default Footer;
