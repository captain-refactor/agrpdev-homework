import React, { createContext, PropsWithChildren, useState } from "react";

export function DesktopsContextProvider(props: PropsWithChildren<unknown>) {
  let { Provider } = DesktopsContext;

  const [currentDesktop, setCurrentDesktop] = useState<string>(DESKTOPS[0].id);
  return (
    <Provider
      value={{
        currentDesktop,
        desktops: DESKTOPS,
        selectDesktop(id: string) {
          setCurrentDesktop(id);
        },
      }}
    >
      {props.children}
    </Provider>
  );
}

const DESKTOPS: IDesktop[] = [
  { id: "desktop1", name: "Desktop 1" },
  { id: "desktop2", name: "Desktop 2" },
  { id: "desktop3", name: "Desktop 3" },
  { id: "desktop4", name: "Desktop 4" },
  { id: "desktop5", name: "Desktop 5" },
  { id: "desktop6", name: "Desktop 6" },
];

export const DesktopsContext = createContext<OpenedFilesService>(null as any);

export interface OpenedFilesService {
  desktops: IDesktop[];
  currentDesktop?: string;
  selectDesktop(id: string): void;
}

export interface IDesktop {
  id: string;
  name: string;
}
