import type { ReactNode } from "react";

export default function DashboardLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div>
        <aside className="w-64 border-r p-4">
        <h1 className="text-xl font-bold">Duelogue</h1>
      </aside>

      <main className="flex-1 p-6">
        {children}
        
      </main>
    </div>
  );
}