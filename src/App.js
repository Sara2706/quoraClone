import './App.css';
import Nav from './component/navBar';
import Home from './component/home';
import { BrowserRouter as Router, Routes, Route,} from 'react-router-dom'


function App() {
  return (
    <>
      <Router>
      <Nav/>
        <Routes>
          <Route path='/' element={<Home />}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
