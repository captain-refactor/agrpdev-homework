import Container from "@material-ui/core/Container";
import * as React from "react";
import Grid from "@material-ui/core/Grid";
import makeStyles from "@material-ui/core/styles/makeStyles";
import { Desktops } from "./Desktops";
import { FileTree } from "./FileTree/FileTree";
import { FilesView } from "./FileView/FilesView";
import { OpenedFilesContextProvider } from "./OpenedFilesContextProvider";

const useStyles = makeStyles((theme) => ({
  root: {},
  topPanel: {},
  content: {},
}));

export function MainPage() {
  const cls = useStyles();
  return (
    <Container>
      <Grid container className={cls.topPanel}>
        <Grid item>
          <Desktops />
        </Grid>
      </Grid>
      <Grid container className={cls.content}>
        <OpenedFilesContextProvider>
          <Grid item md={4}>
            <FileTree />
          </Grid>
          <Grid item md={8}>
            <FilesView />
          </Grid>
        </OpenedFilesContextProvider>
      </Grid>
    </Container>
  );
}
