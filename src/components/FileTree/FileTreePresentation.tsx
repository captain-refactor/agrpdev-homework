import Grid from "@material-ui/core/Grid";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import * as React from "react";
import { makeStyles } from "@material-ui/core/styles";
import LinearProgress from "@material-ui/core/LinearProgress";
import { GqlItem_Type } from "../../generated/graphql";
import { TreeItem } from "@material-ui/lab";
import { Fragment } from "react";
import TreeView from "@material-ui/lab/TreeView";
import CircularProgress from "@material-ui/core/CircularProgress";

export function FileTreePresentation(props: IFileTreePresentationProps) {
  const cls = useStyles();
  const [expanded, setExpanded] = React.useState<string[]>([]);

  function Folder(props: { folder: IFolder }) {
    const folder = props.folder;
    const contentLoading = folder.content === undefined;
    return (
      <TreeItem key={folder.id} label={folder.name} nodeId={folder.id}>
        {contentLoading && (
          <TreeItem nodeId={folder.id + "__loading"} label="Loading" />
        )}
        {!contentLoading && <FolderContent content={folder.content!} />}
      </TreeItem>
    );
  }
  function FolderContent(props: { content: IFolderItem[] }) {
    return (
      <Fragment>
        {props.content.map((item) => (
          <FolderItem key={item.id} item={item} />
        ))}
      </Fragment>
    );
  }

  function File(props: { file: IFile }) {
    const file = props.file;
    return <TreeItem key={file.id} label={file.name} nodeId={file.id} />;
  }

  function FolderItem(props: { item: IFolderItem }) {
    switch (props.item.type) {
      case GqlItem_Type.Folder:
        return <Folder folder={props.item} />;
      case GqlItem_Type.File:
        return <File file={props.item} />;
    }
  }

  function handleTogger(e: unknown, nodeIds: string[]) {
    setExpanded((previous) => {
      let newExpanded = nodeIds.find((id) => !previous.includes(id));
      if (newExpanded && props.loadFolder) {
        props.loadFolder(newExpanded);
      }
      return nodeIds;
    });
  }

  return (
    <Grid container>
      <Grid item className={cls.heading} xs={12}>
        <Typography variant="h2">Choose a file</Typography>
      </Grid>
      <Grid item xs={12}>
        <Paper elevation={1} className={cls.paper}>
          {props.loading && <LinearProgress />}
          {props.folder && (
            <TreeView
              disableSelection
              defaultCollapseIcon={<ExpandMoreIcon />}
              defaultExpandIcon={<ChevronRightIcon />}
              onNodeToggle={handleTogger}
              expanded={expanded}
            >
              <FolderContent content={props.folder.content || []} />
            </TreeView>
          )}
        </Paper>
      </Grid>
    </Grid>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: "2rem 3rem",
    minHeight: "20rem"
  },
  heading: {
    margin: "2rem 1rem 1rem 1rem",
  },
}));

interface IFileTreePresentationProps {
  loading: boolean;
  folder: IFolder;
  loadFolder?: (id: string) => void;
}

export interface IFile {
  id: string;
  name: string;
  type: GqlItem_Type.File;
}

export type IFolderItem = IFile | IFolder;

export interface IFolder {
  id: string;
  name: string;
  content?: IFolderItem[];
  type: GqlItem_Type.Folder;
}
