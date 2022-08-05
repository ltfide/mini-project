import "./App.css";
import { About } from "./views/About";
import { Gallery } from "./views/Gallery";
import { DetailPhoto } from "./views/DetailPhoto";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
   return (
      <div className="pb-14 relative min-h-screen bg-gradient-to-r from-white  to-green-100">
         <Router>
            <Header />

            <Routes>
               <Route path="/" element={<Gallery />} />
               <Route path="/about" element={<About />} />
               <Route path="/photo/:id" element={<DetailPhoto />} />
            </Routes>
         </Router>
         <Footer />
      </div>
   );
}

export default App;
