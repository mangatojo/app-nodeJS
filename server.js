require("dotenv").config();
const express = require("express");
const connectToDB = require('./database/db');
const authRoutes = require('./routes/auth-routes');
const homeRouter = require('./routes/home-routes');
const adminRouter = require('./routes/admin-routes');
const uploadImageRoutes = require('./routes/image-routes');

connectToDB();

const app = express();
const PORT = process.env.PORT || 3004;

//middlewares
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/home", homeRouter);
app.use("/api/admin", adminRouter);
app.use("/api/image", uploadImageRoutes);

app.listen(PORT, () => {
    console.log(`Server is now listening to port: ${PORT} `);
});