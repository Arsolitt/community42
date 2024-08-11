import Header from "@/widgets/Header";
import Subtitle from "@/shared/Subtitle/index";
import Title from "@/shared/Title";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <div
          style={{
            width: "100vw",
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          GG
        </div>
        <Title text="дизайн × продакшн × реклама" />
        <Subtitle text="Здесь вы можете заказать разработку сайта, айдентики, промо-видео, необычного фото и многого другого ;)" />
      </main>
    </>
  );
}
