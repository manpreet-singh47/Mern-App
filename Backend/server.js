const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const users = require("./mernAppDb/userModel");
const bodyParser = require("body-parser");
const cors = require("cors");

dotenv.config();
app.use(cors());

mongoose
  .connect(process.env.URI)
  .then(() => {
    console.log("Database Connected");
  })
  .catch((err) => {
    console.log(err);
  });

app.use(express.json());
app.use(bodyParser.urlencoded());

app.get("/", function (req, res) {
  res.send("Api running");
});
app.get("/users", async function (req, res) {
  try {
    let usersAll = await users.find();

    res.status(200).json(usersAll);
  } catch (err) {
    res.status(400).json({ Message: err.message });
  }
});
app.get("/user/:id", async function (req, res) {
  try {
    let id = req.params.id;
    let userOne = await users.findOne({ _id: id });
    res.status(200).json(userOne);
  } catch (err) {
    res.status(400).json({ Message: err.message });
  }
});
app.delete("/deleteUser/:id", async function (req, res) {
  try {
    let deletedOne = await users.findByIdAndDelete({ _id: req.params.id });
    res.status(200).json(deletedOne);
  } catch (err) {
    res.status(400).json({ Message: err.message });
  }
});
app.put("/updateUser/:id", async function (req, res) {
  try {
    let id = req.params.id;
    const { fullname, email, age } = req.body;
    let UpdatedOne = await users.findByIdAndUpdate(id, req.body, { new: true });
    res.status(200).json(UpdatedOne);
  } catch (err) {
    res.status(400).json({ Message: err.message });
  }
});
app.post("/create", async function (req, res) {
  let { fullname, email, age } = req.body;
  try {
    let user = await users.create({
      fullname,
      email,
      age,
    });

    res.status(200).json(user);
  } catch (err) {
    console.log(err);
    res.status(400).json({ Message: err.message });
  }
});
app.listen(process.env.PORT);
