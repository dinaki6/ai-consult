import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ContentPage } from "@/components/content-page";
import { getAllArticles, getArticleBySlug, getArticleSlugs } from "@/lib/articles";

type ArticlePageProps = {
  params: {
    slug: string;
  };
};

export function generateStaticParams() {
  return getArticleSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({ params }: ArticlePageProps): Metadata {
  const article = getArticleBySlug(params.slug);

  if (!article) {
    return { title: "Статья не найдена" };
  }

  return {
    title: article.title,
    description: article.excerpt,
    openGraph: {
      title: article.title,
      description: article.excerpt,
      type: "article",
    },
  };
}

export default function ArticlePage({ params }: ArticlePageProps) {
  const article = getArticleBySlug(params.slug);

  if (!article) {
    notFound();
  }

  const related = getAllArticles()
    .filter((item) => item.slug !== article.slug)
    .slice(0, 2);

  return (
    <ContentPage
      eyebrow="Статья"
      title={article.title}
      excerpt={article.excerpt}
      date={article.date}
      readingTime={article.readingTime}
      topics={article.topics}
      content={article.content}
      backHref="/articles"
      backLabel="Статьи"
    >
      {related.length > 0 && (
        <div className="mt-16">
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-slate-500">Читайте также</p>
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {related.map((item) => (
              <Link
                key={item.slug}
                href={`/articles/${item.slug}`}
                className="group rounded-xl border border-white/10 bg-white/[0.02] p-5 transition hover:border-wine/35 hover:bg-white/[0.035]"
              >
                <p className="text-[15px] font-medium leading-snug text-white transition group-hover:text-wine-soft">
                  {item.title}
                </p>
                <p className="mt-2 font-mono text-[9px] uppercase tracking-[0.14em] text-slate-500">{item.readingTime}</p>
              </Link>
            ))}
          </div>
        </div>
      )}
    </ContentPage>
  );
}
