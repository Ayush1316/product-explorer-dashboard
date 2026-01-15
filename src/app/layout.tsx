import "./globals.css";
import { ProductProvider } from "@/context/ProductContext";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ProductProvider>{children}</ProductProvider>
      </body>
    </html>
  );
}
