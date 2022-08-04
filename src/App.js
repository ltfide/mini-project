import "./App.css";
import { Home } from "./views/Home";
import { About } from "./views/About";
import { Photo } from "./views/Photo";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
   return (
      <div className="pb-14 relative min-h-screen bg-gradient-to-r from-white  to-green-100">
         <Router>
            <Header />

            <Routes>
               <Route path="/" element={<Home />} />
               <Route path="/about" element={<About />} />
               <Route path="/photo/:id" element={<Photo />} />
            </Routes>
         </Router>
         <Footer />
      </div>
   );
}

export default App;
