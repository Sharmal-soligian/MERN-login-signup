import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import Signup from './components/Signup';
import Home from './components/Home';
import PrivateRoutes from './guard/PrivateRoutes';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        {/* <Route path='/home' element={ <Home /> } /> */}
        <Route element={<PrivateRoutes />}>
          <Route path='/home' element={<Home />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
