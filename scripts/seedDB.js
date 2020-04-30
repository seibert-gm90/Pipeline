const mongoose = require("mongoose");
const db = require("../models");
mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/projectThree"
);

const assistantSeed = [
    {
  name: "Sally Henson",
  phoneNumber: "434-223-5689",
  email: "1234@gmail.com",
  date: new Date(Date.now())
    },
    {
  name: "Mirna Tehri",
  phoneNumber: "434-547-4590",
  email: "Tehri@gmail.com",
  date: new Date(Date.now())
    },
    {
  name: "Paul Timm",
  phoneNumber: "434-445-9900",
  email: "houseandhome@gmail.com",
  date: new Date(Date.now())
    }
];

db.Assistant
  .remove({})
  .then(() => db.Assistant.collection.insertMany(assistantSeed ))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });