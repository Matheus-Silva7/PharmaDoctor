import "./App.css";
import { Route, Routes } from "react-router-dom";


import Home from "./routes/Home";
import About from "./routes/About";
import Services from "./routes/Services";
import Team from "./routes/Team";
import Contact from "./routes/Contact";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/services" element={<Services/>}/>
      <Route path="/team" element={<Team/>}/>
      <Route path="/contact" element={<Contact/>}/>
    </Routes>
  );
}

export default App;
