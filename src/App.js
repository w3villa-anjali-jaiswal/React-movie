import Login from './Components/Authentication/Login';
import SignUp from './Components/Authentication/SignUp';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Protected from './Components/Protected';
import MovieList from './Components/Header/MovieList';
import MovieDetails from './Components/Header/MovieDetails ';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/home" element={<Protected component={MovieList} />} />
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/movie/:id" element={<Protected component={MovieDetails}/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
