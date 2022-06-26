import Header from "./components/Header";
import IconMenu from "./components/IconMenu";
import Navigation from "./components/Navigation";
import Route from "./components/Route";
import useActiveRoute from "./hooks/useActiveRoute";

import data from "./data";

function App() {
  const currentPath = useActiveRoute();

  return (
    <div className="dashboard">
      <Header title={data.title} />
      <div className="wrapper">
        <IconMenu
          menuLinks={data.sideMenu}
          activeLink={currentPath}
          userLoggedIn={true}
        />
        <Route path="/" currentPath={currentPath}>
          <Navigation menuLinks={data.navigation.home} />
          <main>LOREM!</main>
        </Route>
        <Route path="/completed" currentPath={currentPath}>
          <Navigation menuLinks={data.navigation.completed} />
          <main>Ba da bing ba da boom!</main>
        </Route>
        <Route path="/logout" currentPath={currentPath}>
          <main>Wait, leaving so soon?</main>
        </Route>
      </div>
    </div>
  );
}

export default App;
