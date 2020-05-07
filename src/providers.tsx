import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
import { PropsWithChildren } from "react";
import * as React from "react";
import { GraphqlProvider } from "./graphql/apollo";

export function Providers(props: PropsWithChildren<unknown>) {
  return (
    <GraphqlProvider>
      <MuiThemeProvider theme={theme}>{props.children}</MuiThemeProvider>
    </GraphqlProvider>
  );
}

let theme = createMuiTheme({});
