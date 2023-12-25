import { ComponentProps, ReactElement, forwardRef, useContext, useMemo } from "react";
import { ColorModeContext } from "../../../context/ColorModeContext";

interface IButtonProps extends ComponentProps<"button"> {
  children: ReactElement | string;
  size?: "small" | "medium" | "large";
  color?: "primary" | "secondary" | "success" | "warning" | "error";
  variation?: "outlined" | "ghost" | "filled";
}

/**
 * Styling as follow:
 * - Border (light/dark)
 * - Text (light/dark)
 * - Hover (border/background) (light/dark)
 * - Active (border/background) (light/dark)
 */
const ButtonColorSchemeClasses = {
  outlined: {
    primary:
      "border border-blue-500/50 dark:border-blue-400/50 text-blue-500 dark:text-blue-400 hover:border-blue-500 dark:hover:border-blue-400 hover:bg-blue-500/5 hover:bg-blue-400/10 active:border-blue-500 dark:active:border-blue-400 active:bg-blue-500/10 dark:active:bg-blue-400/20",
    secondary: {
      default: "blue-500",
      "default-dark": "blue-400",
      hover: "",
      active: "",
      disabled: "",
    },
    success: {
      default: "blue-500",
      "default-dark": "blue-400",
      hover: "",
      active: "",
      disabled: "",
    },
    warning: {
      default: "blue-500",
      "default-dark": "blue-400",
      hover: "",
      active: "",
      disabled: "",
    },
    error: {
      default: "blue-500",
      "default-dark": "blue-400",
      hover: "",
      active: "",
      disabled: "",
    },
  },
};

const Button = forwardRef<HTMLButtonElement, IButtonProps>((params, ref) => {
  const { size = "medium", variation = "outlined", color = "primary", children, ...props } = params;
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
      ref={ref}
      className={ButtonClassList}
      data-theme={colorMode}
      data-size={size ?? "medium"}
      data-color={color ?? "primary"}
      data-variation={variation ?? "outlined"}
      {...props}
    >
      {children}
    </button>
  );
});

export default Button;
