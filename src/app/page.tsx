import Header from '@/widgets/Header/index';
import Subtitle from '../components/shared/Subtitle/index';
import Title from '../components/shared/Title/index';
import styles from "./page.module.scss";

export default function Home() {
  return (
    <main className={styles.main}>
      <Header animated={true}/>
      <Title text="дизайн × продакшн × реклама"/>
      <Subtitle text="Здесь вы можете заказать разработку сайта, айдентики, промо-видео, необычного фото и многого другого ;)"/>
    </main>
  );
}
