import React, { Fragment, useContext } from "react";
import Paper from "@material-ui/core/Paper";
import { useFileViewQuery } from "../../../generated/graphql";
import LinearProgress from "@material-ui/core/LinearProgress";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import makeStyles from "@material-ui/core/styles/makeStyles";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import { OpenedFilesContext } from "../OpenedFilesContextProvider";

export function FileView(props: { fileId?: string }) {
  if (!props.fileId) return null;
  const { loading, data } = useFileViewQuery({
    skip: !props.fileId,
    variables: {
      fileId: props.fileId!,
    },
    fetchPolicy: "cache-only",
  });
  const cls = useStyles();
  const { closeFile } = useContext(OpenedFilesContext);
  let text = data?.getFile?.text;
  let fileName = data?.getFile?.name;
  return (
    <Paper>
      {loading && <LinearProgress />}
      {data?.getFile && (
        <Fragment>
          <Grid container justify="space-between">
            <Grid item className={cls.heading}>
              <Typography variant="h3">{fileName}</Typography>
            </Grid>
            <Grid item>
              <IconButton onClick={() => closeFile(props.fileId!)}>
                <CloseIcon />
              </IconButton>
            </Grid>
          </Grid>
          <Grid container>
            <Grid item className={cls.textContainer}>
              <Typography>{text}</Typography>
            </Grid>
          </Grid>
        </Fragment>
      )}
    </Paper>
  );
}

const useStyles = makeStyles((theme) => ({
  topPanel: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  textContainer: {
    padding: theme.spacing(3, 5, 5, 5),
  },
  heading: {
    padding: theme.spacing(3, 5, 2, 5),
  },
}));
