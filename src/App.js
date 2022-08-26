import './App.css';
import MainPage from './components/MainPage/MainPage';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import UserPage from './components/UserPage/UserPage';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path='/:id' element={<UserPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
