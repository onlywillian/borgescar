import Aside from "@/components/Aside";

export const metadata = {
  title: "Administradores - Borge's Car",
};

export default function AdmLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex">
      <Aside />

      {children}
    </main>
  );
}
