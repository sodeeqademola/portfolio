"use client";
// import { NextUIProvider } from "@nextui-org/react";
import * as React from "react";
import {
  ThemeProvider as NextThemesProvider,
  // ThemeProvider,
} from "next-themes";

import dynamic from "next/dynamic";

const ThemeProvider = ({
  children,
  ...props
}: React.ComponentProps<typeof NextThemesProvider>) => {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
};

export default dynamic(() => Promise.resolve(ThemeProvider), { ssr: false });
