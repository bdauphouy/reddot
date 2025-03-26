"use client";

import { motion } from "motion/react";
import { PropsWithChildren } from "react";

export function StepTransitionWrapper({
  children,
}: Readonly<PropsWithChildren>) {
  return (
    <motion.div
      className="flex w-full flex-col items-center"
      initial={{ x: 100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
    >
      {children}
    </motion.div>
  );
}
