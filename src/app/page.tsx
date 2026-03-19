import { Clients } from "@/components/Clients";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { ServicesList } from "@/components/ServicesList";
import { Team } from "@/components/Team";
import { Typography } from "@/components/Typography";
import { Video } from "@/components/Video";
import { CloseIcon } from "@shared/assets/icons/close";
import { allProjects } from "@storage/projects";
import { allServices } from "@storage/services";

import styles from "./page.module.css";

const Home = () => {
  // const lastProject = [...projects].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())[0];
  const lastProject = allProjects()[2];
  return (
    <>
      <Header />
      <main className={styles.main}>
        <h1 className='hiddenTitle'>Комьюнити. Дизайн. Разработка. Контент</h1>
        <div className='container'>
          <div className={styles.mainTitle}>
            <Typography style={{ textAlign: "center" }} variant='h2'>
              дизайн
            </Typography>
            <CloseIcon />
            <Typography style={{ textAlign: "center" }} variant='h2'>
              разработка
            </Typography>
            <CloseIcon />
            <Typography style={{ textAlign: "center" }} variant='h2'>
              контент
            </Typography>
          </div>
          <div className={styles.subtitle}>
            <Typography style={{ textAlign: "center", lineHeight: "135%" }} variant='h5'>
              Мы разрабатываем сайты и цифровые платформы, формируем бренды и айдентику, создаём достойные продукты ;)
            </Typography>
          </div>
          <section className={styles.services}>
            <Video />
            <ServicesList services={allServices()} />
          </section>
          <Team />
          <Clients />
        </div>
      </main>
      <Footer lastProject={lastProject} />
    </>
  );
};

export default Home;
