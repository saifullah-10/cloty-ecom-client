
import Navbar from "@/src/components/common/Navbar";
import "./globals.css";
import Footer from "@/src/components/common/Footer";





export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
    
      >
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
