"use client"; // Mark this as a Client Component

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Navbar from '@/components/Navbar';

const DashboardLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  const { data: session, status } = useSession();
  const router = useRouter();

  // Redirect if the user is not authenticated
  useEffect(() => {
    if (status === "loading") return; // Wait for session to load
    if (!session) {
      router.push("/signin"); // Redirect to signin if not authenticated
    }
  }, [session, status, router]);

  // Show a loading state while checking the session
  if (status === "loading") {
    return <p>Loading...</p>;
  }

  // If the user is not authenticated, don't render the layout
  if (!session) {
    return null; // Redirecting, so no need to render anything
  }

  // Render the dashboard layout for authenticated users
  return (
    <main>
      <Navbar />
      <div className="p-3 md:p-10 md:mx-20 lg:mx-36">
        {children}
      </div>
    </main>
  );
};

export default DashboardLayout;