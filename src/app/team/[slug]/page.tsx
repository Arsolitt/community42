import { notFound } from "next/navigation";

import type { TeamMemberSlug } from "@/data/team/data";

import { Biography } from "@/components/Biography";
import { Header } from "@/components/Header";
import { allTeamMembers, teamMemberBySlug } from "@/data/team/utils";

export async function generateStaticParams() {
  return allTeamMembers().map((member) => ({
    slug: member.slug
  }));
}

const Collaborator = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;
  const member = teamMemberBySlug(slug as TeamMemberSlug);

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
