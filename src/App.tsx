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
  const { title, sideMenu, navigation, pages } = data;

  return (
    <div className="dashboard">
      <Header title={title} />
      <div className="wrapper">
        <IconMenu
          menuLinks={sideMenu}
          activeLink={currentPath}
          userLoggedIn={true}
        />
        {/* Create Pages */}
        {pages?.map(({ path, heading, content }, index) => (
          <Route
            path={path}
            currentPath={currentPath}
            key={`${path}${heading}-${index}`}
          >
            <Navigation
              menuLinks={
                currentPath.includes("/completed")
                  ? navigation.completed
                  : navigation.home
              }
            />
            <ContentBlock heading={heading} content={content} />
          </Route>
        ))}
        {/* Create Sub Pages with their headings */}
        {navigation.home?.map(({ link, label }, index) => (
          <Route
            path={link}
            currentPath={currentPath}
            key={`${link}${label}-${index}`}
          >
            <Navigation menuLinks={navigation.home} />
            <ContentBlock heading={label} content={pages[0].content} />
          </Route>
        ))}
        {navigation.completed?.map(({ link, label }, index) => (
          <Route
            path={link}
            currentPath={currentPath}
            key={`${link}${label}-${index}`}
          >
            <Navigation menuLinks={navigation.completed} />
            <ContentBlock heading={label} content={pages[0].content} />
          </Route>
        ))}
      </div>
    </div>
  );
}

export default App;
