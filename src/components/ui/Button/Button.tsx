import { ComponentProps, ReactElement, forwardRef, useContext, useMemo } from "react";
import { ColorModeContext } from "../../../context/ColorModeContext";

interface IButtonProps extends ComponentProps<"button"> {
  children: ReactElement | string;
  size?: "small" | "medium" | "large";
  color?: "primary" | "secondary" | "success" | "warning";
  variation?: "outlined" | "ghost" | "filled";
  isError?: boolean;
  isLoading?: boolean;
  isDisabled?: boolean;
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
    secondary:
      "border border-violet-500/50 dark:border-violet-400/50 text-violet-500 dark:text-violet-400 hover:border-violet-500 dark:hover:border-violet-400 hover:bg-violet-500/5 hover:bg-violet-400/10 active:border-violet-500 dark:active:border-violet-400 active:bg-violet-500/10 dark:active:bg-violet-400/20",
    success:
      "border border-green-500/50 dark:border-green-400/50 text-green-500 dark:text-green-400 hover:border-green-500 dark:hover:border-green-400 hover:bg-green-500/5 hover:bg-green-400/10 active:border-green-500 dark:active:border-green-400 active:bg-green-500/10 dark:active:bg-green-400/20",
    warning:
      "border border-orange-500/50 dark:border-orange-400/50 text-orange-500 dark:text-orange-400 hover:border-orange-500 dark:hover:border-orange-400 hover:bg-orange-500/5 hover:bg-orange-400/10 active:border-orange-500 dark:active:border-orange-400 active:bg-orange-500/10 dark:active:bg-orange-400/20",
    error:
      "border border-red-600/50 dark:border-red-500/50 text-red-600 dark:text-red-500 hover:border-red-600 dark:hover:border-red-500 hover:bg-red-600/5 hover:bg-red-500/10 active:border-red-600 dark:active:border-red-500 active:bg-red-600/10 dark:active:bg-red-500/20",
    disabled: "border",
  },
};

const Button = forwardRef<HTMLButtonElement, IButtonProps>((params, ref) => {
  const {
    isError,
    isDisabled,
    size = "medium",
    variation = "outlined",
    color = isError ? "error" : "primary",
    children,
    ...props
  } = params;
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
      "rounded-md transition-all duration-200 ease-in-out font-semibold flex items-center justify-center disabled:cursor-default ";
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
      disabled={isDisabled}
      type={props.type ?? "button"}
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
