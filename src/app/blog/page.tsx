import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, MailIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "Блог",
  description: "Короткие заметки о внедрении ИИ в бизнес: практика, сценарии автоматизации и разборы без хайпа. Раздел в разработке.",
};

const UPCOMING = [
  {
    category: "Автоматизация",
    title: "Автоматизация, которая не ломает процессы",
    note: "С чего начать, если команда сопротивляется изменениям.",
  },
  {
    category: "Экономика",
    title: "Сколько стоит внедрить ИИ-агента в 2026",
    note: "Из чего складывается бюджет и где обычно прячутся скрытые расходы.",
  },
  {
    category: "Практика",
    title: "Как выбрать первый процесс для автоматизации",
    note: "Три критерия, по которым мы оцениваем потенциал сценария.",
  },
] as const;

export default function BlogPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-white/[0.06]">
        <div className="pointer-events-none absolute inset-0 bg-grid-lines bg-[size:56px_56px] [mask-image:radial-gradient(ellipse_70%_80%_at_30%_0%,#000_20%,transparent_100%)]" />
        <div className="pointer-events-none absolute -top-40 left-1/4 h-[360px] w-[520px] rounded-full bg-wine/[0.16] blur-[110px]" />

        <div className="shell relative py-16 lg:py-24">
          <nav aria-label="Хлебные крошки" className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.16em] text-slate-500">
            <Link href="/" className="transition hover:text-wine-soft">
              Главная
            </Link>
            <span className="text-slate-700">/</span>
            <span className="text-slate-300">Блог</span>
          </nav>

          <div className="mt-12 max-w-3xl">
            <div className="flex items-center gap-3">
              <span className="h-px w-7 bg-wine/50" />
              <span className="label-mono">Блог</span>
            </div>
            <h1 className="mt-5 text-[clamp(2.2rem,5vw,3.8rem)] font-semibold leading-[1.06] tracking-[-0.03em] text-white">
              Заметки об ИИ <span className="text-wine-soft">без хайпа</span>
            </h1>
            <p className="mt-6 max-w-xl text-[15px] leading-7 text-slate-400">
              Практика внедрения, разборы сценариев и честные цифры. Большие материалы уже в разделе «Статьи», а блог
              скоро пополнится короткими заметками.
            </p>
          </div>
        </div>
      </section>

      <section className="shell py-16 lg:py-24">
        <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] p-8 sm:p-10">
          <span className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-wine/50 to-transparent" />
          <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
            <div className="max-w-xl">
              <div className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.18em] text-wine-soft">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-wine-soft" />
                status: in_progress
              </div>
              <h2 className="mt-4 text-2xl font-semibold tracking-tight text-white">Короткие заметки уже пишутся</h2>
              <p className="mt-3 text-sm leading-6 text-slate-400">
                Пока блог в разработке, самые глубокие материалы — в статьях и базе знаний. Анонсы новых заметок
                отправим по почте подписчикам.
              </p>
            </div>
            <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
              <Link href="/articles" className="btn-primary !px-5 !py-3 text-xs">
                Читать статьи
                <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>
              <Link href="/knowledge" className="btn-ghost !px-5 !py-3 text-xs">
                База знаний
              </Link>
              <a href="mailto:ai-consult@yandex.ru?subject=Подписка%20на%20блог" className="btn-ghost !px-5 !py-3 text-xs">
                <MailIcon className="h-4 w-4" />
                Подписаться
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 flex items-center justify-between border-b border-white/[0.08] pb-5">
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-slate-500">Скоро на сайте</p>
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-slate-600">03 / 03</p>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {UPCOMING.map((article, index) => (
            <article
              key={article.title}
              className="group flex flex-col rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition duration-300 hover:border-white/20"
            >
              <div className="flex items-center justify-between">
                <span className="rounded-full border border-white/10 px-3 py-1 font-mono text-[9px] uppercase tracking-[0.14em] text-slate-400">
                  {article.category}
                </span>
                <span className="font-mono text-[10px] tracking-[0.18em] text-slate-600">{String(index + 1).padStart(2, "0")}</span>
              </div>
              <h2 className="mt-7 text-lg font-semibold leading-snug tracking-tight text-white/80">{article.title}</h2>
              <p className="mt-3 text-sm leading-6 text-slate-500">{article.note}</p>
              <div className="mt-auto flex items-center gap-2 pt-8 font-mono text-[9px] uppercase tracking-[0.16em] text-slate-500">
                <span className="h-1.5 w-1.5 rounded-full border border-wine/60" />
                Скоро
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
