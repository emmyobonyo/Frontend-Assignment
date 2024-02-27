import React from "react";
import news from "../data/news";
import { nanoid } from "nanoid";
import Button from "./Button";

function InTheNews() {
  const newsContent = news.map((newsCard) => (
    <div
      key={nanoid()}
      className={`${
        Object.keys(newsCard).length > 1
          ? "news__card mt-5"
          : "d-flex flex-column align-items-center justify-content-center news__card news__card__yellow mt-5"
      }`}
    >
      {Object.keys(newsCard).length > 1 ? (
        <>
          <h5 className="news__card__heading">{newsCard.title}</h5>
          <p className="text-secondary">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been
          </p>
          <div className="d-flex justify-content-center">
            <Button />
          </div>
        </>
      ) : (
        <>
          <h2 className="description__yellow">{newsCard.title}</h2>
          <img className="right__arrow" src="./assets/right-arrow.svg" />
        </>
      )}
    </div>
  ));
  return (
    <div>
      <div class=" d-none d-md-block separator"></div>
      <div className="in__the__news__section">
        <div className="in__the__news">
          <div className="in__the__news__heading__section">
            <h3 className="in__the__news__heading pt-5 pt-md-0">IN THE NEWS</h3>
            <p className="w-75 mx-auto">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s
            </p>
          </div>
          <div className="d-flex flex-column align-items-center flex-md-row flex-md-wrap justify-content-md-between">
            {newsContent}
          </div>
        </div>
        <div className="get__started">
          <p className="get__started__paragraph">
            You have a vision. We can make it happen
          </p>
          <Button />
        </div>
      </div>
    </div>
  );
}

export default InTheNews;
