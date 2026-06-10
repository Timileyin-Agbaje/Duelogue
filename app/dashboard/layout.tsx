import Sidebar from "@/components/dashboard/sidebar/sidebar";
import type { ReactNode } from "react";
import { SidebarProvider } from "@/components/dashboard/context/SidebarContext"

export default function DashboardLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="flex h-screen">
      <SidebarProvider>
        <Sidebar />
      <main className="flex-1 h-screen overflow-y-auto">
        {children}
      </main>
      </SidebarProvider>
    </div>
  );
}