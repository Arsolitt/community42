import Header from "@/widgets/Header";
import Subtitle from "@/components/shared/Subtitle/index";
import Title from "@/components/shared/Title";
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
            background: "#06082c",
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
