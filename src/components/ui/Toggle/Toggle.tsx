import { CircleNotch } from "@phosphor-icons/react";
import { motion } from "framer-motion";
import { useMemo, useState } from "react";

type ToggleProps = {
  defaultSelected?: boolean;
  type?: "submit" | "reset" | "button";
  size?: "small";
  color?: "primary" | "secondary" | "warning" | "success";
  label?: string;
  isError?: boolean;
  isLoading?: boolean;
  onClick?: () => void;
};

const ColorSchemeClasses = {
  primary:
    " border-neutral-400 dark:border-neutral-100 data-active:bg-blue-600 data-active:border-blue-600 dark:data-active:bg-blue-500 dark:data-active:border-blue-500 ",
  secondary:
    " border-neutral-400 dark:border-neutral-100 data-active:bg-violet-600 data-active:border-violet-600 dark:data-active:bg-violet-500 dark:data-active:border-violet-500 ",
  success:
    " border-neutral-400 dark:border-neutral-100 data-active:bg-green-600 data-active:border-green-600 dark:data-active:bg-green-500 dark:data-active:border-green-500 ",
  warning:
    " border-neutral-400 dark:border-neutral-100 data-active:bg-orange-600 data-active:border-orange-600 dark:data-active:bg-orange-500 dark:data-active:border-orange-500 ",
  error:
    " border-neutral-400 dark:border-neutral-100 data-active:bg-red-600 data-active:border-red-600 dark:data-active:bg-red-500 dark:data-active:border-red-500 ",
};

const Toggle = ({ defaultSelected, type, label, isError, isLoading, size, color, onClick, ...props }: ToggleProps) => {
  const [active, setActive] = useState<boolean>(Boolean(defaultSelected));

  const onToggleClick = () => {
    setActive(!active);
    if (onClick) {
      onClick();
    }
  };

  const ToggleClassList = useMemo(() => {
    let classList =
      "flex p-[1px] border rounded-full justify-start data-active:justify-end transition-all duration-200 ease-in-out";
    let knobClassList = "rounded-full bg-neutral-400 dark:bg-neutral-50 data-active:bg-white";
    if (size === "small") {
      classList = classList.concat(" w-[30px] h-4");
      knobClassList = knobClassList.concat(" w-3 h-3");
    } else {
      classList = classList.concat(" w-9 h-5");
      knobClassList = knobClassList.concat(" w-4 h-4");
    }
    classList = classList.concat(ColorSchemeClasses[isError ? "error" : color ? color : "primary"]);
    return { classList, knobClassList };
  }, [size, color, isError]);

  return (
    <div className="miyuu-toggle-wrapper flex gap-3 items-center justify-center">
      <input type="checkbox" className="hidden" {...props} />
      <button
        className={`miyuu-toggle-btn ${ToggleClassList.classList}`}
        data-active={active}
        type={type ?? "button"}
        disabled={isLoading}
        onClick={onToggleClick}
      >
        {isLoading ? (
          <div className="w-full flex items-center justify-center animate-spin text-neutral-400 dark:text-neutral-100">
            <CircleNotch size={size === "small" ? 12 : 16} />
          </div>
        ) : (
          <motion.div
            transition={{ duration: 0.2, ease: "easeInOut" }}
            data-active={active}
            className={`miyuu-toggle-knob ${ToggleClassList.knobClassList}`}
            layout
          ></motion.div>
        )}
      </button>
      {label && <label className="miyuu-toggle-label text-sm leading-6">{label}</label>}
    </div>
  );
};

export default Toggle;
