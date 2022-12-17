
import { BrowserRouter, Routes, Route } from "react-router-dom";

// PAGES 
import { Home, Contact } from "./pages";       //no need to specify index.js
// COMPONENTS 
import { Header, Footer } from "./components"; //no need to specify index.js



function App() {
  return (
    <>
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/contact" element={ <Contact /> } />
      </Routes>
    <Footer />
    </BrowserRouter>
    </>
  );
}

export default App;
