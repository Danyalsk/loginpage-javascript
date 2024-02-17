// App.js
import React from "react";
import Login from "./Login";
import NextPage from "./NextPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/nextpage" element={<NextPage />} />
        </Routes>
      </div>
    </Router>
  );
};
export default App;
