import {BrowserRouter as Router ,Routes,Route} from 'react-router-dom';
//import { useState } from 'react';
//import Hompage from './Component/home/Hompage';
import './App.css';
//import CustomSlider from "./Component/txt/Slider";
//import CustomPrompt from "./Component/txt/HomePage";
//import CustomCheck from './Component/txt/CheckBox';
//import CustomButton from './Component/txt/Button';
import ImgPage from "./Component/img2img/IMGtoIMG";
import TxtPage from "./Component/txt2txt/TXTtoIMG";

function App() {
  //const [userstate, setUserState] = useState({});
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
