const mongoose = require("mongoose");
// const { dbURL } = require("./config");

const dbURL = 'mongodb+srv://skulkarni652:Sunil123@cluster0.jnmgx4n.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

exports.dbConnect = async function () {
  try {
    await mongoose.connect(dbURL, {
      // useNewUrlParser: true,
      // useUnifiedTopology: true,
    });
    console.log("DB Connected");
  } catch (error) {
    console.log("DB Connection failed: ", error);
  }
};