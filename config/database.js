// 5 Mongoose - kết nối với mongodb
const mongoose = require("mongoose");

module.exports.connect = async () => {
  try {
    await mongoose.connect(process.env.Mongo_URL);
    console.log("Connect to MongoDB successfully");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
};
