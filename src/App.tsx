import { useMemo } from "react";
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

  const allPages = useMemo(() => {
    // make all sub pages
    const primarySubLinks = navigation.home?.map(({ link, label }) => ({
      heading: label,
      path: link,
      content: pages[0].content,
    }));
    const secondarySubLinks = navigation.completed?.map(({ link, label }) => ({
      heading: label,
      path: link,
      content: pages[0].content,
    }));

    // make all pages
    const pagesArray = [...pages, ...primarySubLinks, ...secondarySubLinks];
    return pagesArray;
  }, [data]);

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
        {allPages?.map(({ path, heading, content }, index) => (
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
      </div>
    </div>
  );
}

export default App;
