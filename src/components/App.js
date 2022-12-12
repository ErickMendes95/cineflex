import {BrowserRouter, Routes, Route} from "react-router-dom"
import Films from "../pages/Films";
import Seats from "../pages/Seats";
import Sessions from "../pages/Sessions";
import NavBar from "./NavBar"
import GlobalStyle from "../globalStyles"
import { useState } from "react";

function App() {
  const [weekday, setWeekday] = useState("")
  const [sessionTime, setSessionTime] = useState("")
  const [image, setImage] = useState()
  const [title, setTitle] = useState()
    
  return (
    <BrowserRouter>
    <GlobalStyle/>
    <NavBar/>
    <Routes>
      <Route path="/" element={<Films/>}/>
      <Route path="/sessions/:idFilm" element={<Sessions setWeekday={setWeekday} 
      setSessionTime={setSessionTime} setImage={setImage} setTitle={setTitle}/>}/>
      <Route path="/seats/:idSession" element={<Seats image={image} title={title} weekday={weekday} sessionTime={sessionTime}/>}/>

    </Routes>
    </BrowserRouter>
  )
}

export default App;
