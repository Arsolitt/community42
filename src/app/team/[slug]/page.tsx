import { notFound } from 'next/navigation';

import { Biography } from '@/components/Biography';
import { Header } from '@/components/Header';
import { team } from '@/shared/assets/team';

export async function generateStaticParams() {
  return team.map((member) => ({
    slug: member.slug
  }));
}

const Collaborator = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;
  const member = team.find((m) => m.slug === slug);

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
