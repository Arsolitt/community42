import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { Typography } from '@/components/Typography';
import { Clients } from '@/entities/Clients';
import { ServicesList } from '@/entities/Services';
import { Team } from '@/entities/Team';
import { CloseIcon } from '@/shared/assets/icons/close';
import { projects } from '@/shared/assets/projects';
import { Video } from '@/components/Video';

import styles from './page.module.scss';

const Home = () => {
  // const lastProject = [...projects].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())[0];
  const lastProject = projects[2];
  return (
    <>
      <Header />
      <main className={styles.main}>
        <h1 className='hiddenTitle'>Комьюнити. Дизайн. Продакшн. Реклама</h1>
        <div className='container'>
          <div className={styles.mainTitle}>
            <Typography style={{ textAlign: 'center' }} variant='h2'>
              дизайн
            </Typography>
            <CloseIcon />
            <Typography style={{ textAlign: 'center' }} variant='h2'>
              продакшн
            </Typography>
            <CloseIcon />
            <Typography style={{ textAlign: 'center' }} variant='h2'>
              реклама
            </Typography>
          </div>
          <div className={styles.subtitle}>
            <Typography style={{ textAlign: 'center' }} variant='h5'>
              Здесь вы можете заказать разработку сайта, айдентики, промо-видео, необычного фото и многого другого ;)
            </Typography>
          </div>
          <section className={styles.services}>
            <Video />
            <ServicesList />
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
