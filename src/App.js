import './App.css';
import MainPage from './pages/MainPage/MainPage.js';
import LoginPage from './pages/LoginPage/LoginPage.js';
import QuizPage from  './pages/QuizPage/QuizPage.js';
import DictionaryPage from './pages/DictionaryPage/DictionaryPage';
import Nav from './components/Nav/Nav.js';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import InvestType_intro from './pages/InvestType_intro.js';
import InvestType_question from './pages/InvestType_question.js';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Nav/>
      <Routes>
        <Route path='/' element={<MainPage/>}/>
        <Route path="/My" element={<LoginPage />} />
        <Route path="/Quiz" element={<QuizPage />} />
        <Route path='/Dictionary' element={<DictionaryPage/>} />
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
