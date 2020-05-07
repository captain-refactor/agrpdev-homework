import List from "@material-ui/core/List";
import { PropsWithChildren } from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import ListItem from "@material-ui/core/ListItem";
import Button from "@material-ui/core/Button";
import React from "react";

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
      <Button>{props.children}</Button>
    </ListItem>
  );
}

const useStyles = makeStyles((theme) => {
  let active = {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    color: "white",
  };
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
      "& button": {
        "&:hover": active,
        "&:focus": active,
      },
    },
  };
});
