import {BrowserRouter as Router ,Routes,Route} from 'react-router-dom';
import './App.css';
import IMGtoIMG from "./Component/img2img/IMGtoIMG";
import TXTtoIMG from "./Component/txt2txt/TXTtoIMG";
function App() {
  
  return (
  <div className="App">
    <Router>
     <Routes>
      <Route path='/' element={<TXTtoIMG/>}></Route>
      <Route path="/IMGtoIMG" element={<IMGtoIMG/>}></Route>
     </Routes>
    </Router>
  </div>
    
  );
}

export default App;
