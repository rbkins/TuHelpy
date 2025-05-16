import type React from "react";
import AdminNavbar from "@/components/ui/admin-navbar";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <AdminNavbar />

      <main className="flex-1 p-4 md:p-6 pt-4">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white rounded-xl shadow-sm border overflow-hidden">
            <div className="p-4 sm:p-6">{children}</div>
          </div>
        </div>
      </main>
    </div>
  );
}
