import Image from "next/image";

import Header from "@/widgets/Header";
import styles from "./page.module.scss";
import { ServicesList } from "@/entities/Services";
import { Team } from "@/entities/Team";
import { Typography } from "@/shared/ui/Typography";

export default function Home() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <div className="container">
          <Typography variant="h1" style={{ textAlign: "center" }}>
            дизайн × продакшн × реклама
          </Typography>
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
