import {
  Header,
  IconMenu,
  Navigation,
  ContentBlock,
  Route,
} from "./components";
import useCurrentPath from "./hooks/useCurrentPath";
import data from "./data";

function App() {
  const currentPath = useCurrentPath();
  const { title, sideMenu, navigation, content } = data;

  return (
    <div className="dashboard">
      <Header title={title} />
      <div className="wrapper">
        <IconMenu
          menuLinks={sideMenu}
          activeLink={currentPath}
          userLoggedIn={true}
        />
        <Route path="/" currentPath={currentPath}>
          <Navigation menuLinks={navigation.home} />
          <ContentBlock
            heading={content.home.heading}
            content={content.home.content}
          />
        </Route>
        <Route path="/completed" currentPath={currentPath}>
          <Navigation menuLinks={navigation.completed} />
          <ContentBlock
            heading={content.completed.heading}
            content={content.completed.content}
          />
        </Route>
        <Route path="/logout" currentPath={currentPath}>
          <ContentBlock
            heading={content.logout.heading}
            content={content.logout.content}
          />
        </Route>
      </div>
    </div>
  );
}

export default App;
