const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className="flex items-center justify-center h-screen bg-[url(/bg/bg.jpg)] bg-cover bg-center">
        {children}
      </div>
    </>
  );
};

export default AuthLayout;
