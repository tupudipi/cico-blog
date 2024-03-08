import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Cico's Blog",
  description: "A blog about Cico, the best cat in the world",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="container mx-auto px-4 flex flex-col justify-between min-h-screen">
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
