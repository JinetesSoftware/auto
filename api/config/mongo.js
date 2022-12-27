require("dotenv").config();
const mongoose = require("mongoose");
mongoose.set("strictQuery", false);

const dbConnect = () => {
  const DB_URI = process.env.MONGO;
  mongoose.connect(
    DB_URI,
    {
    useNewUrlParser: true,
    useUnifiedTopology: true
    },
    (err, res) => {
      if (!err) {
        console.log("connect to MONGO DB");
        return;
      } else {
        console.error(err);
      }
    }
  );
};

module.exports = dbConnect;