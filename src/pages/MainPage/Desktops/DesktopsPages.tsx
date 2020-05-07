import { Fragment, useContext } from "react";
import { DesktopsContext } from "./DesktopsContextProvider";
import Grid from "@material-ui/core/Grid";
import { FileTree } from "../FileTree/FileTree";
import { FilesView } from "../FileView/FilesView";
import { OpenedFilesContextProvider } from "../OpenedFilesContextProvider";
import * as React from "react";

export function DesktopsPages() {
  const { desktops, currentDesktop } = useContext(DesktopsContext);
  return (
    <Fragment>
      {desktops.map((desktop) => {
        return (
          <OpenedFilesContextProvider key={desktop.id}>
            {desktop.id === currentDesktop && (
              <Fragment>
                <Grid item md={4}>
                  <FileTree />
                </Grid>
                <Grid item md={8}>
                  <FilesView />
                </Grid>
              </Fragment>
            )}
          </OpenedFilesContextProvider>
        );
      })}
    </Fragment>
  );
}
