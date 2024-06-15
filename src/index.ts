import express, { Request, Response } from "express";
const apiRouter = require("./routes/index");
const bodyParser = require("body-parser");
const { PORT } = require("./config/server.config");

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());

app.use("/api", apiRouter);

app.get("/ping", (req: Request, res: Response) => {
  return res.json({ message: "Pong from root" });
});

app.listen(PORT, () => {
  console.log(`server started at ${PORT}`);
});
