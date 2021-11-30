const express = require("express");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/dbworkout", {
  useNewUrlParser: true,
});
app.use(require("./routes/apiRoutes"));
app.use(require("./routes/htmlRoutes"));
app.listen(PORT, () => {
  console.log(`Workout tracker running on port ${PORT}`);
});
