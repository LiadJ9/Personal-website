import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout, NoPage, Homepage, Blog, AboutMe } from "./pages";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Personal-Website/" element={<Layout />}>
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
