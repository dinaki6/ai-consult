import Link from "next/link";
import type { ReactNode } from "react";
import { MDXRemote } from "next-mdx-remote/rsc";
import type { MDXComponents } from "mdx/types";
import { ArrowRight } from "@/components/icons";
import { formatDate } from "@/lib/format";
import { getTopicsBySlugs } from "@/lib/topics";

const mdxComponents: MDXComponents = {
  h1: (props) => <h2 className="case-section-title" {...props} />,
};

type ContentPageProps = {
  eyebrow: string;
  meta?: string[];
  title: string;
  excerpt: string;
  date: string;
  readingTime?: string;
  topics?: string[];
  content: string;
  backHref: string;
  backLabel: string;
  ctaLabel?: string;
  children?: ReactNode;
};

export function ContentPage({
  eyebrow,
  meta = [],
  title,
  excerpt,
  date,
  readingTime,
  topics = [],
  content,
  backHref,
  backLabel,
  ctaLabel = "Обсудить задачу",
  children,
}: ContentPageProps) {
  const topicItems = getTopicsBySlugs(topics);

  return (
    <article>
      <section className="relative overflow-hidden border-b border-white/[0.06]">
        <div className="pointer-events-none absolute inset-0 bg-grid-lines bg-[size:56px_56px] [mask-image:radial-gradient(ellipse_70%_80%_at_25%_0%,#000_20%,transparent_100%)]" />
        <div className="pointer-events-none absolute -top-40 left-1/3 h-[360px] w-[500px] rounded-full bg-wine/[0.18] blur-[110px]" />

        <div className="shell relative py-14 lg:py-20">
          <nav
            aria-label="Хлебные крошки"
            className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.16em] text-slate-500"
          >
            <Link href="/" className="transition hover:text-wine-soft">
              Главная
            </Link>
            <span className="text-slate-700">/</span>
            <Link href={backHref} className="transition hover:text-wine-soft">
              {backLabel}
            </Link>
            <span className="text-slate-700">/</span>
            <span className="max-w-[220px] truncate text-slate-300">{title}</span>
          </nav>

          <div className="mt-12 max-w-3xl">
            <div className="flex flex-wrap items-center gap-x-3 gap-y-2 font-mono text-[10px] uppercase tracking-[0.14em]">
              <span className="flex items-center gap-2 text-wine-soft">
                <span className="h-1.5 w-1.5 rounded-full bg-wine-soft shadow-[0_0_10px_rgba(200,131,139,0.9)]" />
                {eyebrow}
              </span>
              {meta.map((item) => (
                <span key={item} className="rounded-full border border-white/10 px-2.5 py-1 text-slate-400">
                  {item}
                </span>
              ))}
              <span className="text-slate-500">{formatDate(date)}</span>
              {readingTime && (
                <>
                  <span className="h-0.5 w-0.5 rounded-full bg-slate-600" />
                  <span className="text-slate-500">{readingTime}</span>
                </>
              )}
            </div>

            <h1 className="mt-5 text-[clamp(2rem,4.6vw,3.4rem)] font-semibold leading-[1.08] tracking-[-0.03em] text-white">
              {title}
            </h1>
            <p className="mt-6 text-[16px] leading-7 text-slate-400">{excerpt}</p>

            {topicItems.length > 0 && (
              <div className="mt-7 flex flex-wrap gap-2">
                {topicItems.map((topic) => (
                  <Link
                    key={topic.slug}
                    href={`/topics/${topic.slug}`}
                    className="rounded-full border border-white/10 bg-white/[0.02] px-3 py-1.5 font-mono text-[9px] uppercase tracking-[0.12em] text-slate-400 transition hover:border-wine/40 hover:text-wine-soft"
                  >
                    {topic.title}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="shell py-16 lg:py-24">
        <div className="mx-auto max-w-3xl">
          <div className="mb-10 flex items-center gap-3">
            <span className="h-px w-10 bg-wine/60" />
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-slate-500">Материал</span>
          </div>

          <div className="prose-case">
            <MDXRemote source={content} components={mdxComponents} />
          </div>

          <div className="mt-16 flex flex-col gap-6 border-t border-white/[0.08] pt-8 sm:flex-row sm:items-center sm:justify-between">
            <Link
              href={backHref}
              className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.16em] text-slate-400 transition hover:text-wine-soft"
            >
              ← {backLabel}
            </Link>
            <Link href="/services#contact" className="btn-primary !px-5 !py-3 text-xs">
              {ctaLabel}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          {children}
        </div>
      </section>
    </article>
  );
}
