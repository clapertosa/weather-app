import React from "react";
import Layout from "./hoc/Layout";
import Weather from "./Containers/Weather";

const App = () => {
  return (
    <Layout>
      <Weather />
    </Layout>
  );
};

export default App;
