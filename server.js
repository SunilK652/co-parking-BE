const express = require("express");
const { dbConnect } = require("./config/db");
const userRoutes = require("./routes/userRoutes");
const cors = require("cors");
const app = express();
app.use(cors());
require("dotenv").config();
const port = process.env.PORT || 3000;
dbConnect()
  .then(() => {
    app.listen(port, () => {
      console.log(`Example app listening at http://localhost:${port}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });

// middleware
app.use(express.json());

app.use((req, res, next) => {
  next();
});

app.get("/", (req, res) => {
  res.send("Welcome to Co-parking.. Live free");
});

app.use("/api/user", userRoutes);
