import React from "react";
import {Link} from "react-router-dom";
import "./style.css";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <a className="navbar-brand" href="/">
        Google Books
      </a>
      <Link to="/" className="link">Search</Link>
      <Link to="/saved" className="link">Saved</Link>
    </nav>
  );
}

export default Nav;
