import { FileTree, Folder } from "./FileTree";
import * as React from "react";
import { mount, ReactWrapper } from "enzyme";
import "jest-enzyme";
import { MockedProvider } from "@apollo/react-testing";
import { GetListDocument } from "../../../generated/graphql";
import { act } from "react-dom/test-utils";
import { sleep } from "../../../tools";
import { OpenedFilesContextProvider } from "../OpenedFilesContextProvider";
import {ThemeProvider} from "../../../ThemeProvider";

test("File tree loads root folder", async () => {
  let rootResult = {
    data: {
      getList: [
        {
          __typename: "ListItem",
          name: "Folder 01",
          id: "folder01",
          type: "FOLDER",
        },
        {
          __typename: "ListItem",
          name: "Folder 02",
          id: "folder02",
          type: "FOLDER",
        },
        {
          __typename: "ListItem",
          name: "Folder 03",
          id: "folder03",
          type: "FOLDER",
        },
        {
          __typename: "ListItem",
          name: "File 01",
          id: "file01",
          type: "FILE",
        },
        {
          __typename: "ListItem",
          name: "File 02",
          id: "file02",
          type: "FILE",
        },
      ],
    },
  };
  let wrapper;
  await act(async () => {
    wrapper = mount(
      <MockedProvider
        mocks={[
          {
            request: {
              query: GetListDocument,
              variables: {},
            },
            result: rootResult,
          },
        ]}
      >
        <ThemeProvider>
          <OpenedFilesContextProvider>
            <FileTree />
          </OpenedFilesContextProvider>
        </ThemeProvider>
      </MockedProvider>
    );
  });
  await sleep(100);
  expect(wrapper).toMatchSnapshot();
});
