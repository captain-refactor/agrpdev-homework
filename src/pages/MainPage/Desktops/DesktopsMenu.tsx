import List from "@material-ui/core/List";
import { PropsWithChildren, useContext } from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import ListItem from "@material-ui/core/ListItem";
import React from "react";
import { AppButton } from "../../../components/AppButton";
import { DesktopsContext } from "./DesktopsContextProvider";

export function DesktopsMenu() {
  const cls = useStyles();
  const { desktops, currentDesktop, selectDesktop } = useContext(
    DesktopsContext
  );
  return (
    <List className={cls.list} component="ul" role="menu">
      {desktops.map((desktop) => (
        <DesktopItem
          key={desktop.id}
          active={desktop.id == currentDesktop}
          onClick={() => {
            selectDesktop(desktop.id);
          }}
        >
          {desktop.name}
        </DesktopItem>
      ))}
    </List>
  );
}

export function DesktopItem(
  props: PropsWithChildren<{ active: boolean; onClick: () => void }>
) {
  const cls = useStyles();
  return (
    <ListItem className={cls.listItem} role="menuitem">
      <AppButton
        className={props.active ? "active" : ""}
        onClick={props.onClick}
      >
        {props.children}
      </AppButton>
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
