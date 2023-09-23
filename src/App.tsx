import React from "react";
import { useMediaQuery } from "react-responsive";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout, NoPage, Homepage, Blog, AboutMe, Portfolio } from "./pages";

const App = () => {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout isMobile={isTabletOrMobile} />}>
          <Route index element={<Homepage isMobile={isTabletOrMobile} />} />
          <Route path="/Blog" element={<Blog isMobile={isTabletOrMobile} />} />
          <Route
            path="/About"
            element={<AboutMe isMobile={isTabletOrMobile} />}
          />
          <Route
            path="/Personal-website"
            element={
              <Homepage isMobile={isTabletOrMobile} />
            } /* This is just becuase of how gitpages handles routing with React-Router :/ */
          />
          <Route
            path="/Portfolio"
            element={<Portfolio isMobile={isTabletOrMobile} />}
          />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
