import Navbar from "@/app/components/Navbar";
import ProtectedRoute from "@/app/components/ProtectedRoute";

export default function withAuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
        <ProtectedRoute>
            {children}
        </ProtectedRoute>
      
  );
}
