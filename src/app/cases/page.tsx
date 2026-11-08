import type { Metadata } from "next";
import Link from "next/link";
import { CaseCard } from "@/components/case-card";
import { ArrowRight, ArrowUpRight } from "@/components/icons";
import { getAllCases } from "@/lib/cases";

export const metadata: Metadata = {
  title: "Кейсы",
  description:
    "Кейсы внедрения ИИ в бизнес: автоматизация продаж, ИИ-ассистенты, аналитика. Конкретные метрики и результаты проектов.",
};

export default function CasesPage() {
  const cases = getAllCases();

  return (
    <>
      <section className="relative overflow-hidden border-b border-white/[0.06]">
        <div className="pointer-events-none absolute inset-0 bg-grid-lines bg-[size:56px_56px] [mask-image:radial-gradient(ellipse_70%_80%_at_30%_0%,#000_20%,transparent_100%)]" />
        <div className="pointer-events-none absolute -top-40 left-1/4 h-[380px] w-[560px] rounded-full bg-wine/[0.16] blur-[110px]" />

        <div className="shell relative py-16 lg:py-24">
          <nav aria-label="Хлебные крошки" className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.16em] text-slate-500">
            <Link href="/" className="transition hover:text-wine-soft">
              Главная
            </Link>
            <span className="text-slate-700">/</span>
            <span className="text-slate-300">Кейсы</span>
          </nav>

          <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <div className="flex items-center gap-3">
                <span className="h-px w-7 bg-wine/50" />
                <span className="label-mono">Портфолио</span>
              </div>
              <h1 className="mt-5 max-w-3xl text-[clamp(2.2rem,5vw,3.8rem)] font-semibold leading-[1.06] tracking-[-0.03em] text-white">
                ИИ, который уже <span className="text-wine-soft">работает</span>
              </h1>
              <p className="mt-6 max-w-xl text-[15px] leading-7 text-slate-400">
                Собрали проекты, где автоматизация дала измеримый эффект: сократила ручную работу, ускорила сделки и
                освободила время команды.
              </p>
            </div>

            <div className="flex gap-10 border-t border-white/10 pt-6 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0">
              <div>
                <p className="font-mono text-[22px] tracking-tight text-white">{String(cases.length).padStart(2, "0")}</p>
                <p className="mt-1.5 font-mono text-[9px] uppercase tracking-[0.16em] text-slate-500">кейсов</p>
              </div>
              <div>
                <p className="font-mono text-[22px] tracking-tight text-wine-soft">4–6</p>
                <p className="mt-1.5 font-mono text-[9px] uppercase tracking-[0.16em] text-slate-500">недель до запуска</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="shell py-16 lg:py-24">
        <div className="flex items-center justify-between border-b border-white/[0.08] pb-5">
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-slate-500">Все проекты</p>
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-slate-600">
            {String(cases.length).padStart(2, "0")} / {String(cases.length).padStart(2, "0")}
          </p>
        </div>

        {cases.length > 0 ? (
          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {cases.map((caseItem, index) => (
              <CaseCard key={caseItem.slug} caseItem={caseItem} index={index + 1} />
            ))}
          </div>
        ) : (
          <div className="mt-8 rounded-2xl border border-dashed border-white/15 p-12 text-center">
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-wine-soft">empty</p>
            <h2 className="mt-4 text-xl font-semibold text-white">Кейсы скоро появятся</h2>
            <p className="mx-auto mt-3 max-w-sm text-sm leading-6 text-slate-400">
              Добавьте MDX-файл в папку <code className="text-wine-soft">content/cases/</code> — карточка появится здесь
              автоматически.
            </p>
          </div>
        )}
      </section>

      <section className="shell pb-20 lg:pb-28">
        <div className="relative overflow-hidden rounded-3xl border border-wine/20 bg-gradient-to-br from-wine/[0.20] via-white/[0.02] to-transparent px-7 py-12 sm:px-12">
          <div className="pointer-events-none absolute -right-24 -top-32 h-[320px] w-[320px] rounded-full bg-wine/25 blur-[90px]" />
          <div className="relative flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
            <div className="max-w-xl">
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-wine-soft/80">Следующий результат</p>
              <h2 className="mt-4 text-[clamp(1.6rem,3vw,2.2rem)] font-semibold leading-tight tracking-tight text-white">
                Хотите такой же эффект в своём процессе?
              </h2>
              <p className="mt-3 text-sm leading-6 text-slate-400">
                Разберём задачу, оценим потенциал и предложим первый сценарий автоматизации.
              </p>
            </div>
            <Link href="/services#contact" className="btn-primary shrink-0">
              Обсудить проект
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <a
            href="mailto:ai-consult@yandex.ru"
            className="absolute right-8 top-8 hidden items-center gap-2 font-mono text-[9px] uppercase tracking-[0.16em] text-slate-500 transition hover:text-wine-soft lg:flex"
          >
            ai-consult@yandex.ru
            <ArrowUpRight className="h-3 w-3" />
          </a>
        </div>
      </section>
    </>
  );
}
