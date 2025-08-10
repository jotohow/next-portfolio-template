export const metadata = {
  title: "Your Portfolio",
  description: "Your professional portfolio and showcase",
};

import "./globals.css";
import Header from "../components/Header";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="min-h-[100dvh] flex flex-col">
          <Header />
          <main className="flex-1 flex flex-col justify-center">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
