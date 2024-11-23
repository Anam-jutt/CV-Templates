import './App.css'
import Home from './Templates/Home';
import NavBar from './Templates/NavBar';
import Page from './Templates/Page404';
import Temp1 from './Templates/Temp1'
import Temp2 from './Templates/Temp2'
import Temp3 from './Templates/Temp3'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <div>
      <BrowserRouter>
        <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Temp1" element={<Temp1 />} />
            <Route path="/Temp2" element={<Temp2 />} />
            <Route path="/Temp3" element={<Temp3 />} />
            <Route path="/*" element={<Page />} />
          </Routes>
      </BrowserRouter>
      </div>
    </>
  )
}

export default App
