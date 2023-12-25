import { AnimatePresence, motion } from "framer-motion";
import { useBoundStore } from "../../../../store/useBoundStore";

type SidebarSectionTitleProps = {
  label: string;
  secondaryText?: string;
  marginTop?: boolean;
};

const SidebarSectionTitle = ({
  label,
  secondaryText,
  marginTop,
}: SidebarSectionTitleProps) => {
  const isCollapsed = useBoundStore().isCollapsed;

  return (
    <AnimatePresence mode="wait">
      {isCollapsed ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          key={"collapsed"}
          className={`w-full p-2 h-11 ${marginTop && "mt-[26px]"}`}
        >
          <div className="w-full border border-neutral-300 dark:border-neutral-500 rounded-full"></div>
        </motion.div>
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          key={"open"}
          className={`text-indigo-600 dark:text-indigo-500 text-xs font-semibold px-2 pb-2 overflow-hidden ${marginTop && "mt-[26px]"}`}
        >
          <div className="uppercase leading-5">{label}</div>
          <div className="text-[11px] text-neutral-500 dark:text-neutral-400">
            {secondaryText}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SidebarSectionTitle;
