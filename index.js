const express = require("express");
const connectDB = require("./db");
const apiRoutes = require("./routes/api");
require("dotenv").config();

const app = express();

// Middleware
app.use(express.json());
app.use("/api", apiRoutes);

// Connect Database
connectDB();

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
