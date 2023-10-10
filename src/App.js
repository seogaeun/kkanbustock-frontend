import './styles/App.css';
import Login from './components/Login/Login.js';
import Nav from './components/Nav/Nav.js';
import { BrowserRouter } from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Nav/>
    </div>
    </BrowserRouter>
  );
}

export default App;
