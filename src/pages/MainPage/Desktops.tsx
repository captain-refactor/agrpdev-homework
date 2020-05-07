import List from "@material-ui/core/List";
import { PropsWithChildren } from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import ListItem from "@material-ui/core/ListItem";
import React from "react";
import {AppButton} from "../../components/AppButton";

export function Desktops() {
  const cls = useStyles();
  return (
    <List className={cls.list} component="ul" role="menu">
      <DesktopItem>Desktop 1</DesktopItem>
      <DesktopItem>Desktop 2</DesktopItem>
      <DesktopItem>Desktop 3</DesktopItem>
      <DesktopItem>Desktop 4</DesktopItem>
      <DesktopItem>Desktop 5</DesktopItem>
      <DesktopItem>Desktop 6</DesktopItem>
    </List>
  );
}

export function DesktopItem(props: PropsWithChildren<unknown>) {
  const cls = useStyles();
  return (
    <ListItem className={cls.listItem} role="menuitem">
      <AppButton>{props.children}</AppButton>
    </ListItem>
  );
}

const useStyles = makeStyles((theme) => {
  return {
    list: {
      display: "flex",
      flexDirection: "row",
      marginLeft: "1rem",
      marginRight: "1rem",
      flexWrap: "wrap",
      width: "100%",
    },
    listItem: {
      display: "block",
      width: "initial",
    },
  };
});
