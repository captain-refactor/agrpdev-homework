import Container from "@material-ui/core/Container";
import * as React from "react";
import Grid from "@material-ui/core/Grid";
import makeStyles from "@material-ui/core/styles/makeStyles";
import { DesktopsMenu } from "./Desktops/DesktopsMenu";
import { FileTree } from "./FileTree/FileTree";
import { FilesView } from "./FileView/FilesView";
import { OpenedFilesContextProvider } from "./OpenedFilesContextProvider";
import { DesktopsContextProvider } from "./Desktops/DesktopsContextProvider";
import { useContext } from "react";
import { DesktopsPages } from "./Desktops/DesktopsPages";

const useStyles = makeStyles((theme) => ({
  root: {},
  topPanel: {},
  content: {},
}));

export function MainPage() {
  const cls = useStyles();
  return (
    <Container>
      <DesktopsContextProvider>
        <Grid container className={cls.topPanel}>
          <Grid item>
            <DesktopsMenu />
          </Grid>
        </Grid>
        <Grid container className={cls.content}>
          <DesktopsPages />
        </Grid>
      </DesktopsContextProvider>
    </Container>
  );
}
