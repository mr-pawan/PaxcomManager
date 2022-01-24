# Paxcom Manager
Paxcom Manager handles the user registraton and Authorization to Login Window.
Based on authetication of a user sensitive data showed them. Admin and employess has different views and Acess of information

All the user data from login windows goes to apis to authorize the user. api's are communication to the server, facade pattern is used for code modularity and understable internal working of a flow.

# Internal Working
front end is written in NextJS(framework of React)
Backend written in Express Js, Both are running on different port

Project is built using Fast API server. Apis will be exposed to communicate with the server and to predict the intent. Server side and client side Authentication and rendering is done and exposing to different ports.

JWT token based authention is implemented

All the data stored in MongoDB database, admin can edit the details on UI, that will eventually update the information in Database.

 
### Exposed port
frontend is exposed to port  **3000**
backend is exposed to port **8000** ​ 

## Run - Development mode
To start the project in development mode, need to run command npm run dev 
 
​
​
