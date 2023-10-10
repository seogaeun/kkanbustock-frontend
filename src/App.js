import './styles/App.css';
import Login from './components/Login/Login.js';
import InvestType_intro from './pages/InvestType_intro';
import InvestType_question from './pages/InvestType_question';

function App() {
  return (
    <div className="App">
      <InvestType_question />
    </div>
  );
}

export default App;
