require("dotenv").config();

const express = require("express");

const app = express();

const PORT = process.env.PORT || 5000;

const connectDB = require("./config/db");
const bodyParser = require("body-parser");
const authRouter = require("./routes/authRoute");
// const userRouter = require("./routes/userRoute");
// const prodRouter = require("./routes/prodRoute");
const morgan = require("morgan");
const cors = require("cors");

app.use(cors());

connectDB();

app.use(bodyParser.json());
app.use(morgan("dev"));
app.use("/api/auth/user", authRouter);
// app.use("/api/user", userRouter);
// app.use("/api/product", prodRouter);

app.listen(PORT, () => {
  console.log(`Server running at port: ${PORT}`);
});
