import { FileTreePresentation } from "./FileTreePresentation";
import { GqlItem_Type } from "../../generated/graphql";
import * as React from "react";
import { mount } from "enzyme";
import LinearProgress from "@material-ui/core/LinearProgress";

test("File tree is loading", () => {
  const wrapper = mount(
    <FileTreePresentation
      loading={true}
      folder={{ content: [], type: GqlItem_Type.Folder, id: "", name: '' }}
    />
  );
  expect(wrapper).toContainReact(<LinearProgress />);
});
