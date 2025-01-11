import { Biography } from '@/entities/Biography';
import { Header } from '@/widgets/Header';

const Collaborator = () => {
  return (
    <>
      <Header manualScrolled />
      <main className="main">
        <h1 className="hiddenTitle">Комьюнити. Дизайн. Продакшн. Реклама</h1>
        <Biography />
      </main>
    </>
  );
};
export default Collaborator;
