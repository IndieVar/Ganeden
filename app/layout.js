import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/header";
import Footer from "./components/footer";
import ScrollToTop from "./components/scrollToTop";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Услуги садовника в Ашдоде - Профессиональный уход за садом",
  description: "Профессиональные услуги садовника в Ашдоде. Озеленение, обрезка, уход за растениями и ландшафтный дизайн для вашего сада.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        {children}
        <ScrollToTop />
        <Footer />
      </body>
    </html>
  );
}
