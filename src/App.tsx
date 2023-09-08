import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout, NoPage, Basepage, Blog, Music } from "./pages";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Basepage />} />
          <Route path="Blog" element={<Blog />} />
          <Route path="Music" element={<Music />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
