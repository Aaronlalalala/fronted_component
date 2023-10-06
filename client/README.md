This is a fronted package of InstAI PROJECT ,and we are develope the model accekerator
Here is the devlopment goal of this project
1. Check the api route of upload/download/checkdata => for the process of image and yoloV5 or XML
2. Autodefine the version of the dependcies file and model in package.json 
3. Design the model page for reprsenting the model from Stable diffusion and other small model...
4. Adjust the bug in the current version of InstAI web 
5. Push the web database to AWS => Image and model for S3, other information are stored in RDS.


Illustration of the component in this web
1. Register/LOGIN:
   In this component, we use the combination of frontend andbackend to make sure that this component can work,and we use MYSQL as the database for storing the information, like gmail, first_name, last_name, and password. 
2. TXTtoIMG/IMGtoIMG: In this page, we use the child component and father component to deal with the data from the input of user. In these 2 
   component pages , we can use button, dropbox, checkbox, prompt, slider to verify the json data by using the way of onChanege to deliver the information from child component to father component.
3. Upload/Download: These 2 component provide the function of processing the data from the backend and it can allow the user to train their 
   model and see the result in the model page. 


