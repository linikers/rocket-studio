"use client"; 
import { CssBaseline, ThemeProvider } from "@mui/material";
import type { Metadata } from "next";
import { ReactNode } from "react";
import { LayoutProps } from "../../.next/types/app/layout";
import theme from "@/theme/theme";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

interface LAyoutProps {
  children: ReactNode;
}
const metadata: Metadata = {
  title: "Rocket Studio",
  description: "Criação de artes autorais",
};

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="pt-Br">
      <body>
        <ThemeProvider theme={theme}>
        <CssBaseline />
        <Header />
        {children}
        <Footer />
        </ThemeProvider>

      </body>
    </html>
  );
}
