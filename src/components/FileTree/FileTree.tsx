import {
  FileTreePresentation,
  IFile,
  IFolder,
  IFolderItem,
} from "./FileTreePresentation";
import React, { useState } from "react";
import {
  GetListDocument,
  GqlGetListQuery,
  GqlGetListQueryVariables,
  GqlItem_Type,
  GqlListItem,
  useGetListQuery,
} from "../../generated/graphql";
import { useApolloClient } from "@apollo/react-hooks";

export function FileTree() {
  let [cache, setCache] = useState<Record<string, GqlListItem[]>>({});
  const client = useApolloClient();

  const addListToCache = (id: string, list: GqlListItem[]) =>
    setCache((c) => {
      return {
        ...c,
        [id]: list,
      };
    });

  let rootFolderResult = useGetListQuery({
    onCompleted: (data) => {
      addListToCache(ROOT_FOLDER_ID, data?.getList);
    },
  });

  let loadFolder = async (id: string) => {
    let result = await client.query<GqlGetListQuery, GqlGetListQueryVariables>({
      query: GetListDocument,
      variables: {
        id,
      },
    });
    addListToCache(id, result.data?.getList);
  };
  return (
    <FileTreePresentation
      loading={rootFolderResult.loading}
      folder={mapFolders(cache)}
      loadFolder={loadFolder}
    />
  );
}

/**
 * Maps unconnected lists of items to folder structure
 * @param structure
 */
function mapFolders(structure: Record<string, GqlListItem[]>): IFolder {
  let cache: Record<string, IFolder> = {};

  function mapFolder(item: GqlListItem): IFolder {
    const folderId = item.id;
    let folder = cache[folderId];
    if (!folder) {
      let content: IFolderItem[] | undefined = undefined;
      if (structure[folderId]) {
        content = structure[folderId].map(mapFolderItem);
      }
      cache[folderId] = {
        id: folderId,
        name: item.name,
        type: GqlItem_Type.Folder,
        content,
      };
      return cache[folderId];
    }
    return folder;
  }

  function mapFile(item: GqlListItem): IFile {
    return {
      id: item.id,
      name: item.name,
      type: GqlItem_Type.File,
    };
  }

  function mapFolderItem(item: GqlListItem): IFolderItem {
    switch (item.type) {
      case GqlItem_Type.File:
        return mapFile(item);
      case GqlItem_Type.Folder:
        return mapFolder(item);
    }
  }
  return mapFolder({ name: "", type: GqlItem_Type.Folder, id: ROOT_FOLDER_ID });
}
const ROOT_FOLDER_ID = "__root";
