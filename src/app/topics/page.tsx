import type { Metadata } from "next";
import Link from "next/link";
import { TopicCard } from "@/components/topic-card";
import { getAllArticles } from "@/lib/articles";
import { getAllGuides } from "@/lib/knowledge";
import { TOPICS } from "@/lib/topics";

export const metadata: Metadata = {
  title: "Темы",
  description: "Направления материалов: автоматизация, стратегия, аналитика и клиентский сервис.",
};

export default function TopicsPage() {
  const articles = getAllArticles();
  const guides = getAllGuides();
  const totalMaterials = articles.length + guides.length;

  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-grid-lines bg-[size:56px_56px] [mask-image:radial-gradient(ellipse_70%_70%_at_30%_0%,#000_20%,transparent_100%)]" />
      <div className="pointer-events-none absolute -top-40 left-1/4 h-[380px] w-[560px] rounded-full bg-wine/[0.16] blur-[110px]" />

      <div className="shell relative py-16 lg:py-24">
        <nav
          aria-label="Хлебные крошки"
          className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.16em] text-slate-500"
        >
          <Link href="/" className="transition hover:text-wine-soft">
            Главная
          </Link>
          <span className="text-slate-700">/</span>
          <span className="text-slate-300">Темы</span>
        </nav>

        <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <div className="flex items-center gap-3">
              <span className="h-px w-7 bg-wine/50" />
              <span className="label-mono">Направления</span>
            </div>
            <h1 className="mt-5 max-w-3xl text-[clamp(2.2rem,5vw,3.8rem)] font-semibold leading-[1.06] tracking-[-0.03em] text-white">
              Темы, в которые можно <span className="text-wine-soft">погрузиться</span>
            </h1>
            <p className="mt-6 max-w-xl text-[15px] leading-7 text-slate-400">
              Собрали статьи и руководства по направлениям. Начните с темы, которая ближе к вашему процессу.
            </p>
          </div>

          <div className="flex gap-10 border-t border-white/10 pt-6 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0">
            <div>
              <p className="font-mono text-[22px] tracking-tight text-white">{String(TOPICS.length).padStart(2, "0")}</p>
              <p className="mt-1.5 font-mono text-[9px] uppercase tracking-[0.16em] text-slate-500">тем</p>
            </div>
            <div>
              <p className="font-mono text-[22px] tracking-tight text-wine-soft">{String(totalMaterials).padStart(2, "0")}</p>
              <p className="mt-1.5 font-mono text-[9px] uppercase tracking-[0.16em] text-slate-500">материалов</p>
            </div>
          </div>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {TOPICS.map((topic, index) => {
            const count =
              articles.filter((article) => article.topics.includes(topic.slug)).length +
              guides.filter((guide) => guide.topics.includes(topic.slug)).length;

            return <TopicCard key={topic.slug} topic={topic} count={count} index={index + 1} />;
          })}
        </div>
      </div>
    </section>
  );
}
