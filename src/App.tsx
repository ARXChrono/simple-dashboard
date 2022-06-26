import { useState, useEffect } from "react";
import Header from "./components/Header";
import IconMenu from "./components/IconMenu";

import data from "./data";

function App() {
  const [activeLink, setActiveLink] = useState("");

  useEffect(() => {
    setActiveLink(window?.location?.pathname);
  });

  return (
    <div className="dashboard">
      <Header title={data.title} />
      <div className="wrapper">
        <IconMenu
          menuLinks={data.sideMenu}
          activeLink={activeLink}
          userLoggedIn={true}
        />
        <nav>links!</nav>
        <main>yuh, all that lorem</main>
      </div>
    </div>
  );
}

export default App;
