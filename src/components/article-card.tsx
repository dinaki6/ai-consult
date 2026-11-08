import Link from "next/link";
import { ArrowUpRight } from "@/components/icons";
import type { Article } from "@/lib/articles";
import { formatDate } from "@/lib/format";
import { getTopicsBySlugs } from "@/lib/topics";

type ArticleCardProps = {
  article: Article;
  index?: number;
};

export function ArticleCard({ article, index }: ArticleCardProps) {
  const topics = getTopicsBySlugs(article.topics);

  return (
    <Link
      href={`/articles/${article.slug}`}
      className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition duration-300 hover:-translate-y-1 hover:border-wine/35 hover:bg-white/[0.035]"
    >
      <span className="pointer-events-none absolute -right-14 -top-14 h-36 w-36 rounded-full bg-wine/0 blur-3xl transition duration-500 group-hover:bg-wine/10" />

      <div className="flex items-center justify-between gap-4 font-mono text-[9px] uppercase tracking-[0.16em]">
        <span className="flex items-center gap-2 text-wine-soft/80">
          <span className="h-1 w-1 rounded-full bg-wine-soft" />
          Статья{typeof index === "number" ? ` · ${String(index).padStart(2, "0")}` : ""}
        </span>
        <span className="text-slate-500">{formatDate(article.date)}</span>
      </div>

      <h3 className="mt-6 text-[20px] font-semibold leading-snug tracking-tight text-white transition duration-300 group-hover:text-wine-soft">
        {article.title}
      </h3>

      <p className="mt-3 line-clamp-3 text-[13px] leading-6 text-slate-400">{article.excerpt}</p>

      <div className="mt-auto pt-7">
        {topics.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {topics.map((topic) => (
              <span
                key={topic.slug}
                className="rounded-full border border-white/10 px-2.5 py-1 font-mono text-[9px] uppercase tracking-[0.1em] text-slate-400"
              >
                {topic.title}
              </span>
            ))}
          </div>
        )}

        <div className="mt-5 flex items-center justify-between border-t border-white/[0.08] pt-4 font-mono text-[9px] uppercase tracking-[0.14em] text-slate-500">
          <span>{article.readingTime}</span>
          <span className="flex items-center gap-1.5 transition duration-300 group-hover:text-wine-soft">
            Читать
            <ArrowUpRight className="h-3.5 w-3.5" />
          </span>
        </div>
      </div>
    </Link>
  );
}
