"use client";

import { createContext } from "react";
import classNames from "classnames";

export enum ThemeType {
  Light,
  Dark,
}

export interface Theme {
  themeType: ThemeType;
}

// export interface ThemeState {
//   currentTheme: Theme;
// }

interface ThemeProviderProps {
  children: React.ReactNode;
}

export const ThemeContext = createContext<Theme>({
  themeType: ThemeType.Light,
});

const getIsDark = () => {
  const hours = new Date().getHours();
  return hours < 7 || hours > 19;
};

export default function ThemeProvider({ children }: ThemeProviderProps) {
  const isDark = getIsDark();
  const currentTheme: Theme = isDark
    ? { themeType: ThemeType.Dark }
    : { themeType: ThemeType.Light };

  return (
    <ThemeContext.Provider value={{ currentTheme: currentTheme }}>
      <div
        className={classNames(
          currentTheme.themeType == ThemeType.Dark ? "bg-black" : "bg-white",
          "h-[100%] w-screen"
        )}
      >
        {children}
      </div>
    </ThemeContext.Provider>
  );
}
