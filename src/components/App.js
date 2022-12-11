import {BrowserRouter, Routes, Route} from "react-router-dom"
import Films from "../pages/Films";
// import Seats from "../pages/Seats";
import Sessions from "../pages/Sessions";
import NavBar from "./NavBar"
import GlobalStyle from "../globalStyles"

function App() {
    
  return (
    <BrowserRouter>
    <GlobalStyle/>
    <NavBar/>
    <Routes>
      <Route path="/" element={<Films/>}/>
      {/* <Route path="/sessions/:idFilm" element={<Sessions/>}/> */}
      {/* <Route path="/seats/:idSession" element={<Seats/>}/> */}

    </Routes>
    </BrowserRouter>
  )
}

export default App;
