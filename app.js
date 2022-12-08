import express, { json, urlencoded } from "express";
import { join } from "path";
import cookieParser from "cookie-parser";
import logger from "morgan";

import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

import indexRouter from "./routes/index.js";

var app = express();

app.use(logger("dev"));
app.use(json());
app.use(urlencoded({ extended: false }));
app.use(cookieParser());
//app.use(express.static(join(__dirname, "public")));

//app.use("/", indexRouter);
app.use("/", indexRouter);

app.get("/hello", (req, res) => {
  res.send("Hello World!");
});

var listener = app.listen(3000, function () {
  console.log("Listening on port " + listener.address().port);
});
