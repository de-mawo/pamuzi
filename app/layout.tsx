import "../styles/globals.css";
import Providers from "./Providers";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      {/* <head /> */}
      {/* <Providers> */}
        <body className="bg-white dark:bg-gray-900">{children}</body>
      {/* </Providers> */}
    </html>
  );
}
