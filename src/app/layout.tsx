import "../styles/globals.css";
import { Alef } from 'next/font/google'

const alef = Alef({
    weight: '400',
    subsets: ["hebrew"]
})

export default function RootLayout({
    // Layouts must accept a children prop.
    // This will be populated with nested layouts or pages
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="pt-BR">
            <body className={alef.className}>{children}</body>
        </html>
    );
}

export const metadata = {
    title: 'Borges Car',
    description: 'Welcome to Next.js',
};