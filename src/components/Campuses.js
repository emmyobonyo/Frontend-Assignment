import React from "react";
import campuses from "../data/campuses";
import Button from "./Button";

function Campuses() {
  const campuseCards = campuses.map((campus) => (
    <div
      className={
        Object.keys(campus).length > 1 ? "campus__cards mt-5" : "campus__image"
      }
    >
      {Object.keys(campus).length > 1 ? (
        <>
          <h3>{campus.title}</h3>
          <p>{campus.description}</p>
          <Button />
        </>
      ) : (
        <Button />
      )}
    </div>
  ));
  return (
    <div className="campuses__section">
      <div className="campuses__content">
        <div>
          <h2 className="campuses__heading">Campusers</h2>
          <p className="campuses__description mt-4">
            Lorem Ipsum dolor sit amet, consectutor. Lorem Ipsum dolor sit amet,
            consectutor. Lorem Ipsum dolor sit amet, consectutor
          </p>
        </div>
        <div className="d-flex flex-wrap justify-content-between">
          {campuseCards}
        </div>
      </div>
    </div>
  );
}

export default Campuses;
