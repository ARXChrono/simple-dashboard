import React from "react";
import Header from "./components/Header";
import IconMenu from "./components/IconMenu";

import { data } from "./data";

function App() {
  return (
    <div className="dashboard">
      <Header title={data.title} />
      <div className="wrapper">
        <IconMenu
          menuLinks={data.sideMenu}
          activeLink="home"
          userLoggedIn={true}
        />
        <nav>links!</nav>
        <main>yuh, all that lorem</main>
      </div>
    </div>
  );
}

export default App;
