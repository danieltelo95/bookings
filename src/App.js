import SignUpSide from "./components/Sign_up/Sign_up";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebaseConfig"; // Importa la configuración de Firebase desde archivo firebaseConfig.js
import LoginForm from "./components/Signin/Sign_in";

// Inicializa Firebase con la configuración del proyecto
const firebaseApp = initializeApp(firebaseConfig);

function App() {
  return (
    <Router>
      <div >
        <Header/>
        <Routes>
          <Route path="sign-in" element={<LoginForm />} />
          <Route path="sign-up" element={<SignUpSide />} />
          <Route path="/" element={<Home/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
