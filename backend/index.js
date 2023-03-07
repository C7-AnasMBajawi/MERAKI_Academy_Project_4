const express = require("express");
const cors = require("cors");
require("dotenv").config()
const db = require("./models/db")

const app = express();
const PORT = process.env.PORT ;

const userRouter = require("./routes/user")
const carRouter = require("./routes/car");
const roleRouter = require("./routes/role")


app.use(cors());
app.use(express.json());

app.use("/car", carRouter)
app.use("/user", userRouter)
app.use("/role", roleRouter)

// Handles any other endpoints [unassigned - endpoints]
app.use("*", (req, res) => res.status(404).json("NO content at this path"));

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});
