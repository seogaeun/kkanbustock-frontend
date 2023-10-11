import './App.css';
import Main from './pages/MainPage/MainPage.js';
import Login from './pages/LoginPage/LoginPage.js';
import Quiz from  './pages/QuizPage/QuizPage.js';
import Nav from './components/Nav/Nav.js';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Nav/>
      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path="/My" element={<Login />} />
        <Route path="/Quiz" element={<Quiz />} />
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
