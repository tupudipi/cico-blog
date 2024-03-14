import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import { getServerSession } from "next-auth";
import SessionProvider from "./components/SessionProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Cico's Blog",
  description: "A blog about Cico, the best cat in the world",
};

export default async function RootLayout({ children }) {
  const session = await getServerSession();
  return (
    <html lang="en">
      <body className={inter.className}>
        <SessionProvider session={session}>
          <div className="container mx-auto px-4 flex flex-col justify-between min-h-screen">
            <Navbar />
            {children}
            <Footer />
          </div>
        </SessionProvider>
      </body>
    </html>
  );
}
