import SidebarItem from "./components/SidebarItem";
import { TextB, ToggleLeft } from "@phosphor-icons/react";
import { useBoundStore } from "../../../store/useBoundStore";
import { AnimatePresence, motion } from "framer-motion";
import { ReactElement } from "react";
import SidebarSectionTitle from "./components/SidebarSectionTitle";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const isCollapsed = useBoundStore().isCollapsed;

  const sidebarItemList = [
    {
      label: "Pages",
      secondaryText: "Custom mades with love ❤️",
      type: "section-title",
    },
    {
      label: "Components",
      secondaryText: "Beautiful handcrafted UI components",
      type: "section-title",
    },
    {
      icon: <ToggleLeft size={24} />,
      url: "/components/toggle",
      label: "Toggle",
      type: "item",
    },
    {
      icon: <TextB size={24} />,
      url: "/components/button",
      label: "Button",
      type: "item",
    },
  ];

  return (
    <nav
      className={`sidebar sticky top-0 left-0 h-screen ${
        isCollapsed ? "w-14" : "w-60"
      } flex flex-shrink-0 flex-col overflow-hidden justify-between bg-slate-200/50 dark:bg-neutral-800/10 whitespace-nowrap transition-all duration-300 ease-in-out`}
    >
      <Link to={"/"}>
        <AnimatePresence mode="wait">
          {isCollapsed ? (
            <motion.div
              layout
              key={"close"}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className={`brand-name flex items-center justify-center p-4 mb-1.5 text-2xl font-[Pacifico] text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500`}
            >
              M
            </motion.div>
          ) : (
            <motion.div
              key={"open"}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className={`brand-name flex items-center justify-start p-4 mb-1.5 text-2xl font-[Pacifico] text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500`}
            >
              Miyuu's Project
            </motion.div>
          )}
        </AnimatePresence>
      </Link>
      <div className="top-section overflow-auto overflow-x-hidden px-2 pt-2 mb-auto flex flex-col gap-1">
        {sidebarItemList.map((item, idx) => {
          switch (item.type) {
            case "item":
              return (
                <SidebarItem
                  key={item.url}
                  icon={item.icon as ReactElement}
                  url={item.url as string}
                  label={item.label}
                />
              );
            case "section-title":
              return (
                <SidebarSectionTitle
                  key={item.label}
                  label={item.label}
                  secondaryText={item.secondaryText}
                  marginTop={idx > 0}
                />
              );
          }
        })}
      </div>
      <div className="bottom-section p-4"></div>
    </nav>
  );
};

export default Sidebar;
