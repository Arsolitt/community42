import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

const ProjectLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <>
      <Header manualScrolled />
      <div className='pt-[100px]'>{children}</div>
      <Footer isProjectPage />
    </>
  );
};

export default ProjectLayout;
