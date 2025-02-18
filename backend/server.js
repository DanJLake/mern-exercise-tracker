//Use Express
const express = require("express");
//Use cors
const cors = require("cors");
//Use Mongoose
const mongoose = require("mongoose");

require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

//Mongoose connection
const uri = process.env.ATLAS_URI;

mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true });
const connection = mongoose.connection;

connection.once("open", () => {
  console.log("MongoDB database connection established successfully");
});

//Server API endpoints
const exercisesRouter = require("./routes/exercises");
const usersRouter = require("./routes/users");

app.use("/exercises", exercisesRouter);
app.use("/users", usersRouter);

//App listen

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
