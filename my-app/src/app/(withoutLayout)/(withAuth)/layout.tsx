import Navbar from "@/app/components/Navbar";
import ProtectedRoute from "@/app/components/ProtectedRoute";

export default function withAuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex">
        <ProtectedRoute>
            {children}
        </ProtectedRoute>
      </body>
    </html>
  );
}
