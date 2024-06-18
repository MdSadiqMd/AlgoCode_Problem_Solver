import express, { Request, Response } from "express";
const apiRouter = require("./routes/index");
const bodyParser = require("body-parser");
const { PORT } = require("./config/server.config");
const errorHandler = require("./utils/index");
const connectDB = require('./config/db.config')

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());

app.use("/api", apiRouter);

app.get("/ping", (req: Request, res: Response) => {
  return res.json({ message: "Pong from root" });
});

app.use(errorHandler); // It is put in last as express has an built-in error Handler if we keep it in the start then it is of no use

app.listen(PORT, async () => {
  console.log(`server started at ${PORT}`);
  connectDB();
});
