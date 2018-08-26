import React, { Component } from "react";
import Navbar from "./components/Navigation/Navbar/Navbar";
import Weather from "./components/Weather/Weather";
import styles from "./App.scss";

class App extends Component {
  render() {
    return (
      <div className={styles.wrapper}>
        <header>
          <Navbar />
        </header>
        <div className={styles.main}>
          <Weather />
        </div>
      </div>
    );
  }
}

export default App;
