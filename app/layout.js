import Header from "@/components/Header";
import "./globals.css";

export const metadata = {
  title: "unicorn-100",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div>
          <Header />
        </div>
        <div>{children}</div>
      </body>
    </html>
  );
}