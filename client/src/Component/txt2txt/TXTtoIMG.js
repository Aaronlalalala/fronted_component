import React, { useState } from "react";
import "./TXT.css";
import Dice from "../Button/Dice";
import Revolve from "../Button/Revolve";
import Generate from "../Button/Generate"; 
import Hires from "../CheckBox/Hires";
import RestoreFaces from "../CheckBox/RestoreFaces";
import Tilling from "../CheckBox/Tilling";
import CheckPoint from "../DropBox/CheckPoint";
import SamplingMethod from "../DropBox/SamplingMethod";
import Styles from "../DropBox/Styles";
//import Script from "../DropBox/Script";
import NegativePrompt from "../Prompt/NegativePrompt";
import Prompt from "../Prompt/Prompt";
import Seed from "../Slider/Seed";
import BatchCount from "../Slider/BatchCount";
import BatchSize from "../Slider/BatchSize"; 
import CFGScale from "../Slider/CFGScale";
import SamplingStep from "../Slider/SamplingStep";
import Width from "../Slider/Width";
import { NavLink } from "react-router-dom";
import Height from "../Slider/Height";
import axios from "axios";

// 已新增prompt , slider , checkBox之onChange 

function TxtPage() {
  const [isConfirmationOpen, setIsConfirmationOpen] = useState(false);
  const [formData, setFormData] = useState({
    prompt: "",    // prompt 
    negative_prompt: "",  //prompt 
    denoising_strength: 0, //slider 
    styles: [], //選集
    seed: 0, //randoom value -1 to infinite
    batch_size: 0, // slider 
    n_iter: 0, // ?
    steps: 0, // slider 
    cfg_scale: 0, //slider 
    width: 0, //slider (fix)
    height: 0, //slider (fix)
    restore_faces: false, //checkBox
    tilling: false, //checkBox
    eta: 0, // ?
    sampler_index: "",  //?
    alwayson_scripts: "",
  });
  function camelCaseToSnakeCase(input) {
    return input.replace(/([a-z])([A-Z])/g, '$1_$2').toLowerCase();
  }
  const handleFormDataChange = (fieldName, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [fieldName]: value,
    }));
  
    // 查看更新
    console.log(`Field ${fieldName} updated to:`, value);
  };

  const HandleGenerateClick = () => {
    const confirmed = window.confirm("確定要提交嗎？");
    if (confirmed) {
      const TxtToImgData = {
        method: "POST",
        request: Object.keys(formData).reduce((acc, key) => {
          acc[camelCaseToSnakeCase(key)] = formData[key];
          return acc;
        }, {}),
        response: {
          message: "請求成功",  
        },
      };
      Jsonfunction(TxtToImgData);
    }
  };
//-----------------------------------------------------------------------------------------------------------------------------------------//
  /*
    function ParentComponent() {
    const [childValue, setChildValue] = useState("");

    // 步骤 1: 定义回调函数
    const handleChildValueChange = (newValue) => {
    setChildValue(newValue); // 在这里更新父组件的状态
    }; 

    return (
    <div>
      <ChildComponent onChange={handleChildValueChange} />
      <p>Child Value in Parent: {childValue}</p>
    </div>
    );
    }

    export default ParentComponent; 
    */
//------------------------------------------------------------------------------------------------------------------------------------------//
  async function Jsonfunction(TxtToImgData) {
    try {
      await axios.post("http://localhost:8080/api/txt2img/process", TxtToImgData.request);
      alert("轉換成功");
    } catch (error) {
      console.error("Error sending data to backend:", error);
    }
  };

  return (
    <div className="TXTcontanier">
      <div style={{position:"absolute",left:"300px" }}>
        <CheckPoint />
      </div>
      <div className="NavStyle">
        <span>
          <NavLink to="/ImgPage">
            <button>ImgPage</button>
          </NavLink>
        </span>
      </div>
      <div className="ButtonStyle">
        <div>
          <Dice />
        </div>
        <div>
          <Generate onClick={HandleGenerateClick}/>
        </div>
        <div>
          <Revolve />
        </div>
      </div>
      <div className="PromptStyle">
        <div>
          <Prompt value={formData.prompt} onChange={(value) => handleFormDataChange("prompt",value)} />
        </div>
        <div>
          <NegativePrompt value={formData.negative_prompt} onChange={(value) => handleFormDataChange("negative_prompt",value)} />
        </div>
      </div>
      <div className="DropBoxStyle" style={{position:"relative",left:"30%"}}>
        <SamplingMethod />
      </div>
      <div className="SliderStyle">
        <SamplingStep value={formData.steps} onChange={(value) => handleFormDataChange("steps",value)} />

      </div>
      <div className="CheckBoxStyle">
        <div>
          <RestoreFaces value={formData.restore_faces} onChange={(value) => handleFormDataChange("restore_faces",value)}/>
        </div>
        <div>
          <Tilling value={formData.tilling} onChange={(value) => handleFormDataChange("tilling",value)} />
        </div>
        <div>
          <Hires />
        </div>
        <div >
          <Styles />
        </div>
      </div>
      <div className="SliderStyle">
        <div>
          <Width value={formData.width} onChange={(value) => handleFormDataChange("width",value)} />
        </div>
        <div>
          <BatchCount />
        </div>
        <div>
          <Height value={formData.height} onChange={(value) => handleFormDataChange("height",value)}/>
        </div>
        <div>
        <BatchSize value={formData.batch_size} onChange={(value) => handleFormDataChange('batch_size', value)} />
        </div>
        <div>
          <CFGScale value={formData.cfg_scale} onChange={(value) => handleFormDataChange("cfg_scale",value)} />
        </div>
      </div>
      <div className="PromptStyle">
        <Seed value={formData.seed} onChange={(value)=>handleFormDataChange("seed",value) }/>
      </div>
    </div>
  );
}

export default TxtPage;

