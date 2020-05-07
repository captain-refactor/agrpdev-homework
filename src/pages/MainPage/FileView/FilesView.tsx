import React, { useContext } from "react";
import Grid from "@material-ui/core/Grid";
import { FileView } from "./FileView";
import { OpenedFilesContext } from "../OpenedFilesContextProvider";
import ListItem from "@material-ui/core/ListItem";
import List from "@material-ui/core/List";
import { FileButton } from "./FileButton";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Paper from "@material-ui/core/Paper";

export function FilesView() {
  const { openedFiles, currentFile } = useContext(OpenedFilesContext);
  const cls = useStyles();
  return (
    <Grid container justify="center" spacing={3}>
      <Grid item xs={10}>
        <Paper elevation={1}>
          <List className={cls.list}>
            {openedFiles.map((fileId) => (
              <ListItem key={fileId}>
                <FileButton fileId={fileId} />
              </ListItem>
            ))}
          </List>
        </Paper>
      </Grid>
      <Grid item xs={10}>
        <FileView fileId={currentFile} />
      </Grid>
    </Grid>
  );
}

const useStyles = makeStyles((theme) => ({
  list: {
    display: "flex",
    flexDirection: "row",
    justifyItems: "flex-start",
    alignContent: "center",
    flexWrap: "wrap",
    minHeight: theme.spacing(7),
    width: "100%",
    marginTop: theme.spacing(5),
    // margin: "2rem 1rem 1rem 1rem",
    "& li": {
      width: "initial",
      display: "block",
    },
  },
}));
