import { create } from "zustand";
import {
  SidebarCollapseSlice,
  createSidebarCollapseSlice,
} from "./slices/SidebarCollapseSlice";

const storeResetFns = new Set<() => void>();

export const resetAllStores = () => {
  storeResetFns.forEach((resetFn) => {
    resetFn();
  });
};

export const useBoundStore = create<SidebarCollapseSlice>()((...a) => ({
  ...createSidebarCollapseSlice(...a),
}));
