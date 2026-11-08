import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "@/components/icons";
import { GuideRow } from "@/components/guide-row";
import { getAllGuides } from "@/lib/knowledge";

export const metadata: Metadata = {
  title: "База знаний",
  description:
    "Руководства, чек-листы и шаблоны для внедрения ИИ: аудит процессов, требования, данные и поддержка.",
};

export default function KnowledgePage() {
  const guides = getAllGuides();
  const categories = Array.from(new Set(guides.map((guide) => guide.category)));
  const startGuide = guides.find((guide) => guide.category === "Чек-лист") ?? guides[0];

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
            <span className="text-slate-300">База знаний</span>
          </nav>

          <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <div className="flex items-center gap-3">
                <span className="h-px w-7 bg-wine/50" />
                <span className="label-mono">Knowledge base</span>
              </div>
              <h1 className="mt-5 max-w-3xl text-[clamp(2.2rem,5vw,3.8rem)] font-semibold leading-[1.06] tracking-[-0.03em] text-white">
                Руководства <span className="text-wine-soft">без воды</span>
              </h1>
              <p className="mt-6 max-w-xl text-[15px] leading-7 text-slate-400">
                Чек-листы, шаблоны и практические разборы, которые помогают подготовить процесс, данные и команду к
                внедрению ИИ.
              </p>
            </div>

            <div className="flex gap-10 border-t border-white/10 pt-6 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0">
              <div>
                <p className="font-mono text-[22px] tracking-tight text-white">{String(guides.length).padStart(2, "0")}</p>
                <p className="mt-1.5 font-mono text-[9px] uppercase tracking-[0.16em] text-slate-500">материалов</p>
              </div>
              <div>
                <p className="font-mono text-[22px] tracking-tight text-wine-soft">{String(categories.length).padStart(2, "0")}</p>
                <p className="mt-1.5 font-mono text-[9px] uppercase tracking-[0.16em] text-slate-500">форматов</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="shell py-16 lg:py-24">
        {startGuide && (
          <div className="mb-12 flex flex-col gap-6 rounded-2xl border border-wine/20 bg-wine/[0.04] p-6 sm:p-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex items-start gap-4">
              <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-wine/30 bg-wine/10 font-mono text-[11px] text-wine-soft">
                →
              </span>
              <div>
                <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-wine-soft/80">С чего начать</p>
                <h2 className="mt-2 text-lg font-semibold tracking-tight text-white">{startGuide.title}</h2>
                <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-400">{startGuide.excerpt}</p>
              </div>
            </div>
            <Link href={`/knowledge/${startGuide.slug}`} className="btn-ghost shrink-0 !px-5 !py-2.5 text-xs">
              Открыть материал
              <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        )}

        <div className="flex flex-col gap-4 border-b border-white/[0.08] pb-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-slate-500">Все материалы</p>
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <span
                key={category}
                className="rounded-full border border-white/10 px-2.5 py-1 font-mono text-[9px] uppercase tracking-[0.12em] text-slate-500"
              >
                {category}
              </span>
            ))}
          </div>
        </div>

        {guides.length > 0 ? (
          <div className="border-t border-white/[0.07]">
            {guides.map((guide) => (
              <GuideRow key={guide.slug} guide={guide} />
            ))}
          </div>
        ) : (
          <div className="mt-8 rounded-2xl border border-dashed border-white/15 p-12 text-center">
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-wine-soft">empty</p>
            <h2 className="mt-4 text-xl font-semibold text-white">База знаний наполняется</h2>
            <p className="mx-auto mt-3 max-w-sm text-sm leading-6 text-slate-400">
              Добавьте MDX-файл в <code className="text-wine-soft">content/knowledge/</code>, чтобы опубликовать руководство.
            </p>
          </div>
        )}
      </section>
    </>
  );
}
