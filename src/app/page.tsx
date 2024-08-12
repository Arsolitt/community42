import Image from "next/image";

import Header from "@/widgets/Header";
import styles from "./page.module.scss";
import { ServicesList } from "@/entities/Services";
import { Team } from "@/entities/Team";
import { Typography } from "@/shared/ui/Typography";
import { CloseIcon } from "@/shared/assets/icons/close";

export default function Home() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <h1 className={styles.hiddenTitle}>
          Комьюнити. Дизайн. Продакшн. Реклама
        </h1>
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
            <Image
              src="/images/services/services.png"
              alt="image"
              width={1181}
              height={437}
            />
            <ServicesList />
          </section>
          <Team />
        </div>
      </main>
    </>
  );
}
