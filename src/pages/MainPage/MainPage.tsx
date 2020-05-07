import Container from "@material-ui/core/Container";
import * as React from "react";
import Grid from "@material-ui/core/Grid";
import makeStyles from "@material-ui/core/styles/makeStyles";
import { DesktopsMenu } from "./Desktops/DesktopsMenu";
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
      <Grid container className={cls.topPanel}>
        <Grid item>
          <DesktopsMenu />
        </Grid>
      </Grid>
      <Grid container className={cls.content}>
        <DesktopsPages />
      </Grid>
    </Container>
  );
}
