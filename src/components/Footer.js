import React from "react";

function Footer() {
  return (
    <div className="footer__section">
      <div className="footer__content">
        <div className="d-flex">
          <div className="footer__row">
            <h6 className="footer__row__header">About Us</h6>
            <ul>
              <li>Vision and Mission</li>
              <li>College Profile</li>
              <li>Governance</li>
              <li>Vacancies</li>
              <li>Procurement</li>
            </ul>
          </div>
          <div className="footer__row">
            <h6 className="footer__row__header">Applications</h6>
            <ul>
              <li>Registration</li>
              <li>Application Forms</li>
              <li>Buesary Applications</li>
              <li>Lernerships</li>
            </ul>
          </div>
          <div className="footer__row">
            <h6 className="footer__row__header">Campuses</h6>
            <ul>
              <li>Teko Campus</li>
              <li>Duty Campus</li>
              <li>HB Tywsngwa Campus</li>
              <li>Centane Campus</li>
              <li>Msonbomvu</li>
            </ul>
          </div>
          <div className="footer__row">
            <h6 className="footer__row__header">Programmes</h6>
            <ul>
              <li>National Certificate</li>
              <li>Engineering</li>
              <li>Business</li>
              <li>Short Courses</li>
            </ul>
          </div>
          <div className="footer__row">
            <h6 className="footer__row__header">Student Life</h6>
            <ul>
              <li>Sport</li>
              <li>Art & Culture</li>
              <li>eLearning</li>
              <li>Student Support</li>
            </ul>
          </div>
          <div className="footer__row">
            <h6 className="footer__row__header">News & Media</h6>
            <ul>
              <li>News</li>
              <li>Events</li>
              <li>Publications</li>
              <li>Gallery</li>
              <li>News Letter</li>
            </ul>
          </div>
        </div>
        <div className="d-flex justify-content-between mt-4">
          <div>
            <div className="d-flex">
              <img className="footer__icon" src="./assets/phone.svg" />
              <h5 className="d-inline footer__number">+27 567 2345</h5>
            </div>
            <div className="d-flex">
              <img className="footer__icon" src="./assets/email-solid.svg" />
              <h5 className="d-inline footer__number">
                info@kinghintsacollege.edu.za
              </h5>
            </div>
          </div>
          <div>
            <h5 className="d-inline footer__number">Connect with us</h5>
            <div></div>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default Footer;
