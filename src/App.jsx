
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
//import { DarkModeContext } from "./Components/utils/global.context";
import { Route, Routes } from "react-router-dom";
import Home from "./Routes/Home";
import Contact from "./Routes/Contact";
import Favs from "./Routes/Favs";
import Detail from "./Routes/Detail";
function App() {

  return ( 
  // <DarkModeProvider>
      <div className="App">
          <Navbar/>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/favs" element={<Favs/>}/>
            <Route path="/dentist/:id" element={<Detail/>}></Route>
          </Routes>
          <section>
            divider
          </section>
          <Footer/>
      </div>
      /* </DarkModeProvider> */
  );
}

export default App;
