import { Footer } from '@/widgets/Footer';
import { Header } from '@/widgets/Header';

const ProjectLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <>
      <Header manualScrolled />
      <div className='pt-[100px]'>{children}</div>
      <Footer />
    </>
  );
};

export default ProjectLayout;
