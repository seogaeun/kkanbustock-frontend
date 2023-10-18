import "./App.css";
import MainPage from "./pages/MainPage/MainPage.js";
import LoginPage from "./pages/LoginPage/LoginPage.js";
import QuizPage from "./pages/QuizPage/QuizPage.js";
import DictionaryPage from "./pages/DictionaryPage/DictionaryPage";
import RivalPage from "./pages/RivalPage/MainRivalPage";
import Nav from "./components/Nav/Nav.js";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import React, { useEffect, useState } from "react";
import MyPage from "./pages/MyPage/MyPage";
import SignupPage from "./pages/SignupPage/SignupPage";
import { TokenProvider } from './pages/LoginPage/TokenContext';

function App() {
  const [scroll, setScroll] = useState(0);

  return (
    <BrowserRouter>
    <TokenProvider>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/My" element={<MyPage />} />
          <Route path="/Quiz" element={<QuizPage />} />
          <Route path="/Rival" element={<RivalPage />} />
          <Route path="/Dictionary" element={<DictionaryPage />} />
          <Route path="/Signup" element={<SignupPage />} />
          <Route path="/Login" element={<LoginPage />} />
        </Routes>
      </div>
      </TokenProvider>
    </BrowserRouter>
  );
}

export default App;
