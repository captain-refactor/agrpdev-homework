import { PropsWithChildren } from "react";
import * as React from "react";
import { GraphqlProvider } from "./graphql/apollo";
import { DesktopsContextProvider } from "./pages/MainPage/Desktops/DesktopsContextProvider";
import { ThemeProvider } from "./ThemeProvider";

export function Providers(props: PropsWithChildren<unknown>) {
  return (
    <GraphqlProvider>
      <DesktopsContextProvider>
        <ThemeProvider>{props.children}</ThemeProvider>
      </DesktopsContextProvider>
    </GraphqlProvider>
  );
}
