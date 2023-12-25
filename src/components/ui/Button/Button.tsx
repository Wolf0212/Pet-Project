import { useContext, useMemo } from "react";
import { ColorModeContext } from "../../../context/ColorModeContext";

type ButtonProps = {
  size?: "small" | "medium" | "large";
  color?: "primary" | "secondary" | "success" | "warning" | "error";
  variation?: "outlined" | "ghost" | "filled";
};

const ButtonColorSchemeClasses = {
  outlined: {
    primary:
      "border border-blue-600/50 dark:border-blue-500/50 text-blue-600 dark:text-blue-500 hover:border-blue-600 dark:hover:border-blue-500 hover:bg-blue-600/5 hover:bg-blue-500/5 focus:ring-2 ring-blue-600 dark:ring-blue-500",
    secondary: {
      default: "blue-600",
      "default-dark": "blue-500",
      hover: "",
      focus: "",
      disabled: "",
    },
    success: {
      default: "blue-600",
      "default-dark": "blue-500",
      hover: "",
      focus: "",
      disabled: "",
    },
    warning: {
      default: "blue-600",
      "default-dark": "blue-500",
      hover: "",
      focus: "",
      disabled: "",
    },
    error: {
      default: "blue-600",
      "default-dark": "blue-500",
      hover: "",
      focus: "",
      disabled: "",
    },
  },
};

const Button = ({
  size = "medium",
  color = "primary",
  variation = "outlined",
}: ButtonProps) => {
  const { colorMode } = useContext(ColorModeContext);

  const ButtonVariationClasses = useMemo(() => {
    return {
      outlined: ButtonColorSchemeClasses.outlined[color],
      ghost: "",
      filled: "",
    };
  }, [color]);

  const ButtonClassList = useMemo(() => {
    let classList =
      "rounded-md transition-all duration-200 ease-in-out font-semibold flex items-center justify-center ";
    switch (size) {
      case "small":
        classList += "gap-1 px-4 py-[5px] text-xs leading-5 ";
        break;
      case "medium":
        classList += "gap-2 px-4 py-[7px] text-sm leading-6 ";
        break;
      case "large":
        classList += "gap-2 px-6 py-[13px] leading-6 ";
        break;
    }
    switch (variation) {
      case "outlined":
        classList += ButtonVariationClasses.outlined;
        break;
      case "ghost":
        classList += ButtonVariationClasses.ghost;
        break;
      case "filled":
        classList += ButtonVariationClasses.filled;
        break;
    }
    return classList;
  }, [size, variation, ButtonVariationClasses]);

  return (
    <button
      className={ButtonClassList}
      data-theme={colorMode}
      data-size={size ?? "medium"}
      data-color={color ?? "primary"}
      data-variation={variation ?? "outlined"}
    >
      <span className="label">This is a button</span>
    </button>
  );
};

export default Button;
