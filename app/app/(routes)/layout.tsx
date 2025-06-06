import NavigationSideBar from "@/components/navigation/navigation-sidebar";
// import { ModalProvider } from "@/components/providers/modal-provider";

const MainServerLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full">
      {/* <ModalProvider /> */}
      <div className="hidden md:!flex h-full w-[72px] z-30 flex-col fixed inset-y-0">
        <NavigationSideBar />
      </div>
      <main className="md:pl-[72px] h-full">{children}</main>
    </div>
  );
};

export default MainServerLayout;

// className="hidden md:flex h-full w-[72px] z-30 flex-col fixed inset-y-0"
