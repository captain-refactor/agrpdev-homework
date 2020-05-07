import {createMuiTheme, MuiThemeProvider} from "@material-ui/core/styles";
import {PropsWithChildren} from "react";
import * as React from "react";

let theme = createMuiTheme({});

export function ThemeProvider(props: PropsWithChildren<unknown>) {
    return <MuiThemeProvider theme={theme}>{props.children}</MuiThemeProvider>;
}
