import type { Metadata } from "next";
import Link from "next/link";
import { ArticleCard } from "@/components/article-card";
import { getAllArticles } from "@/lib/articles";
import { TOPICS } from "@/lib/topics";

export const metadata: Metadata = {
  title: "Статьи",
  description:
    "Практические статьи о внедрении ИИ в бизнес: сценарии, метрики, ошибки и решения без хайпа.",
};

export default function ArticlesPage() {
  const articles = getAllArticles();

  return (
    <>
      <section className="relative overflow-hidden border-b border-white/[0.06]">
        <div className="pointer-events-none absolute inset-0 bg-grid-lines bg-[size:56px_56px] [mask-image:radial-gradient(ellipse_70%_80%_at_30%_0%,#000_20%,transparent_100%)]" />
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
            <span className="text-slate-300">Статьи</span>
          </nav>

          <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <div className="flex items-center gap-3">
                <span className="h-px w-7 bg-wine/50" />
                <span className="label-mono">Публикации</span>
              </div>
              <h1 className="mt-5 max-w-3xl text-[clamp(2.2rem,5vw,3.8rem)] font-semibold leading-[1.06] tracking-[-0.03em] text-white">
                Практика внедрения <span className="text-wine-soft">ИИ</span>
              </h1>
              <p className="mt-6 max-w-xl text-[15px] leading-7 text-slate-400">
                Разбираем сценарии, метрики и ошибки на пути от пилота к работающей системе. Без общих слов и
                «трансформации ради трансформации».
              </p>
            </div>

            <div className="flex gap-10 border-t border-white/10 pt-6 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0">
              <div>
                <p className="font-mono text-[22px] tracking-tight text-white">{String(articles.length).padStart(2, "0")}</p>
                <p className="mt-1.5 font-mono text-[9px] uppercase tracking-[0.16em] text-slate-500">статей</p>
              </div>
              <div>
                <p className="font-mono text-[22px] tracking-tight text-wine-soft">{String(TOPICS.length).padStart(2, "0")}</p>
                <p className="mt-1.5 font-mono text-[9px] uppercase tracking-[0.16em] text-slate-500">тем</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="shell py-16 lg:py-24">
        <div className="flex flex-wrap items-center gap-2 border-b border-white/[0.08] pb-6">
          <span className="mr-1 font-mono text-[9px] uppercase tracking-[0.18em] text-slate-600">Темы:</span>
          {TOPICS.map((topic) => (
            <Link
              key={topic.slug}
              href={`/topics/${topic.slug}`}
              className="rounded-full border border-white/10 px-3 py-1.5 font-mono text-[9px] uppercase tracking-[0.12em] text-slate-400 transition hover:border-wine/40 hover:text-wine-soft"
            >
              {topic.title}
            </Link>
          ))}
        </div>

        {articles.length > 0 ? (
          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {articles.map((article, index) => (
              <ArticleCard key={article.slug} article={article} index={index + 1} />
            ))}
          </div>
        ) : (
          <div className="mt-8 rounded-2xl border border-dashed border-white/15 p-12 text-center">
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-wine-soft">empty</p>
            <h2 className="mt-4 text-xl font-semibold text-white">Статьи скоро появятся</h2>
            <p className="mx-auto mt-3 max-w-sm text-sm leading-6 text-slate-400">
              Добавьте MDX-файл в <code className="text-wine-soft">content/articles/</code> — материал появится здесь
              автоматически.
            </p>
          </div>
        )}
      </section>
    </>
  );
}
