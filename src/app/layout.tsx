import "../styles/globals.css";
import { Alef } from "next/font/google";
import AuthProvider from "@/contexts/authContext";

const alef = Alef({
  weight: "400",
  subsets: ["hebrew"],
});

export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AuthProvider>
      <html lang="pt-BR">
        <body className={alef.className}>{children}</body>
      </html>
    </AuthProvider>
  );
}

export const metadata = {
  title: "Borges Car",
  description: "Welcome to Borge's Cars website",
};
