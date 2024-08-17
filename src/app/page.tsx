
import { Clients } from "@/entities/Clients";
import { ServicesList } from "@/entities/Services";
import { Team } from "@/entities/Team";
import { Footer } from "@/widgets/Footer";
import { Header } from "@/widgets/Header";

import Video from '@/components/Video';
import { CloseIcon } from "@/shared/assets/icons/close";
import { Typography } from "@/shared/ui/Typography";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <h1 className="hiddenTitle">Комьюнити. Дизайн. Продакшн. Реклама</h1>
        <div className="container">
          <div className={styles.mainTitle}>
            <Typography variant="h2" style={{ textAlign: "center" }}>
              дизайн
            </Typography>
            <CloseIcon />
            <Typography variant="h2" style={{ textAlign: "center" }}>
              продакшн
            </Typography>
            <CloseIcon />
            <Typography variant="h2" style={{ textAlign: "center" }}>
              реклама
            </Typography>
          </div>
          <div className={styles.subtitle}>
            <Typography variant="h5" style={{ textAlign: "center" }}>
              Здесь вы можете заказать разработку сайта, айдентики, промо-видео,
              необычного фото и многого другого ;)
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
        <Footer />
      </main>
    </>
  );
}
