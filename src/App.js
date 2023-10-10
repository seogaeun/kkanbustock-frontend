import './styles/App.css';
import Main from './components/Main/Main.js';
import Login from './components/Login/Login.js';
import Quiz from  './components/Quiz/Quiz.js';
import Nav from './components/Nav/Nav.js';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import InvestType_intro from './pages/InvestType_intro';
import InvestType_question from './pages/InvestType_question';

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
      <InvestType_question />
    </div>
    </BrowserRouter>
  );
}

export default App;
