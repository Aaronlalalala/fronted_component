import {BrowserRouter as Router ,Routes,Route} from 'react-router-dom';
import './App.css';
import ImgPage from "./Component/img2img/IMGtoIMG";
import TxtPage from "./Component/txt2txt/TXTtoIMG";
function App() {
  
  return (
  <div className="App">
    <Router>
     <Routes>
      <Route path='/' element={<TxtPage/>}></Route>
      <Route path="/ImgPage" element={<ImgPage/>}></Route>
     </Routes>
    </Router>
  </div>
    
  );
}

export default App;
