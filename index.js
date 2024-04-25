const express = require("express");
const cors = require('cors');
const mongoose = require("mongoose");
const userRoutes = require("./routes/userRoutes");
const movieRoutes = require("./routes/movieRoutes");
const actorRoutes = require("./routes/actorRoutes");
const producerRoutes = require("./routes/producerRoutes")
const app = express();
require("dotenv").config();

app.use(cors());
app.use(express.json());

app.use("/api/auth", userRoutes);
app.use("/api/movies", movieRoutes);
app.use("/api/actors", actorRoutes);
app.use("/api/producers", producerRoutes);

mongoose.connect(process.env.MONGO_URL).then(() => {
    console.log("DB connection successful")
}).catch((err) => {
    console.log(err.message);
});
 
const server = app.listen(process.env.PORT, () => {
    console.log(`Server started on Port: ${process.env.PORT}`);
});
