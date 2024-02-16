import classNames from "classnames";
import { motion } from "framer-motion";
import * as React from "react";
import { paths, ttds } from "../data/path-data";
import { useContext } from "react";
import { ThemeContext, ThemeType } from "../providers/ThemeProvider";
import useDeviceSize from "@/hooks/useDeviceSize";
import { DeviceSize } from "@/types/devices";

interface SVGElementProps {
  className?: string;
}

export const PathDrawing = ({ className }: SVGElementProps) => {
  const theme = useContext(ThemeContext);
  const currentTheme = theme?.themeType;
  const deviceSize: DeviceSize | undefined = useDeviceSize();

  return (
    <motion.svg
      className={classNames(className, "flex")}
      viewBox="0 0 1135.38 93.54"
      initial="hidden"
      animate="visible"
    >
      <defs>
        <style>{".path{stroke-linecap:round;stroke-miterlimit:10}"}</style>
      </defs>
      {paths.map((path, index) => (
        <motion.path
          key={index}
          className={classNames(
            currentTheme == ThemeType.Dark ? "stroke-white" : "stroke-black",
            deviceSize && deviceSize >= DeviceSize.sm
              ? "stroke-2"
              : "stroke-[3]",
            "path fill-none"
          )}
          d={path}
          variants={draw}
          custom={{
            sumPreviousttd: sumBeforeIndex(ttds, index),
            ttd: ttds[index],
          }}
        />
      ))}
    </motion.svg>
  );
};

const draw = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: ({
    sumPreviousttd,
    ttd,
  }: {
    sumPreviousttd: number;
    ttd: number;
  }) => {
    const delay = sumPreviousttd * 0.7;
    const duration = ttd * 0.7;
    return {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { delay, duration },
        opacity: { delay, duration: 0.01 },
      },
    };
  },
};

function sumBeforeIndex(array: number[], index: number): number {
  return array.reduce((acc, cur, curIndex) => {
    if (curIndex < index) {
      return acc + cur;
    } else {
      return acc;
    }
  }, 0);
}
