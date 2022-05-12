const express = require("express");
const cors = require("cors");
const app = express();
const db = require("./app/models");

require('dotenv').config();

var corsOptions = {
  origin: "http://localhost:8081"
};
app.use(cors(corsOptions));
// parse requests of content-type - application/json
app.use(express.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));


//set the database and connect to it 
db.mongoose
  .connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Connected to the database!");
  })
  .catch(err => {
    console.log("Cannot connect to the database!", err);
    process.exit();
  });

  

// Routes
app.get("/", (req, res) => {
  res.json({ message: "Welcome to our web application." });
});

require("./app/routes/cv.routes")(app);
require("./app/routes/education.routes")(app);
require("./app/routes/job.routes")(app);
require("./app/routes/language.routes")(app);
require("./app/routes/skill.routes")(app);
require("./app/routes/user.routes")(app);
require("./app/routes/certification.routes")(app);
require("./app/routes/auth.routes")(app);
require("./app/routes/template.routes")(app);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});