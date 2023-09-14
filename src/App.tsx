import React from "react";
import { useMediaQuery } from "react-responsive";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout, NoPage, Homepage, Blog, AboutMe } from "./pages";

const App = () => {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Homepage isMobileHook={isTabletOrMobile} />} />
          <Route path="/Blog" element={<Blog />} />
          <Route path="/About" element={<AboutMe />} />
          <Route
            path="/Personal-website"
            element={
              <Homepage isMobileHook={isTabletOrMobile} />
            } /* This is just becuase of how gitpages handles routing :/ */
          />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
