import { Header } from "@/widgets/Header";
import { Biography } from "@/entities/Biography";
import cls from "./page.module.scss";

const Collaborator = () => {
  return (
    <>
      <Header manualScrolled />
      <main className={cls.main}>
        <h1 className="hiddenTitle">Комьюнити. Дизайн. Продакшн. Реклама</h1>
        <Biography />
      </main>
    </>
  );
};
export default Collaborator;
