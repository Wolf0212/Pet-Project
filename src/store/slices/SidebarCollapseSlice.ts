import { StateCreator } from "zustand";

export interface SidebarCollapseSlice {
  isCollapsed: boolean;
  setIsCollapsed(value: boolean): void;
  resetSidebarCollapseSlice: () => void;
}

const initialState = {
  isCollapsed: Boolean(localStorage.getItem("miyuu-sidebar-collapse")) ?? true,
};

export const createSidebarCollapseSlice: StateCreator<SidebarCollapseSlice> = (
  set
) => ({
  ...initialState,
  setIsCollapsed: (newState) => {
    localStorage.setItem("miyuu-sidebar-collapse", String(newState));
    set({ isCollapsed: newState });
  },
  resetSidebarCollapseSlice: () => set(initialState),
});
