const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const apiRouter = require('./routes/index');
const { PORT } = require('./config/server.config');
const errorHandler = require('./utils/index');
const db = require('./config/db.config');

type CorsOptions = typeof cors.CorsOptions;

const app = express();
const allowedOrigins = ['http://localhost:3000'];

const options: CorsOptions = {
  origin: allowedOrigins
};

app.use(cors(options));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());

app.use("/api", apiRouter);

app.get("/ping", (req: any, res: any) => {
  return res.json({ message: "Pong from root" });
});

app.use(errorHandler.errorHandler);

app.listen(PORT, async () => {
  console.log(`server started at ${PORT}`);
  await db.connect();
});