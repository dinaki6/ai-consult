import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArticleCard } from "@/components/article-card";
import { GuideRow } from "@/components/guide-row";
import { ArrowRight } from "@/components/icons";
import { getArticlesByTopic } from "@/lib/articles";
import { getGuidesByTopic } from "@/lib/knowledge";
import { getTopicBySlug, TOPICS } from "@/lib/topics";

type TopicPageProps = {
  params: {
    slug: string;
  };
};

export function generateStaticParams() {
  return TOPICS.map((topic) => ({ slug: topic.slug }));
}

export function generateMetadata({ params }: TopicPageProps): Metadata {
  const topic = getTopicBySlug(params.slug);

  if (!topic) {
    return { title: "Тема не найдена" };
  }

  return {
    title: topic.title,
    description: topic.description,
  };
}

export default function TopicPage({ params }: TopicPageProps) {
  const topic = getTopicBySlug(params.slug);

  if (!topic) {
    notFound();
  }

  const articles = getArticlesByTopic(topic.slug);
  const guides = getGuidesByTopic(topic.slug);
  const total = articles.length + guides.length;
  const materialWord = total === 1 ? "материал" : total < 5 ? "материала" : "материалов";
  const otherTopics = TOPICS.filter((item) => item.slug !== topic.slug);

  return (
    <>
      <section className="relative overflow-hidden border-b border-white/[0.06]">
        <div className="pointer-events-none absolute inset-0 bg-grid-lines bg-[size:56px_56px] [mask-image:radial-gradient(ellipse_70%_80%_at_25%_0%,#000_20%,transparent_100%)]" />
        <div className="pointer-events-none absolute -top-40 left-1/3 h-[360px] w-[520px] rounded-full bg-wine/[0.18] blur-[110px]" />

        <div className="shell relative py-14 lg:py-20">
          <nav
            aria-label="Хлебные крошки"
            className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.16em] text-slate-500"
          >
            <Link href="/" className="transition hover:text-wine-soft">
              Главная
            </Link>
            <span className="text-slate-700">/</span>
            <Link href="/topics" className="transition hover:text-wine-soft">
              Темы
            </Link>
            <span className="text-slate-700">/</span>
            <span className="text-slate-300">{topic.title}</span>
          </nav>

          <div className="mt-12 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.18em] text-wine-soft/80">
                <span className="h-1.5 w-1.5 rounded-full bg-wine-soft shadow-[0_0_10px_rgba(200,131,139,0.9)]" />
                Тема · {total} {materialWord}
              </div>
              <h1 className="mt-5 text-[clamp(2.1rem,4.8vw,3.5rem)] font-semibold leading-[1.07] tracking-[-0.03em] text-white">
                {topic.title}
              </h1>
              <p className="mt-5 text-[16px] leading-7 text-slate-400">{topic.description}</p>
            </div>

            <div className="flex flex-wrap gap-2">
              {otherTopics.map((item) => (
                <Link
                  key={item.slug}
                  href={`/topics/${item.slug}`}
                  className="rounded-full border border-white/10 px-3 py-1.5 font-mono text-[9px] uppercase tracking-[0.12em] text-slate-400 transition hover:border-wine/40 hover:text-wine-soft"
                >
                  {item.title}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {articles.length > 0 && (
        <section className="shell py-14 lg:py-20">
          <div className="flex items-center justify-between border-b border-white/[0.08] pb-5">
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-slate-500">Статьи</p>
            <Link href="/articles" className="font-mono text-[9px] uppercase tracking-[0.16em] text-slate-500 transition hover:text-wine-soft">
              Все статьи →
            </Link>
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {articles.map((article, index) => (
              <ArticleCard key={article.slug} article={article} index={index + 1} />
            ))}
          </div>
        </section>
      )}

      {guides.length > 0 && (
        <section className="shell pb-16 lg:pb-24">
          <div className="flex items-center justify-between border-b border-white/[0.08] pb-5">
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-slate-500">Из базы знаний</p>
            <Link href="/knowledge" className="font-mono text-[9px] uppercase tracking-[0.16em] text-slate-500 transition hover:text-wine-soft">
              Все руководства →
            </Link>
          </div>
          <div className="border-t border-white/[0.07]">
            {guides.map((guide) => (
              <GuideRow key={guide.slug} guide={guide} />
            ))}
          </div>
        </section>
      )}

      {total === 0 && (
        <section className="shell py-16 lg:py-24">
          <div className="rounded-2xl border border-dashed border-white/15 p-12 text-center">
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-wine-soft">in progress</p>
            <h2 className="mt-4 text-xl font-semibold text-white">Материалы по теме готовятся</h2>
            <p className="mx-auto mt-3 max-w-sm text-sm leading-6 text-slate-400">
              Пока посмотрите другие направления или наши кейсы.
            </p>
            <Link href="/cases" className="btn-ghost mt-6 !py-2.5 text-xs">
              Смотреть кейсы
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </section>
      )}

      <section className="shell pb-20 lg:pb-28">
        <div className="relative overflow-hidden rounded-3xl border border-wine/20 bg-gradient-to-br from-wine/[0.20] via-white/[0.02] to-transparent px-7 py-10 sm:px-10">
          <div className="pointer-events-none absolute -right-24 -top-32 h-[280px] w-[280px] rounded-full bg-wine/25 blur-[90px]" />
          <div className="relative flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-wine-soft/80">Практика</p>
              <h2 className="mt-3 text-2xl font-semibold tracking-tight text-white">Нужен разбор вашего процесса?</h2>
              <p className="mt-2 text-sm leading-6 text-slate-400">
                Найдём сценарии автоматизации и оценим эффект до старта.
              </p>
            </div>
            <Link href="/services#contact" className="btn-primary shrink-0">
              Обсудить проект
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
