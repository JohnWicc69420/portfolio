import { Inter } from "next/font/google";
import "./globals.css";
import ThemeProvider from "./providers/ThemeProvider";
import { ThemeContextProvider } from "./context/ThemeContext";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Usman Tariq",
  description: "Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeContextProvider>
          <ThemeProvider>{children}</ThemeProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
