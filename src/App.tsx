import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout, NoPage, Homepage, Blog, AboutMe, Portfolio } from "./pages";
import { useMediaQuery } from "react-responsive";
import { isMobileContext } from "./helpers/helpers";

const App = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 1224px)" });

  return (
    <isMobileContext.Provider value={isMobile}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Homepage />} />
            <Route path="/Blog" element={<Blog />} />
            <Route path="/About" element={<AboutMe />} />
            <Route
              path="/Personal-website"
              element={
                <Homepage />
              } /* This is just becuase of how gitpages handles routing with React-Router :/ */
            />
            <Route path="/Portfolio" element={<Portfolio />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </isMobileContext.Provider>
  );
};

export default App;
