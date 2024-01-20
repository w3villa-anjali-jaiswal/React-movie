import Login from './Components/Authentication/Login';
import SignUp from './Components/Authentication/SignUp';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Header/Navbar';
import Protected from './Components/Protected';
import MovieList from './Components/Header/MovieList';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/home" element={<Protected component={MovieList} />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
