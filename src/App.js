import './styles/App.css';
import Main from './pages/Main';
import Login from './pages/Login';
import Quiz from  './components/Quiz/Quiz.js';
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
