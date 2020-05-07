import * as rd from "react-dom";
import * as React from "react";
import { Providers } from "./providers";

let elementById = document.getElementById("app");
rd.render(
  <Providers>
    <h1>Hello</h1>
  </Providers>,
  elementById
);
