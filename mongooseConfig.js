const mongoose = require("mongoose");

mongoose.connect(process.env.ATLAS_URI);

mongoose.connection.on("error", (err) => console.log(err));
mongoose.connection.once("open", () =>
  console.log("mongoose connected to atlas database")
);
