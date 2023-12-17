# Remote-Engine

## Introduction
A web application that facilitates the registration and onboarding process for both clients and developers.

## Deployed App

### frontend

https://remote-engine.vercel.app/

### backend

https://engine-1hin.onrender.com

## Video Walkthrough of the project

https://drive.google.com/file/d/13Ao1ygUKRxdZXdWED7IYD14vf2ufnux2/view?usp=drive_link


## Features

- SignUp
- Login
- Authentication
- Authorization

## design decisions or assumptions

List your design decisions & assumptions

 Assumptions: -
- SignUp Page :- For Developers(users) to register themselves to application.
- Login Page :- For Developers(users) to log in using credentials provided at the time of registration.
- Onboarding Page :- For Developers(users) to fill up the onboarding form using required credentials.
- View Application Page :- For Clients(Company) to view all the Applications.


## Installation & Getting started
Detailed instructions on how to install, configure, and get the project running.

Step 1. Clone this Repository using Command
```bash
git clone Repository Url
```

Step 2. Install all the necessary dependencies

frontend
```bash
cd frontend
npm install
```
this will install all the necessary dependencies on your frontend

backend
```bash
cd backend
npm install
```
this will install all the necessary dependencies on your backend

Step 3. Create .env flie inside your backend folder and add below informations
```bash
mongoUrl = "mongodb+srv://murmuparmeshwar:murmuparmeshwar@cluster0.nnesbwa.mongodb.net/RemoteEngine?retryWrites=true&w=majority"
PORT = 8000
SECRET_KEY = 'RemoteEngineAssessment'

```
Step 4. Start your backend server. Open terminal and write the below commands
```bash
cd backend
npm run server

```
this will start your backend server

Step 5. Start your frontend application. Open terminal and write the below commands
```bash
cd frontend
npm start

```
this will start your frontend application


# Usage
How to use your project.

## SignUp 

To Register to this application you have to use your Email id and on clicking on submit button you will see an alert message SignUp Successfully.

![R-SignUp Again](https://github.com/ParmeshwarMurmu/Remote-Engine/assets/121368970/49bf9883-d02a-4b2c-a46a-c4483caac5c8)


## Login 

To login you have to use the same Email id used at the time of Registration. And if the credential is correct you will be loged in showing an alert loged in successfully.

![R-LoginAgain](https://github.com/ParmeshwarMurmu/Remote-Engine/assets/121368970/58fe97bf-6e05-4a74-8361-4aabc43ab4df)

## Onboarding 

After Login On the same page you will see Onboarding  hyperlink 🔗  and on clicking you will redirect to Onboarding Page.
Now, Fill up all your credentials as required and click on submit button.

![R-Onboarding Form](https://github.com/ParmeshwarMurmu/Remote-Engine/assets/121368970/e0790489-ce1d-468b-94f2-6cebd162367c)

![R-onboarding form 2](https://github.com/ParmeshwarMurmu/Remote-Engine/assets/121368970/a7a59d3b-6cef-4c36-a3d6-400e00de9ebd)

## Professional Experience

While filling up professional Experiences You can add multiple experiences using the button Add Professional Experience and also you can remove experiences using button Remove Professional Experience
### Note ****

If all your Information are correct Please Click OK to save your Professional Experiences before moving to other sections

![Professional Experience](https://github.com/ParmeshwarMurmu/Remote-Engine/assets/121368970/a1165950-8722-4857-8bb6-ca84dc0e543c)

## Educational Experiences

While filling up Educational Experiences You can add multiple experiences using the button Add Educational Experience and also you can remove experiences using button Remove Educational Experience

### Note ****

If all your Information are correct Please Click OK to save your Educational Experiences before moving to other sections

![Educational Experiences](https://github.com/ParmeshwarMurmu/Remote-Engine/assets/121368970/f7826861-8bdb-4fcf-86bd-29f3443cac1e)

## Final Step Submit Form
After Confirming all the details that have been filled click on submit button to sumbit your form.
you will see an alert with message Submitted Successfully.

![Submit](https://github.com/ParmeshwarMurmu/Remote-Engine/assets/121368970/a022858c-5a08-4e7c-ad95-e591e38c201b)

## View Application 

after being loged out (logout Button on onboarding page) on signup page you will see View All Application Hyperlink 🔗 On clicking you will redirect to a page when you can see all Applications with dteails.![ViewApp](https://github.com/ParmeshwarMurmu/Remote-Engine/assets/121368970/6b328b6d-1f86-432b-9d8a-42bdcf1dee7a)



## API Endpoints
In case of Backend Applications provide a list of your API endpoints, methods, brief descriptions, and examples of request/response.

## For Registering User

POST /user/signUp 

Example:-

Request
```bash
{
email: "json@gmail.com"
}
```

Response
```bash
{
"message" : "SignUp Successfully"
}
```

## For Login

POST /user/login 

Request
```bash
{
email: "json@gmail.com"
}
```

Response
```bash
{
"message": "Login Successfully", "userId": existingUser._id, "token": token
}
```

## Add Skills

POST /skill/add


Request

```bash
{
skill: "HTML"
}
```

Response
```bash
{ "message": "Skill Added" }
```

## Get PreDefined Skills


GET /skill/predefinedSkills



Response
```bash
{
"predefinedSkills": [{_id:"1343sfd", skill: 'HTML'}]
}
```

## Submitting Onboarding Form

POST /onboarding/submit



Request

```bash
{
skill: "HTML"
}
```

Response
```bash
{ "message": "Skill Added" }
```




## Technology Stack

To build this application technologies used.
- React
- Redux
- Node.js
- Express.js
- MongoDB
