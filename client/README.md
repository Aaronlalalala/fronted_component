# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)


因為我是用creaye-creat-app new-app寫 才會有這麼多guide line
web上主要分成幾個元件 有可以輸入字串的prompt 我是用input的寫法 有可以下拉的菜單(Drio box),可勾選選項(check box),滑軌(slider),按鈕(btn),然後分別配置到txt2img 還有 img2img 這兩個頁面 再用app.js將兩者用react-router-dom串在一起 並且這兩個頁面都可用NavLink連接 


1. component 定標  使用onChange去監聽數值變動
    prompt: "",    // prompt 
    seed: 0, //randoom value -1 to infinite => 使用slider 去做數值調動 int  (V)
    batch_size: 0, // slider                                               (v)
    steps: 0, // slider                                                    (v)
    cfg_scale: 0, //slider                                                 (V)
    width: 0, //slider (fix)                                               (V)
    height: 0, //slider (fix)                                              (V)
    restore_faces: false, //checkBox                                       (v)
    tiling: false, //checkBox                                              (V)
    negative_prompt: "", //prompt                                          (V)
    denoising_strength: 0, //slider                                        (V)
    override_settings: {
      sd_model_checkpoint: "" }    // checkPoint => DropBox 

    n_iter: 0, //  => BatchCount                                           (V)
-------------------------------------不確定區域------------------------------------------------------------------------------------------
     resize_mode: 0, //slider                                               (X)                                                       
    styles: [], //選集
    eta: 0, // ?
    sampler_index: "",  //?
    alwayson_scripts: "",init_images: "",   // phote to string in binary 
    inpaint_full_res: false, // ?
    inpaint_full_res_padding: 0, // button check  
    inpainting_mask_invert: 0, // ?
    initial_noise_multiplier: 0, // ?
    mask_blur: 0, //?

----------------------------------------------------------------------------------------------------------------------------------------
2. 元件修改 --> onChanege 
3. parent component 監聽
    針對PROMPT的文字轉成字串 針對SLIDER 的數值轉成INT 針對CHECKBOX的勾選狀態轉成BOOLEAN VALUE 
    在TXTPage 及 IMGPage 調用元件的數值 用prop傳遞參數到父組件
---------------------------------------------------------------------------------------------------------------------------------------- 
4. 回傳json
    將多個按鈕的值做成可變動 但是用Generte按鈕來控制json文件的傳遞 避免後端服務擁擠
----------------------------------------------------------------------------------------------------------------------------------------
5. 確認對應api json to backend dataBase
----------------------------------------------------------------------------------------------------------------------------------------
6. 新增component : (1) 圖片預覽
                   (2) 圖片上傳
                   (3) 圖片下載
                   (4) 模型訓練
                   (5) 模型上傳與下載
                   (6) ........






