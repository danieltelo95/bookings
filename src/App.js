import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import SearchPage from "./components/SearchPage/SearchPage";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div >
        <Header/>
        <Routes>
          <Route path="/search" element={<SearchPage/>} /> 
          <Route path="/" element={<Home/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
