import Image from "next/image";

import Header from "@/widgets/Header";
import Subtitle from "@/shared/ui/Subtitle/index";
import Title from "@/shared/ui/Title";
import styles from "./page.module.scss";
import { ServicesList } from "@/entities/Services";

export default function Home() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <div className="container">
          <Title text="дизайн × продакшн × реклама" />
          <Subtitle text="Здесь вы можете заказать разработку сайта, айдентики, промо-видео, необычного фото и многого другого ;)" />
          <section className={styles.services}>
            <Image
              src="/images/services/services.png"
              alt="image"
              width={1181}
              height={437}
            />
            <ServicesList />
          </section>
        </div>
      </main>
    </>
  );
}
