import { Router } from "express";
import { renderHelloWorld } from "./helloWorld.js";
var router = Router();
const catchExceptions = (handler) => async (req, res, next) => {
  try {
    await handler(req, res, next);
  } catch (error) {
    if (error.code === 404) {
      res.status(404);
    }
    next(error);
  }
};

/* GET home page. */
router.get("/", function (req, res, next) {
  res.type("text/html");
  const helloWorld = renderHelloWorld();
  res.send(`
  <!doctype html>
        <html>
        <head>
            <title>Hello</title>
            <style>
  @import url('https://assets.acdn.no/pkg/@amedia/brick-fonts/v1/css/alfa/font-face.css');
  @import url('https://assets.acdn.no/pkg/@amedia/brick-fonts/v1/css/alt/font-face.css');
  @import url('https://assets.acdn.no/pkg/@amedia/brick-fonts/v1/css/bravo/font-face.css');
  @import url('https://assets.acdn.no/pkg/@amedia/brick-fonts/v1/css/charlie/font-face.css');
  @import url('https://assets.acdn.no/pkg/@amedia/brick-fonts/v1/css/dagens/font-face.css');
  @import url('https://assets.acdn.no/pkg/@amedia/brick-fonts/v1/css/dagens2/font-face.css');
  @import url('https://assets.acdn.no/pkg/@amedia/brick-fonts/v1/css/nettavisen/font-face.css');
</style>
<link rel="stylesheet" href="https://assets.acdn.no/pkg/@amedia/brick-tokens/5.0.1/css/theme-alfa.css">
<link rel="stylesheet" href="https://assets.acdn.no/pkg/@amedia/brick-tokens/5.0.1/css/theme-bravo.css">
<link rel="stylesheet" href="https://assets.acdn.no/pkg/@amedia/brick-tokens/5.0.1/css/theme-charlie.css">
<link rel="stylesheet" href="https://assets.acdn.no/pkg/@amedia/brick-tokens/5.0.1/css/theme-nettavisen.css">
<link rel="stylesheet" href="https://assets.acdn.no/pkg/@amedia/brick-tokens/5.0.1/css/theme-alt.css">
        </head>
        <body>
            ${helloWorld}
        </body>
        </html>
  `);
});

export default router;
