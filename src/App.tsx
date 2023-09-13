import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout, NoPage, Homepage, Blog, AboutMe } from "./pages";

const App = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/Personal-website/" element={<Layout />}>
          <Route index element={<Homepage />} />
          <Route path="/Personal-website/Blog" element={<Blog />} />
          <Route path="/Personal-website/About" element={<AboutMe />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
