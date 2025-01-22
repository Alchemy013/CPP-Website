import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import "../assets/styles/Main.scss";

function Main() {
  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img
            src="https://media.licdn.com/dms/image/v2/C5103AQE36xVsxjQ_nw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1580713264258?e=1743033600&v=beta&t=2NJyMWl5Oq7Rw0WRQ75x7PmQHd7WLmVmMdjxwYOMmVg"
            alt="Avatar"
          />
        </div>
        <div className="content">
          <div className="social_icons">
            <a
              href="https://www.facebook.com/bandhana.saini/"
              target="_blank"
              rel="noreferrer"
            >
              <FacebookIcon />
            </a>
            <a
              href="https://www.linkedin.com/in/bandhana-saini-4666354a/"
              target="_blank"
              rel="noreferrer"
            >
              <LinkedInIcon />
            </a>
          </div>
          <h1>Bandhana Saini</h1>
          <p>Project Manager</p>

          <div className="mobile_social_icons">
            <a
              href="https://www.facebook.com/bandhana.saini/"
              target="_blank"
              rel="noreferrer"
            >
              <FacebookIcon />
            </a>
            <a
              href="https://www.linkedin.com/in/bandhana-saini-4666354a/"
              target="_blank"
              rel="noreferrer"
            >
              <LinkedInIcon />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
