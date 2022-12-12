import {BrowserRouter, Routes, Route} from "react-router-dom"
import Films from "../pages/Films";
import Seats from "../pages/Seats";
import Sessions from "../pages/Sessions";
import Success from "../pages/Success";
import NavBar from "./NavBar"
import GlobalStyle from "../globalStyles"
import { useState } from "react";

function App() {
  const [arraySeats, setArraySeats] = useState([])
  
  return (
    <BrowserRouter>
    <GlobalStyle/>
    <NavBar/>
    <Routes>
      <Route path="/" element={<Films/>}/>
      <Route path="/sessions/:idFilm" element={<Sessions/>}/>
      <Route path="/seats/:idSession" element={<Seats arraySeats={arraySeats} setArraySeats={setArraySeats} />}/>
      <Route path="/success" element={<Success />}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App;
