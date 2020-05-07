import Container from "@material-ui/core/Container";
import * as React from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import makeStyles from "@material-ui/core/styles/makeStyles";
import { Desktops } from "./Desktops";
import { FileTree } from "./FileTree/FileTree";

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
        <Grid item md={6}>
          <FileTree />
        </Grid>
        <Grid item md={6}>
          <Paper elevation={1}></Paper>
        </Grid>
      </Grid>
    </Container>
  );
}
