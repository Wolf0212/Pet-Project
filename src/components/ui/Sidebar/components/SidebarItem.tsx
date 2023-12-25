import { ReactElement } from "react";
import { NavLink } from "react-router-dom";
import { useBoundStore } from "../../../../store/useBoundStore";

type SidebarItemProps = {
  url: string;
  icon: ReactElement;
  label: string;
};

const SidebarItem = ({ url, icon, label }: SidebarItemProps) => {
  const isCollapsed = useBoundStore().isCollapsed;
  return (
    <NavLink
      to={url}
      className={({ isActive }) =>
        `miyuu-menu-item w-full flex flex-nowrap gap-2 items-center justify-start p-2 rounded-md text-sm font-semibold leading-6 hover:bg-slate-300/40 dark:hover:bg-neutral-800 ${
          isActive && "bg-slate-300/40 dark:bg-neutral-800"
        }`
      }
    >
      <span>{icon}</span>
      <span className={`menu-item-label ${isCollapsed && "opacity-0"} transition-[opacity] duration-300 ease-in-out`}>
        {label}
      </span>
    </NavLink>
  );
};

export default SidebarItem;
