import React from "react";
import links from "../data/links";
import { nanoid } from "nanoid";

function Navigation() {
  const menu = links.map((link) => (
    <li
      key={nanoid()}
      className={`navigation__links ${
        Object.keys(link).length > 1 ? "has__submenu" : ""
      }`}
    >
      {Object.keys(link).length < 2 ? (
        <span>{link.title}</span>
      ) : (
        <>
          <span>{link.title}</span>
          <svg
            width="30px"
            height="30px"
            viewBox="0 0 24 24"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.8079 14.7695L8.09346 10.3121C7.65924 9.79109 8.02976 9 8.70803 9L15.292 9C15.9702 9 16.3408 9.79108 15.9065 10.3121L12.1921 14.7695C12.0921 14.8895 11.9079 14.8895 11.8079 14.7695Z"
              fill="currentColor"
            />
          </svg>
          <ul>
            {link.dropDownItems.map((item) => (
              <li key={nanoid()} className="drop__down__links">
                <a href="#">{item}</a>
              </li>
            ))}
          </ul>
        </>
      )}
    </li>
  ));

  return (
    <>
      <div class="d-flex align-items-center mx-auto top__navigation justify-content-between mt-2">
        <div class="d-xl-none">
          <img
            src="./assets/search-alt-1-svgrepo-com.svg"
            alt="search icon"
            class="black__search__icon"
          />
          <img
            src="./assets/hamburger-menu-svgrepo-com.svg"
            alt="hamburger menu"
            class="hanburger__menu"
          />
        </div>
        <img
          class="w-25"
          src="./assets/DHEAT_logo.svg"
          alt="department of higher education and training logo"
        />
        <div class="d-none d-lg-flex align-items-center justify-content-between social__media__container">
          <div class="position-relative">
            <img
              src="./assets/search.svg"
              alt="Seach icon"
              class="position-absolute search__icon"
            />
            <input
              type="text"
              class="rounded-pill search__input"
              placeholder="Search"
            />
          </div>
          <div>
            <img src="./assets/facebook.svg" alt="facebook logo" />
            <img src="./assets/twitter.svg" alt="twitter logo" />
          </div>
          <div class="position-relative">
            <div class="position-absolute tiny__border__bottom"></div>
            <p class="contact__us">Contact Us</p>
          </div>
        </div>
        <img
          class="logo"
          src="./assets/Logo.png"
          alt="King Hintsa TVET College Logo"
        />
      </div>
      <nav className="d-none d-xl-block">
        <ul class="d-xl-flex bottom__navigation">{menu}</ul>
      </nav>
    </>
  );
}

export default Navigation;
