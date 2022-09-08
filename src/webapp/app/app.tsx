import "../content/app.scss";
import "app/config/dayjs.ts";

import React, { useEffect } from "react";
import TranslatorContext from "./config/TranslatorContext";

const baseHref = document
  .querySelector("base")
  .getAttribute("href")
  .replace(/\/$/, "");



sessionStorage.setItem("locale", "en");

console.log(TranslatorContext.context.translations);
console.log(TranslatorContext.context);

export const App = () => {
  useEffect(() => {}, []);

  return <>Hello</>;
};

export default App;
