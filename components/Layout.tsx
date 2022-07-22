interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <main className="flex flex-col items-center justify-center w-full h-screen">
        {children}
      </main>
    </>
  );
};

export default Layout;
