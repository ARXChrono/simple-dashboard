import { useState, useEffect } from "react";
import Header from "./components/Header";
import IconMenu from "./components/IconMenu";
import Route from "./components/Route";

import data from "./data";

function App() {
  const [activeLink, setActiveLink] = useState(window.location.pathname);

  useEffect(() => {
    const onLocationChange = () => {
      setActiveLink(window.location.pathname);
    };
    window.addEventListener("popstate", onLocationChange);
    return () => {
      window.removeEventListener("popstate", onLocationChange);
    };
  }, []);

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
        <Route path="/">
          <main>LOREM!</main>
        </Route>
        <Route path="/completed">
          <main>Ba da bing ba da boom!</main>
        </Route>
        <Route path="/logout">
          <main>Wait, leaving so soon?</main>
        </Route>
      </div>
    </div>
  );
}

export default App;
