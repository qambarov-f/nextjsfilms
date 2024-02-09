import { Inter } from "next/font/google";

// styles
import "@/styles/reset.css";
import "@/styles/globals.css";

// Components
import "@/components/Header"
import "@/components/Footer";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.className}>
      <body className="container">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
