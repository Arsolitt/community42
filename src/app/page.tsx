import { Video } from '@/components/Video';
import { Clients } from '@/entities/Clients';
import { ServicesList } from '@/entities/Services';
import { Team } from '@/entities/Team';
import { CloseIcon } from '@/shared/assets/icons/close';
import { projects } from '@/shared/assets/projects';
import { Typography } from '@/shared/ui/Typography';
import { Footer } from '@/widgets/Footer';
import { Header } from '@/widgets/Header';

import styles from './page.module.scss';

const Home = () => {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <h1 className="hiddenTitle">Комьюнити. Дизайн. Продакшн. Реклама</h1>
        <div className="container">
          <div className={styles.mainTitle}>
            <Typography style={{ textAlign: 'center' }} variant="h2">
              дизайн
            </Typography>
            <CloseIcon />
            <Typography style={{ textAlign: 'center' }} variant="h2">
              продакшн
            </Typography>
            <CloseIcon />
            <Typography style={{ textAlign: 'center' }} variant="h2">
              реклама
            </Typography>
          </div>
          <div className={styles.subtitle}>
            <Typography style={{ textAlign: 'center' }} variant="h5">
              Здесь вы можете заказать разработку сайта, айдентики, промо-видео, необычного фото и многого другого ;)
            </Typography>
          </div>
          <section className={styles.services}>
            {/* <Image
              src="/images/services/services.png"
              alt="image"
              width={1181}
              height={437}
            /> */}
            <Video />
            <ServicesList />
          </section>
          <Team />
          <Clients />
        </div>
      </main>
      <Footer lastProject={projects[7]} />
    </>
  );
};

export default Home;
