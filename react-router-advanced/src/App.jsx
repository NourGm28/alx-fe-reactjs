import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import BlogPost from "./pages/BlogPost";

const App = () => {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link> | <Link to="/profile">Profile</Link> |{" "}
        <Link to="/blog/1">Blog Post 1</Link>
      </nav>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile/*" element={<Profile />} />
        <Route path="/blog/:id" element={<BlogPost />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;