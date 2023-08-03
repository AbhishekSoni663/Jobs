const express = require("express");
const connectDB = require("./config/db");
const cors = require("cors")
const morgan = require("morgan")
const colors = require("colors");
require("dotenv").config()
const app = express()

app.use(cors({
    origin: "http://localhost:4000",
    methods:["GET","POST","PUT","DELETE"]
}));

const PORT = process.env.PORT || 5000;

// DB Connection

connectDB();


// Body Parser

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));


// User Routes
app.use("/api/v1/user", require("./routes/userRoutes"))

// Blogs Routes
app.use("/api/v1/blog", require("./routes/blogRoutes"))

// Express Server Created
app.listen(PORT, ()=>{
    console.log(`Sever is Runnng at PORT ${PORT}`)
})