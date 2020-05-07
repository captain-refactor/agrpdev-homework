import Grid from "@material-ui/core/Grid";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import * as React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  GqlItem_Type,
  GqlListItem,
  useGetListQuery,
} from "../../../generated/graphql";
import { TreeItem } from "@material-ui/lab";
import { Fragment, useContext } from "react";
import TreeView from "@material-ui/lab/TreeView";
import { OpenedFilesContext } from "../OpenedFilesContextProvider";

export function FileTree() {
  const cls = useStyles();

  function Folder(props: { id: string; name: string }) {
    return (
      <TreeItem key={props.id} label={props.name} nodeId={props.id}>
        <FolderContent id={props.id} />
      </TreeItem>
    );
  }
  function FolderContent(props: { id?: string }) {
    const { data, loading } = useGetListQuery({
      variables: {
        id: props.id,
      },
      fetchPolicy: "cache-first",
    });
    return (
      <Fragment>
        {loading && (
          <TreeItem nodeId={props.id + "__loading"} label="Loading" />
        )}
        {data?.getList?.map((item) => (
          <FolderItem key={item.id} item={item} />
        ))}
      </Fragment>
    );
  }

  function File(props: { id: string; name: string }) {
    const { openFile } = useContext(OpenedFilesContext);
    return (
      <TreeItem
        key={props.id}
        label={props.name}
        nodeId={props.id}
        onClick={() => openFile(props.id)}
      />
    );
  }

  function FolderItem(props: { item: GqlListItem }) {
    switch (props.item.type) {
      case GqlItem_Type.Folder:
        return <Folder name={props.item.name} id={props.item.id} />;
      case GqlItem_Type.File:
        return <File id={props.item.id} name={props.item.name} />;
    }
  }

  return (
    <Grid container>
      <Grid item className={cls.heading} xs={12}>
        <Typography variant="h2">Choose a file</Typography>
      </Grid>
      <Grid item xs={12}>
        <Paper elevation={1} className={cls.paper}>
          <TreeView
            disableSelection
            defaultCollapseIcon={<ExpandMoreIcon />}
            defaultExpandIcon={<ChevronRightIcon />}
          >
            <FolderContent />
          </TreeView>
        </Paper>
      </Grid>
    </Grid>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: "2rem 3rem",
    minHeight: "20rem",
  },
  heading: {
    margin: "2rem 1rem 1rem 1rem",
  },
}));
