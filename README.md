# MERN Exercise Tracker

## Technologies Utilized
### MERN Stack
- MongoDB (Atlas hosted)
- Express
- React
- Node.js
### Packages
- CORS (Cross Origin Resource Sharing) ([https://www.npmjs.com/package/cors](https://www.npmjs.com/package/cors))
- dotenv ([https://github.com/motdotla/dotenv](https://github.com/motdotla/dotenv))
- Mongoose ([https://mongoosejs.com/](https://mongoosejs.com/))
- Nodemon ([https://nodemon.io/](https://nodemon.io/))
- react-datepicker

## Project Description
Built to gain experience with the MERN stack, this is a simple application that logs information about exercises for multiple users, including a description of the exercise, the duration, date and the user.
The app consists of five React components:
#### Navbar
The navigation bar featured on every page, this contains a link to three of the four pages (the edit page is accessed via the corresponding list entry option).
#### Exercises List
The main page of the application, which displays a list of exercises logged.
#### Create Exercise
Allows logging of exercises, taking the following inputs in a form:
- Username (from a drop-down list of all users)
- Description
- Duration (in minutes)
- Date (from a date picker)
Exercises can also be deleted from the list, removing the entry from the database.
#### Create User
Allows creation of users by inputting username into a form and submitting.
#### Edit Exercise
Allows editing of existing exercises, contains the same form as the 'Create Exercise' component, but with the form data pre-filled with that existing in the database for the corresponding exercise.
