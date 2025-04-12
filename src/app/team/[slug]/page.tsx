import { notFound } from 'next/navigation';

import { Biography } from '@/entities/Biography';
import { team } from '@/shared/assets/team'; // Импортируем данные команды
import { Header } from '@/widgets/Header';

export async function generateStaticParams() {
  return team.map((member) => ({
    slug: member.slug
  }));
}

const Collaborator = ({ params }: { params: { slug: string } }) => {
  const member = team.find((m) => m.slug === params.slug);

  if (!member) {
    return notFound();
  }

  return (
    <>
      <Header manualScrolled />
      <main className='main'>
        <h1 className='hiddenTitle'>Комьюнити. Дизайн. Продакшн. Реклама</h1>
        <Biography member={member} />
      </main>
    </>
  );
};
export default Collaborator;
