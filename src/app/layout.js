// app/layout.js
import "./globals.css";
import { Poppins } from 'next/font/google';
export const metadata = {
  title: "HDFC Life Verification",
  description: "Pre-conversion verification flow",
};
const poppins = Poppins({ subsets: ["latin"], weight: ["400", "600"], variable: "--font-poppins" });
 
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-50">
        {children}
      </body>
    </html>
  );
}
