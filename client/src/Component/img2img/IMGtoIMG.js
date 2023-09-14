import React from "react";
import { NavLink } from 'react-router-dom';
import "./IMG.css";
import CheckPoint from "../DropBox/CheckPoint";
import Prompt from "../Prompt/Prompt";
import NegativePrompt from "../Prompt/NegativePrompt";
function IMGtoIMG(){
    <div className = 'IMGcontainer'>
         <div style={{width:"25%"}}>
            <CheckPoint/>
         </div> 
         <div>
            <span>
                <NavLink to ='/'><button>TXTtoIMG</button></NavLink>
            </span>
         </div>
         <div className={{color:'black'}}>
         <div className="PromptStyle">
            <div><Prompt/></div>
            <div><NegativePrompt/></div>
         </div>
         </div>
    </div>
}
export default IMGtoIMG;