import type { Metadata } from "next";
import Link from "next/link";
import { ArticleCard } from "@/components/article-card";
import { CaseCard } from "@/components/case-card";
import { GuideRow } from "@/components/guide-row";
import { ArrowRight, ArrowUpRight } from "@/components/icons";
import { SectionHeading } from "@/components/section-heading";
import { TopicCard } from "@/components/topic-card";
import { getAllArticles } from "@/lib/articles";
import { getAllCases } from "@/lib/cases";
import { getAllGuides } from "@/lib/knowledge";
import { TOPICS } from "@/lib/topics";

export const metadata: Metadata = {
  title: "Практический ИИ для бизнеса",
  description:
    "Практический ИИ для бизнеса. Кейсы внедрения, статьи, руководства и темы: автоматизация, стратегия, аналитика и клиентский сервис.",
};

const actionLinkClass =
  "group inline-flex items-center gap-2 border-b border-white/15 pb-1.5 font-mono text-[10px] uppercase tracking-[0.16em] text-slate-400 transition hover:border-wine/60 hover:text-wine-soft";

export default function HomePage() {
  const articles = getAllArticles();
  const guides = getAllGuides();
  const cases = getAllCases();

  const latestArticles = articles.slice(0, 3);
  const latestGuides = guides.slice(0, 3);
  const latestCases = cases.slice(0, 2);

  const indexItems = [
    { href: "/services", index: "01", label: "Услуги", note: "Внедрение и аудит", count: "04" },
    { href: "/cases", index: "02", label: "Кейсы", note: "Результаты в цифрах", count: String(cases.length).padStart(2, "0") },
    { href: "/articles", index: "03", label: "Статьи", note: "Практика и разборы", count: String(articles.length).padStart(2, "0") },
    { href: "/knowledge", index: "04", label: "База знаний", note: "Гайды и чек-листы", count: String(guides.length).padStart(2, "0") },
  ];

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-grid-lines bg-[size:56px_56px] [mask-image:radial-gradient(ellipse_75%_65%_at_50%_0%,#000_30%,transparent_100%)]" />
        <div className="pointer-events-none absolute -top-52 left-1/2 h-[520px] w-[820px] -translate-x-1/2 animate-pulse-soft rounded-full bg-wine/[0.22] blur-[130px]" />

        <div className="shell relative grid items-center gap-14 py-20 lg:grid-cols-[1.08fr_0.92fr] lg:py-24">
          <div className="animate-fade-up">
            <div className="inline-flex items-center gap-2.5 rounded-full border border-wine/20 bg-wine/[0.06] px-4 py-2 font-mono text-[10px] uppercase tracking-[0.18em] text-wine-soft">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-wine-soft opacity-70" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-wine-soft" />
              </span>
              Практический ИИ
            </div>

            <h1 className="mt-7 text-[clamp(2.2rem,5.2vw,4.2rem)] font-semibold leading-[1.04] tracking-[-0.035em] text-white">
              Практический ИИ,{" "}
              <br />
              который можно{" "}
              <span className="relative inline-block text-wine-soft drop-shadow-[0_0_35px_rgba(200,131,139,0.25)]">
                внедрить
                <span className="absolute -bottom-2 left-0 h-px w-full bg-gradient-to-r from-wine via-wine/50 to-transparent" />
              </span>{" "}
              сегодня
            </h1>

            <p className="mt-7 max-w-xl text-[16px] leading-7 text-slate-400">
              Кейсы, статьи и руководства о том, как ИИ меняет реальные процессы: без хайпа, с метриками и понятными
              следующими шагами.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link href="/services" className="btn-primary">
                Смотреть услуги
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/knowledge" className="btn-ghost">
                База знаний
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="mt-10 flex flex-wrap gap-x-6 gap-y-2 border-t border-white/10 pt-6 font-mono text-[9px] uppercase tracking-[0.16em] text-slate-500">
              <Link href="#articles" className="transition hover:text-wine-soft">
                Статьи
              </Link>
              <Link href="#knowledge" className="transition hover:text-wine-soft">
                База знаний
              </Link>
              <Link href="#topics" className="transition hover:text-wine-soft">
                Темы
              </Link>
              <Link href="#cases" className="transition hover:text-wine-soft">
                Кейсы
              </Link>
            </div>
          </div>

          <div className="animate-fade-up [animation-delay:150ms]">
            <div className="relative">
              <div className="absolute inset-10 rounded-full bg-wine/25 blur-[90px]" />

              <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-graphite-800/90 shadow-card backdrop-blur">
                <div className="flex items-center justify-between border-b border-white/[0.07] px-5 py-3.5">
                  <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-slate-500">site_index</span>
                  <span className="flex items-center gap-1.5 font-mono text-[9px] uppercase tracking-[0.2em] text-wine-soft">
                    <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-wine-soft shadow-[0_0_8px_rgba(200,131,139,0.9)]" />
                    live
                  </span>
                </div>

                <div className="p-2">
                  {indexItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="group flex items-center gap-4 rounded-xl px-4 py-3.5 transition duration-200 hover:bg-white/[0.04]"
                    >
                      <span className="font-mono text-[10px] text-slate-600">{item.index}</span>
                      <div className="min-w-0 flex-1">
                        <p className="text-[14px] font-medium text-slate-200 transition group-hover:text-white">{item.label}</p>
                        <p className="mt-0.5 font-mono text-[9px] uppercase tracking-[0.12em] text-slate-600">{item.note}</p>
                      </div>
                      <span className="font-mono text-[10px] text-slate-500">{item.count}</span>
                      <ArrowUpRight className="h-4 w-4 text-slate-600 transition group-hover:text-wine-soft" />
                    </Link>
                  ))}
                </div>

                <div className="flex items-center justify-between border-t border-white/[0.07] px-5 py-3.5 font-mono text-[9px] uppercase tracking-[0.14em]">
                  <span className="text-slate-600">материалы · кейсы · услуги</span>
                  <a href="mailto:ai-consult@yandex.ru" className="text-wine-soft transition hover:text-white">
                    ai-consult@yandex.ru
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ARTICLES */}
      <section id="articles" className="scroll-mt-24 border-t border-white/[0.06]">
        <div className="shell py-20 lg:py-24">
          <SectionHeading
            index="01"
            label="Статьи"
            title={
              <>
                Свежая <span className="text-wine-soft">практика</span>
              </>
            }
            description="Разбираем сценарии, метрики и ошибки на пути от ИИ-пилота к работающей системе."
            action={
              <Link href="/articles" className={actionLinkClass}>
                Все статьи
                <ArrowUpRight className="h-3.5 w-3.5 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>
            }
          />

          {latestArticles.length > 0 ? (
            <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {latestArticles.map((article, index) => (
                <ArticleCard key={article.slug} article={article} index={index + 1} />
              ))}
            </div>
          ) : (
            <div className="mt-10 rounded-2xl border border-dashed border-white/15 p-10 text-center">
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-wine-soft">soon</p>
              <p className="mt-3 text-sm text-slate-400">Первые статьи уже готовятся.</p>
            </div>
          )}
        </div>
      </section>

      {/* KNOWLEDGE */}
      <section id="knowledge" className="scroll-mt-24 border-t border-white/[0.06] bg-white/[0.015]">
        <div className="shell py-20 lg:py-24">
          <SectionHeading
            index="02"
            label="База знаний"
            title={
              <>
                Руководства <span className="text-wine-soft"></span>
              </>
            }
            description="Чек-листы, шаблоны и практические гайды для подготовки процесса, данных и команды."
            action={
              <Link href="/knowledge" className={actionLinkClass}>
                Все руководства
                <ArrowUpRight className="h-3.5 w-3.5 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>
            }
          />

          {latestGuides.length > 0 ? (
            <div className="mt-10 border-t border-white/[0.07]">
              {latestGuides.map((guide) => (
                <GuideRow key={guide.slug} guide={guide} />
              ))}
            </div>
          ) : (
            <div className="mt-10 rounded-2xl border border-dashed border-white/15 p-10 text-center">
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-wine-soft">soon</p>
              <p className="mt-3 text-sm text-slate-400">База знаний наполняется.</p>
            </div>
          )}
        </div>
      </section>

      {/* TOPICS */}
      <section id="topics" className="scroll-mt-24 border-t border-white/[0.06]">
        <div className="shell py-20 lg:py-24">
          <SectionHeading
            index="03"
            label="Темы"
            title={
              <>
                Выберите <span className="text-wine-soft">направление</span>
              </>
            }
            description="Собрали материалы по темам, чтобы было проще найти близкий вам процесс."
            action={
              <Link href="/topics" className={actionLinkClass}>
                Все темы
                <ArrowUpRight className="h-3.5 w-3.5 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>
            }
          />

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {TOPICS.map((topic, index) => {
              const count =
                articles.filter((article) => article.topics.includes(topic.slug)).length +
                guides.filter((guide) => guide.topics.includes(topic.slug)).length;

              return <TopicCard key={topic.slug} topic={topic} count={count} index={index + 1} />;
            })}
          </div>
        </div>
      </section>

      {/* CASES */}
      <section id="cases" className="scroll-mt-24 border-t border-white/[0.06] bg-white/[0.015]">
        <div className="shell py-20 lg:py-24">
          <SectionHeading
            index="04"
            label="Кейсы"
            title={
              <>
                Из <span className="text-wine-soft">практики</span>
              </>
            }
            description="Проекты, где автоматизация дала измеримый эффект: время, конверсия, стоимость обработки."
            action={
              <Link href="/cases" className={actionLinkClass}>
                Все кейсы
                <ArrowUpRight className="h-3.5 w-3.5 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>
            }
          />

          <div className="mt-12 grid gap-4 md:grid-cols-2">
            {latestCases.map((caseItem, index) => (
              <CaseCard key={caseItem.slug} caseItem={caseItem} index={index + 1} />
            ))}

            {latestCases.length < 2 && (
              <Link
                href="/services#contact"
                className="group flex min-h-[300px] flex-col justify-between rounded-2xl border border-dashed border-white/15 p-7 transition duration-300 hover:border-wine/50 hover:bg-wine/[0.03]"
              >
                <div className="flex items-start justify-between">
                  <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-slate-500">Next case</span>
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-slate-500 transition duration-300 group-hover:border-wine/40 group-hover:text-wine-soft">
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
                <div>
                  <h3 className="text-[22px] font-semibold leading-snug tracking-tight text-white">
                    Следующий кейс — <span className="text-wine-soft">ваш бизнес</span>
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-slate-400">
                    Покажем, где ИИ окупится быстрее всего, и посчитаем эффект до старта.
                  </p>
                  <span className="mt-6 inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.16em] text-wine-soft">
                    Обсудить проект
                    <ArrowRight className="h-3.5 w-3.5" />
                  </span>
                </div>
              </Link>
            )}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-white/[0.06]">
        <div className="shell py-16 lg:py-20">
          <div className="relative overflow-hidden rounded-3xl border border-wine/20 bg-gradient-to-br from-wine/[0.20] via-white/[0.02] to-transparent p-8 sm:p-12">
            <div className="pointer-events-none absolute -right-24 -top-32 h-[320px] w-[320px] rounded-full bg-wine/25 blur-[90px]" />
            <div className="relative flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
              <div className="max-w-xl">
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-wine-soft/80">Работа с нами</p>
                <h2 className="mt-4 text-[clamp(1.6rem,3vw,2.2rem)] font-semibold leading-tight tracking-tight text-white">
                  Обсудим, где ИИ окупится в вашем бизнесе
                </h2>
                <p className="mt-3 text-sm leading-6 text-slate-400">
                  30 минут разбора: найдём 2–3 сценария автоматизации и честно скажем, где ИИ пока не нужен.
                </p>
              </div>
              <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
                <Link href="/services#contact" className="btn-primary">
                  Обсудить проект
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link href="/services" className="btn-ghost">
                  Услуги и подход
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
