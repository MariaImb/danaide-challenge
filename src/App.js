import "./App.css";
import Header from './components/Header';
// import { Link } from 'react-router-dom';
import Galeria from './components/Galeria';
import Playlist from './components/Playlist';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';


function App() {
    return (
      <>
      <Router>
        <Header/>
        <Routes>
          <Route path='/' exact element={<Galeria/>}/>
          <Route path='/playlist' element={<Playlist/>}/>
        </Routes>
      </Router>
      </>
      
    );
}

export default App;
