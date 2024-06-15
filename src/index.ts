import express, { Request, Response } from "express";
const bodyParser = require("body-parser");
const { PORT } = require("./config/server.config");

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());

app.get("/ping", (req: Request, res: Response) => {
  return res.json({ message: "Pong from problem service" });
});

app.listen(PORT, () => {
  console.log(`server started at ${PORT}`);
});
