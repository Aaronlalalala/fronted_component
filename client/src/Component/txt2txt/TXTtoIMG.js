import React from "react";
import "./TXT.css";
import Dice from "../Button/dice";
import Revolve from "../Button/revolve";
import Hires from "../CheckBox/Hires";
import RestoreFaces from "../CheckBox/Restore faces";
import Tilling from "../CheckBox/Tilling";
import CheckPoint from "../DropBox/CheckPoint";
import SamplingMethod from "../DropBox/SamplingMethod";
import Script from "../DropBox/Script";
import NegativePrompt from "../Prompt/NegativePrompt";
import Prompt from "../Prompt/Prompt";
import Seed from "../Prompt/Seed";
import BatchCount from "../Slider/BatchCount";
import BacthSize from "../Slider/BatchSize";
import CFGScale from "../Slider/CFGScale";
import SamplingStep from "../Slider/SamplingStep";
import Width from "../Slider/Width";
import { NavLink } from "react-router-dom";
import Height from "../Slider/Height";
function TxtPage (){
    return(
    <div><Height/></div>
    )
}
export default TxtPage;


// 尚缺少圖片生產區 幾個按鈕 生圖片按鈕