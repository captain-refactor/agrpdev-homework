import * as rd from "react-dom";
import * as React from "react";
import { Providers } from "./Providers";
import { MainPage } from "./pages/MainPage/MainPage";

let elementById = document.getElementById("app");
rd.render(
  <Providers>
    <MainPage />
  </Providers>,
  elementById
);
