import SignInSide from "./components/Sign_up/Sign_up";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebaseConfig"; // Importa la configuración de Firebase desde archivo firebaseConfig.js

// Inicializa Firebase con la configuración del proyecto
const firebaseApp = initializeApp(firebaseConfig);

function App() {
  return (
    <Router>
      <div >
        <Header/>
        <Routes>
          <Route path="sign-up" element={<SignInSide />} />
          <Route path="/" element={<Home/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
