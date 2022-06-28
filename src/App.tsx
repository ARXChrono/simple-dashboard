import { useMemo, useState } from "react";
import useCurrentPath from "./hooks/useCurrentPath";
import {
  Header,
  IconMenu,
  Navigation,
  ContentBlock,
  Route,
} from "./components";
import data from "./data";

function App() {
  const currentPath = useCurrentPath();
  const [activeIcon, setActiveIcon] = useState("home");
  const { title, sideMenu, navigation, pages } = data;

  const allPages = useMemo(() => {
    // sub pages would normally come from pages
    const subPages = Object.values(navigation)
      .flat()
      .map(({ link, label }) => ({
        heading: label,
        path: link,
        content: pages[0].content,
      }));
    return [...pages, ...subPages];
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
