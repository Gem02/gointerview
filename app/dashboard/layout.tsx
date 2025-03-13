
import Navbar from '@/components/Navbar';

const DashboardLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  
  return (
    <main>
      <Navbar />
      <div className="p-5 mx-3 md:p-10 md:mx-20 lg:mx-36 min-h-screen">
        {children}
      </div>
    </main>
  );
};

export default DashboardLayout;