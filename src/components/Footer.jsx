import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin, faStackoverflow } from "@fortawesome/free-brands-svg-icons";
import "../style/Footer.css";

// Array of social media objects with name, url, icon and color
const socials = [
  {
    name: "GitHub",
    url: "https://github.com/tjbush-123",
    icon: faGithub,
    color: "#5DE512",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/tremayne-bush-0880822a3/",
    icon: faLinkedin,
    color: "#2EACE8",
  },
  {
    name: "Stack Overflow",
    url: "https://stackoverflow.com/users/23652496/tj-bush",
    icon: faStackoverflow,
    color: "#FF0000",
  },
];

// Footer component
const Footer = () => {
  return (
    <footer className="footer bg-dark text-white">
      <div className="footer-container">
        <section className="social-icons-wrapper d-flex flex-md-row justify-content-center">
          {socials.map(({ name, url, icon, color }) => (
            <div
              key={name}
              className="d-flex flex-column align-items-center mx-md-2 transparent-bg"
            >
              <a
                href={url}
                className={`icon ${name}`}
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon
                  icon={icon}
                  bounce
                  className="footer-icon-size" 
                  style={{ color: color }}
                />
              </a>
              <a href={url} target="_blank" rel="noreferrer">
                <span className="d-inline-block mx-1 name">{name}</span>
              </a>
            </div>
          ))}
        </section>
        <section className="form-footer">
        <h5 className="designer-text">Designed by TJ Bush</h5>
          <p>
          <h6 className="copyright-text">&copy; {new Date().getFullYear()} All rights reserved.</h6>
          </p>
        </section>
      </div>
    </footer>
  );
};
// Export Footer
export default Footer;