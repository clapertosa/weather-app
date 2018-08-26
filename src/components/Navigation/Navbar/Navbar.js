import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import styles from "./Navbar.scss";

const Navbar = () => {
  return (
    <nav>
      <SearchBar placeholder="Search your City" />
    </nav>
  );
};

export default Navbar;
