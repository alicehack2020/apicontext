import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Login from './components/Login';
import Home from './components/Home';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="Login" element={<Login />} />
     </Routes>
    </div>
  );
}

export default App;
