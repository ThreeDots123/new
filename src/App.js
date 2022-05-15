import React from "react";
import "./App.css";
import {
  Route,
  Routes
} from "react-router-dom"
import Main from "./main";
import Dashboard from "./dashboard";

// I'm going to create two files
// first file will be called main.js
// seconf=d file will be dashboard.js


// i'll move your code to the main.js (you'll see why)

function App() {
  return <>
  {/* Here main.js file which contains your code will be one component and dashboard.js will be the second component that you'll navigate to */}

  {/* Path indicates a url where you can access and element indicates the component that will be rendered in that url */}
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  </>
}

export default App;