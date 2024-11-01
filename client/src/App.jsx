import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import React, { createContext } from 'react';
import "./App.css";
import HomePage from "./pages/HomePage.jsx";
import ViewProductPage from "./pages/ViewProductPage.jsx";

export const UserNameContext = createContext({});

function App() {
  
  const userData = {
    username: "John",
    avatar: "https://placedog.net/100/100",
    level: "platinum",
  };

  return (
    <div className="App">
      <UserNameContext.Provider value={userData}>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/product/view/:id" element={<ViewProductPage />} />
        </Routes>
      </Router>
      </UserNameContext.Provider>
    </div>
  );
}

export default App;
