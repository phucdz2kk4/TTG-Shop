const mongoose = require("mongoose"); // ket noi mongodb

module.exports.connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("Connect successfully!");
  } catch (err) {
    console.log(err);
  }
};
