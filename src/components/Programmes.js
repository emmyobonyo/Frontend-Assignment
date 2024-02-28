import React from "react";
import programmes from "../data/programmes";

function Programmes() {
  const programmesOffered = programmes.map((programme) => (
    <div>
      <div className="programme__image">
        <img className="w-75 h-75" src={programme.image} />
      </div>
      <p className="mt-4 programme__text">{programme.text}</p>
    </div>
  ));
  return (
    <div className="programmes__section">
      <div>
        <div>
          <h2 className="programmes__heading">PROGRAMMES</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
            mollitia, molestiae quas vel sint commodi repudiandae consequuntur
            voluptatum laborum numquam blanditiis harum quisquam eius sed o
          </p>
        </div>
        <div className="d-flex flex-column flex-md-row justify-content-between mt-5">
          {programmesOffered}
        </div>
      </div>
    </div>
  );
}

export default Programmes;
