import { useContext, useEffect } from "react";
import { ColorModeContext } from "./context/ColorModeContext";
import Sidebar from "./components/ui/Sidebar/Sidebar";
import { Outlet } from "react-router-dom";
import Navbar from "./components/ui/Navbar/Navbar";

const App = () => {
  const { colorMode } = useContext(ColorModeContext);

  useEffect(() => {
    if (
      localStorage["miyuu-theme"] === "dark" ||
      (!("miyuu-theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [colorMode]);

  return (
    <main className="min-h-screen flex bg-neutral-100 dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100">
      <Sidebar />
      <div className="flex flex-col grow">
        <Navbar />
        <div className="px-4 py-3 grow">
          <Outlet />
        </div>
      </div>
    </main>
  );
};

export default App;
