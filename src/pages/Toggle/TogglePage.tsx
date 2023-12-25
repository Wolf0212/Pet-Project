import { useContext } from "react";
import Toggle from "../../components/ui/Toggle/Toggle";
import { ColorMode, ColorModeContext } from "../../context/ColorModeContext";
import RouteWrapper from "../../components/ui/RouteWrapper/RouteWrapper";

const TogglePage = () => {
  const { colorMode, toggleColorMode } = useContext(ColorModeContext);
  return (
    <RouteWrapper>
      <div>
        Page for toggle button
        <Toggle
          onClick={toggleColorMode}
          defaultSelected={colorMode === ColorMode.DARK}
          label="Toggle dark mode"
        />
        <Toggle label="Test theme" size="small" color="secondary" />
      </div>
    </RouteWrapper>
  );
};

export default TogglePage;
