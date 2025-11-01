import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import UserList from "./components/UserList";
import UserDetails from "./components/UserDetails";

function App() {
  return (
    <Router>
      <div style={{ margin: "20px" }}>
        <h1>Dynamic Routing</h1>
        <nav style={{ marginBottom: "15px" }}>
          <Link to="/" style={{ marginRight: "10px" }}>Home</Link>
          <Link to="/users">Users</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<UserList />} />
          <Route path="/user/:id" element={<UserDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
