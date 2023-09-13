import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout, NoPage, Homepage, Blog, AboutMe } from "./pages";

const App = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Homepage />} />
          <Route path="Blog" element={<Blog />} />
          <Route path="About" element={<AboutMe />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
