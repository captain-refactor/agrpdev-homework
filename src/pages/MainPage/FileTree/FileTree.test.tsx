import { FileTree } from "./FileTree";
import * as React from "react";
import { mount } from "enzyme";
import LinearProgress from "@material-ui/core/LinearProgress";

test("File tree is loading", () => {
  const wrapper = mount(<FileTree />);
  expect(wrapper).toContainReact(<LinearProgress />);
});
