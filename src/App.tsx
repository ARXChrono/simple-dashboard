import { useMemo, useState } from "react";
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
  const [activeIcon, setActiveIcon] = useState("home");

  const allPages = useMemo(() => {
    // make all sub pages
    const subPages = Object.values(navigation)
      .flat()
      .map(({ link, label }) => ({
        heading: label,
        path: link,
        content: pages[0].content,
      }));

    // make all pages
    const pagesArray = [...pages, ...subPages];
    return pagesArray;
  }, [data]);

  return (
    <div className="dashboard">
      <Header title={title} />
      <div className="wrapper">
        <IconMenu
          menuLinks={sideMenu}
          activeIcon={activeIcon}
          setActiveIcon={setActiveIcon}
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
              currentPath={currentPath}
            />
            <ContentBlock heading={heading} content={content} />
          </Route>
        ))}
      </div>
    </div>
  );
}

export default App;
