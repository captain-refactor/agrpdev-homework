import React, { createContext, PropsWithChildren, useState } from "react";

export function OpenedFilesContextProvider(props: PropsWithChildren<unknown>) {
  let { Provider } = OpenedFilesContext;
  const [openedFiles, setOpenedFiles] = useState<string[]>([]);
  const [currentFile, setCurrentFile] = useState<string | undefined>();
  return (
    <Provider
      value={{
        openedFiles,
        currentFile,
        openFile(id: string) {
          setOpenedFiles((prev) => {
            if (prev.includes(id)) return prev;
            return [...prev, id];
          });
          setCurrentFile(id);
        },
        closeFile(id: string) {
          setOpenedFiles((prev) => prev.filter((item) => item !== id));
          setCurrentFile((current) => {
            if (current !== id) return current;
            for (let file of openedFiles) {
              if (file !== id) return file;
            }
            return undefined;
          });
        },
      }}
    >
      {props.children}
    </Provider>
  );
}

export const OpenedFilesContext = createContext<OpenedFilesService>(
  null as any
);

export interface OpenedFilesService {
  openedFiles: string[];
  currentFile?: string;
  openFile(id: string): void;
  closeFile(id: string): void;
}
