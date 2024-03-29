const express = require("express");
const connectDB = require("./config/db")

const app = express();
const PORT = process.env.PORT || 3000;

// Connect Database
connectDB();

// Init middlewares
app.use(express.json({extended: false}))

// Define routes
app.use("/api/users", require("./routes/api/users"))
app.use("/api/auth", require("./routes/api/auth"))
app.use("/api/posts", require("./routes/api/posts"))
app.use("/api/profile", require("./routes/api/profile"))

app.get("/", (req, res) => res.send("API running...."))

app.listen(PORT, () => console.log(`Listening at port: ${PORT}`));
