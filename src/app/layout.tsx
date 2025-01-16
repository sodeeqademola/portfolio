import type { Metadata } from "next";
import { Geist, Geist_Mono, Roboto } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import ThemeProvider from "@/components/Providers";
import PageTransition from "@/components/PageTransition";
import Transition from "@/components/Transition";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

export const metadata: Metadata = {
  title: {
    template: "%s | Supreme Portfolio",
    default: "Supreme Portfolio",
  },
  description:
    "I am a passionate web and mobile app developer with a strong foundation in creating responsive, user-friendly websites and seamless mobile applications. With expertise in front-end and back-end technologies, I deliver tailored solutions that enhance user experience and drive business growth. I specialize in building intuitive interfaces, optimizing performance, and ensuring cross-platform compatibility. My portfolio showcases a range of projects, including e-commerce platforms, business solutions, and interactive apps, all built with the latest industry standards. Let us collaborate to bring your digital vision to life!",
  openGraph: {
    title: "Supreme Portfolio",
    description:
      "I am a passionate web and mobile app developer with a strong foundation in creating responsive, user-friendly websites and seamless mobile applications. With expertise in front-end and back-end technologies, I deliver tailored solutions that enhance user experience and drive business growth. I specialize in building intuitive interfaces, optimizing performance, and ensuring cross-platform compatibility. My portfolio showcases a range of projects, including e-commerce platforms, business solutions, and interactive apps, all built with the latest industry standards. Let us collaborate to bring your digital vision to life!",
    // url : ,
    siteName: "Supreme Porfolio",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${roboto.className} ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
          themes={[
            "light",
            "dark",
            "violet",
            "yellow",
            "blue",
            "green",
            "orange",
            "red",
          ]}
        >
          <Header />
          <Transition />
          <PageTransition>{children}</PageTransition>
        </ThemeProvider>
      </body>
    </html>
  );
}
