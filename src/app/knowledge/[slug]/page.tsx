import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ContentPage } from "@/components/content-page";
import { GuideRow } from "@/components/guide-row";
import { getAllGuides, getGuideBySlug, getGuideSlugs } from "@/lib/knowledge";

type GuidePageProps = {
  params: {
    slug: string;
  };
};

export function generateStaticParams() {
  return getGuideSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({ params }: GuidePageProps): Metadata {
  const guide = getGuideBySlug(params.slug);

  if (!guide) {
    return { title: "Материал не найден" };
  }

  return {
    title: guide.title,
    description: guide.excerpt,
    openGraph: {
      title: guide.title,
      description: guide.excerpt,
      type: "article",
    },
  };
}

export default function GuidePage({ params }: GuidePageProps) {
  const guide = getGuideBySlug(params.slug);

  if (!guide) {
    notFound();
  }

  const related = getAllGuides()
    .filter((item) => item.slug !== guide.slug)
    .slice(0, 2);

  return (
    <ContentPage
      eyebrow="База знаний"
      meta={[guide.category, guide.level]}
      title={guide.title}
      excerpt={guide.excerpt}
      date={guide.date}
      readingTime={guide.readingTime}
      topics={guide.topics}
      content={guide.content}
      backHref="/knowledge"
      backLabel="База знаний"
      ctaLabel="Обсудить внедрение"
    >
      {related.length > 0 && (
        <div className="mt-16">
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-slate-500">Ещё в базе знаний</p>
          <div className="mt-2">
            {related.map((item) => (
              <div key={item.slug}>
                <GuideRow guide={item} />
              </div>
            ))}
          </div>
        </div>
      )}
    </ContentPage>
  );
}
