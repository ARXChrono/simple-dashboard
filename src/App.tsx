import Header from "./components/Header";
import IconMenu from "./components/IconMenu";
import Navigation from "./components/Navigation";
import ContentBlock from "./components/ContentBlock";
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
          <ContentBlock
            heading={data.content.home.heading}
            content={data.content.home.content}
          />
        </Route>
        <Route path="/completed" currentPath={currentPath}>
          <Navigation menuLinks={data.navigation.completed} />
          <ContentBlock
            heading={data.content.completed.heading}
            content={data.content.completed.content}
          />
        </Route>
        <Route path="/logout" currentPath={currentPath}>
          <ContentBlock
            heading={data.content.logout.heading}
            content={data.content.logout.content}
          />
        </Route>
      </div>
    </div>
  );
}

export default App;
