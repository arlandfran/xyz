import Texture from "./Texture";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <main className="flex flex-col h-screen w-full justify-center items-center">
        {children}
      </main>
      <Texture></Texture>
    </>
  );
};

export default Layout;
