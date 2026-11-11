import { useEffect, useRef, useState } from "react";
import "./Header.css";
import crosslogo  from "../../assets/trovecross.png";
import trovesearch from "../../assets/trovesearch.png";

function Header() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const searchRef = useRef(null);
  const searchButtonRef = useRef(null);
  const searchInputRef = useRef(null);

  useEffect(() => {
    if (isSearchOpen) {
      searchInputRef.current?.focus();
    }
  }, [isSearchOpen]);

  useEffect(() => {
    if (!isSearchOpen) return;

    function handleOutsideClick(event) {
      if (!searchRef.current?.contains(event.target)) {
        setIsSearchOpen(false);
      }
    }

    document.addEventListener("pointerdown", handleOutsideClick);
    return () => document.removeEventListener("pointerdown", handleOutsideClick);
  }, [isSearchOpen]);

  function handleSearchKeyDown(event) {
    if (event.key === "Escape") {
      setIsSearchOpen(false);
      searchButtonRef.current?.focus();
    }
  }

  return (
    <header className="header">
       <details className="header__dropdown">
              <summary className="header__link">Shop</summary>
              <ul className="header__dropdown-menu">
                <li><a className="header__link" href="/men">Men</a></li>
                <li><a className="header__link" href="/women">Women</a></li>
                <li><a className="header__link" href="/youth">Youth</a></li>
                <li><a className="header__link" href="/outdoor">Outdoor</a></li>
              </ul>
            </details>
           <a href="/"><img src={crosslogo} alt="TROVE Logo" className="header__logo" /></a>
      <nav aria-label="Main navigation">
        <ul className="header__content">
          <li className="header__item">
          
          </li>
          <li className="header__item"><a className="header__link" href="/about">About</a></li>
          <li className="header__item"><a className="header__link" href="/profile">Profile</a></li>
          <li className="header__item">
            <div
              ref={searchRef}
              className={`header__search${isSearchOpen ? " header__search--open" : ""}`}
            >
              <button
                ref={searchButtonRef}
                className="header__search-button"
                type="button"
                aria-label={isSearchOpen ? "Close search" : "Open search"}
                aria-expanded={isSearchOpen}
                aria-controls="header-search-input"
                onClick={() => setIsSearchOpen((open) => !open)}
              >
                <img src={trovesearch} alt="" className="header__search-icon" />
              </button>
              <input
                ref={searchInputRef}
                id="header-search-input"
                type="search"
                placeholder="Search"
                aria-label="Search"
                disabled={!isSearchOpen}
                onKeyDown={handleSearchKeyDown}
              />
            </div>
          </li>
          <li className="header__item"><a className="header__link" href="/cart">Cart</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;