import React, { useState } from "react";
import programmes from "../data/programmes";
import programDetails from "../data/programDetails";

function Programmes() {
  const [state, setState] = useState(0);
  const changeContents = (index) => {
    setState(index);
  };
  const programmesOffered = programmes.map((programme, index) => (
    <div>
      <div className="programme__image">
        <img
          className="w-75 h-75"
          src={programme.image}
          onClick={() => changeContents(index)}
        />
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
        <div class="bg-white mt-5">
          <div class="d-none d-md-flex .bg-white p-3">
            <img class="w-50 h-50" src={programDetails[state].image} />
            <div>
              <h3 class="w-75 mx-auto fw-normal">
                You have an engineering vision. We can make it happen
              </h3>
              <p class="mt-5 w-75 mx-auto">
                {programDetails[state].description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Programmes;
