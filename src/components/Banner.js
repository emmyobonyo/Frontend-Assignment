import React from "react";
import Button from "./Button";

function Banner() {
  return (
    <div className="d-none d-md-flex justify-content-between banner__section">
      <div className="mt-5 banner__left">
        <div className="d-md-flex justify-content-between">
          <div className="d-flex flex-column">
            <h3 className="banner__year">2022</h3>
            <p className="applications">APPLICATIONS</p>
          </div>
          <div className="d-flex justify-content-center align-items-center mt-md-3 mt-4 now__open p-5">
            NOW OPEN
          </div>
        </div>
        <p className="banner__paragraph">
          Choose from our enrollment forms to join our college
        </p>
        <div className="d-none d-xl-block">
          <div>
            <img className="checkmark" src="./assets/checkmark.svg" />
            <span className="banner__descriptions">
              A Student's First Choice
            </span>
          </div>
          <div>
            <img className="checkmark" src="./assets/checkmark.svg" />
            <span className="banner__descriptions">
              Opening Doors to the Future
            </span>
          </div>
          <div>
            <img className="checkmark" src="./assets/checkmark.svg" />
            <span className="banner__descriptions">Top Ranked Lecturers</span>
          </div>
        </div>
        <Button />
        <div className="mt-3">
          <img src="./assets/play-filled.svg" />
          <span className="lorem__ipsum">Lorem ipsum </span>
        </div>
      </div>
      <img
        className="w-50 h-50"
        src="./assets/bannerImage.png"
        alt="banner image"
      />
    </div>
  );
}

export default Banner;
