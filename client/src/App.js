import {BrowserRouter as Router ,Routes,Route} from 'react-router-dom';
import './App.css';
import IMGtoIMG from "./Component/img2img/IMGtoIMG";
import TXTtoIMG from "./Component/txt2txt/TXTtoIMG";
import ModelPage from "./Component/Model/modelPage";
import Decode from "./Component/Model/Decode";
function App() {
  
  return (
  <div className="App">
    <Router>
     <Routes>
      <Route path='/' element={<TXTtoIMG/>}></Route>
      <Route path="/IMGtoIMG" element={<IMGtoIMG/>}></Route>
      <Route path="/ModelPage" element={<ModelPage/>}/>
      <Route path="/Decode" element={<Decode/>}/>
     </Routes>
    </Router>
  </div>
    
  );
}

export default App;
