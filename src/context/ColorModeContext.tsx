import { ReactNode, createContext, useState } from "react";

enum ColorMode {
  LIGHT = "light",
  DARK = "dark",
}

type ColorModeProviderProps = {
  children: ReactNode;
};

type ColorModeContextType = {
  colorMode: ColorMode;
  toggleColorMode: () => void;
};

const ColorModeContext = createContext<ColorModeContextType>(
  {} as ColorModeContextType
);

const ColorModeProvider = ({ children }: ColorModeProviderProps) => {
  const [colorMode, setColorMode] = useState<ColorMode>(
    (localStorage.getItem("miyuu-theme") as ColorMode) ?? ColorMode.LIGHT
  );

  const toggleColorMode = () => {
    setColorMode((prev) => {
      const newColorMode =
        prev === ColorMode.LIGHT ? ColorMode.DARK : ColorMode.LIGHT;
      localStorage.setItem("miyuu-theme", newColorMode);
      return newColorMode;
    });
  };

  return (
    <ColorModeContext.Provider value={{ colorMode, toggleColorMode }}>
      {children}
    </ColorModeContext.Provider>
  );
};

export { ColorMode, ColorModeContext, ColorModeProvider };
