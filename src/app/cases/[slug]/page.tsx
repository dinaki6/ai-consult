import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import type { MDXComponents } from "mdx/types";
import { ArrowRight, ArrowUpRight } from "@/components/icons";
import { formatCaseDate, getAllCases, getCaseBySlug, getCaseSlugs } from "@/lib/cases";

// В MDX кейса разделы размечены "#": на странице это h2, чтобы h1 оставался один.
const mdxComponents: MDXComponents = {
  h1: (props) => <h2 className="case-section-title" {...props} />,
};

type CasePageProps = {
  params: {
    slug: string;
  };
};

export function generateStaticParams() {
  return getCaseSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({ params }: CasePageProps): Metadata {
  const caseItem = getCaseBySlug(params.slug);

  if (!caseItem) {
    return { title: "Кейс не найден" };
  }

  return {
    title: caseItem.title,
    description: `Кейс: ${caseItem.title}. Клиент — ${caseItem.client}.`,
    openGraph: {
      title: caseItem.title,
      description: `Кейс для ${caseItem.client}`,
      type: "article",
    },
  };
}

export default function CasePage({ params }: CasePageProps) {
  const caseItem = getCaseBySlug(params.slug);

  if (!caseItem) {
    notFound();
  }

  const metrics = caseItem.metrics ?? [];
  const otherCases = getAllCases().filter((item) => item.slug !== caseItem.slug).slice(0, 2);
  const date = formatCaseDate(caseItem.date);
  const metricsGridClass =
    metrics.length === 1 ? "grid-cols-1" : metrics.length === 2 ? "grid-cols-2" : "grid-cols-2 lg:grid-cols-4";

  return (
    <article>
      <section className="relative overflow-hidden border-b border-white/[0.06]">
        <div className="pointer-events-none absolute inset-0 bg-grid-lines bg-[size:56px_56px] [mask-image:radial-gradient(ellipse_70%_80%_at_25%_0%,#000_20%,transparent_100%)]" />
        <div className="pointer-events-none absolute -top-40 left-1/3 h-[380px] w-[520px] rounded-full bg-wine/[0.18] blur-[110px]" />

        <div className="shell relative py-14 lg:py-20">
          <nav aria-label="Хлебные крошки" className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.16em] text-slate-500">
            <Link href="/" className="transition hover:text-wine-soft">
              Главная
            </Link>
            <span className="text-slate-700">/</span>
            <Link href="/cases" className="transition hover:text-wine-soft">
              Кейсы
            </Link>
            <span className="text-slate-700">/</span>
            <span className="max-w-[220px] truncate text-slate-300">{caseItem.title}</span>
          </nav>

          <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.18em] text-wine-soft/80">
                <span className="h-1.5 w-1.5 rounded-full bg-wine-soft shadow-[0_0_10px_rgba(200,131,139,0.9)]" />
                Кейс · {caseItem.client}
              </div>
              <h1 className="mt-5 max-w-3xl text-[clamp(2.1rem,4.8vw,3.6rem)] font-semibold leading-[1.07] tracking-[-0.03em] text-white">
                {caseItem.title}
              </h1>
              <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-2 font-mono text-[10px] uppercase tracking-[0.14em] text-slate-500">
                <span>
                  Клиент: <span className="text-slate-300">{caseItem.client}</span>
                </span>
                {date && <span>{date}</span>}
              </div>
            </div>

            <Link href="/cases" className="btn-ghost w-fit !px-5 !py-2.5 text-xs">
              Все кейсы
              <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          {metrics.length > 0 && (
            <dl className={`mt-12 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 ${metricsGridClass}`}>
              {metrics.map((metric) => (
                <div key={`${metric.label}-${metric.value}`} className="bg-graphite-800 px-6 py-5">
                  <dt className="font-mono text-[9px] uppercase leading-4 tracking-[0.16em] text-slate-500">{metric.label}</dt>
                  <dd className="mt-2 text-[28px] font-semibold tracking-tight text-wine-soft">{metric.value}</dd>
                </div>
              ))}
            </dl>
          )}
        </div>
      </section>

      <section className="shell py-16 lg:py-24">
        <div className="mx-auto max-w-3xl">
          <div className="mb-10 flex items-center gap-3">
            <span className="h-px w-10 bg-wine/60" />
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-slate-500">Разбор проекта</span>
          </div>

          <div className="prose-case">
            <MDXRemote source={caseItem.content} components={mdxComponents} />
          </div>

          <div className="mt-16 flex flex-col gap-6 border-t border-white/[0.08] pt-8 sm:flex-row sm:items-center sm:justify-between">
            <Link
              href="/cases"
              className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.16em] text-slate-400 transition hover:text-wine-soft"
            >
              ← Все кейсы
            </Link>
            <Link href="/services#contact" className="btn-primary !px-5 !py-3 text-xs">
              Обсудить похожий проект
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {otherCases.length > 0 && (
        <section className="border-t border-white/[0.06]">
          <div className="shell py-14 lg:py-20">
            <div className="flex items-center justify-between">
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-slate-500">Другие кейсы</p>
              <Link href="/cases" className="font-mono text-[10px] uppercase tracking-[0.16em] text-slate-500 transition hover:text-wine-soft">
                Смотреть все →
              </Link>
            </div>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {otherCases.map((item) => (
                <Link
                  key={item.slug}
                  href={`/cases/${item.slug}`}
                  className="group flex items-center justify-between gap-6 rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition hover:border-wine/40 hover:bg-white/[0.035]"
                >
                  <div>
                    <p className="font-mono text-[9px] uppercase tracking-[0.16em] text-wine-soft/70">{item.client}</p>
                    <p className="mt-2 text-lg font-semibold leading-snug text-white transition group-hover:text-wine-soft">
                      {item.title}
                    </p>
                  </div>
                  <ArrowUpRight className="h-5 w-5 shrink-0 text-slate-500 transition group-hover:text-wine-soft" />
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </article>
  );
}
