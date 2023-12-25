import { useBoundStore } from "../../../store/useBoundStore";

const Navbar = () => {
  const [isCollapsed, setIsCollapsed] = useBoundStore((state) => [
    state.isCollapsed,
    state.setIsCollapsed,
  ]);

  return (
    <nav className="miyuu-top-navbar px-4 py-3 h-16 flex items-center">
      <button
        onClick={() => {
          // eslint-disable-next-line no-extra-boolean-cast
          setIsCollapsed(isCollapsed ? false : true);
        }}
        className="miyuu-sidebar-toggle flex flex-col items-center justify-center gap-2 w-10 h-10 rounded-md hover:bg-neutral-200 dark:hover:bg-neutral-800 transition-all duration-200 ease-in-out"
      >
        <div className="w-[18px] h-3 flex flex-col items-start justify-between">
          <div className="border border-neutral-900 dark:border-neutral-100 rounded-full w-full"></div>
          <div
            className={`border border-neutral-900 dark:border-neutral-100 rounded-full ${
              isCollapsed ? "w-2/3" : "w-full"
            } transition-all duration-300 ease-in-out`}
          ></div>
          <div
            className={`border border-neutral-900 dark:border-neutral-100 rounded-full ${
              isCollapsed ? "w-1/3" : "w-full"
            } transition-all duration-300 ease-in-out`}
          ></div>
        </div>
      </button>
    </nav>
  );
};

export default Navbar;
