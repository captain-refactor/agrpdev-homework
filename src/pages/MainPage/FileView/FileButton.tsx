import { useFileViewQuery } from "../../../generated/graphql";
import React, { useContext } from "react";
import { OpenedFilesContext } from "../OpenedFilesContextProvider";
import CircularProgress from "@material-ui/core/CircularProgress";
import { AppButton } from "../../../components/AppButton";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Close from "@material-ui/icons/Close";

export function FileButton(props: { fileId: string }) {
  const fileId = props.fileId;
  const cls = useStyles();
  const { openFile, currentFile, closeFile } = useContext(OpenedFilesContext);
  const { loading, data } = useFileViewQuery({
    variables: {
      fileId,
    },
  });
  if (loading) return <CircularProgress size={2} />;
  let isActive = fileId === currentFile;
  const className = isActive ? "active" : "";

  function handleClose(event: React.MouseEvent) {
    event.stopPropagation();
    event.nativeEvent.stopImmediatePropagation();
    closeFile(fileId);
    event.preventDefault();
  }

  function handlKeyPress(event: React.KeyboardEvent) {
    event.stopPropagation();
    event.nativeEvent.stopImmediatePropagation();
    switch (event.key) {
      case "Enter":
      case " ":
        closeFile(fileId);
    }
  }

  return (
    <AppButton onClick={() => openFile(fileId)} className={className}>
      {data?.getFile?.name || "N/A"}
      <div
        role="button"
        tabIndex={0}
        onKeyPress={handlKeyPress}
        className={cls.closeButton}
        onClick={handleClose}
      >
        <Close />
      </div>
    </AppButton>
  );
}

const useStyles = makeStyles((theme) => ({
  closeButton: {
    display: "flex",
    flexDirection: "column",
    marginLeft: theme.spacing(2),
    borderRadius: "50%",
    "&:hover": {
      background: "#00000017",
    },
  },
}));
