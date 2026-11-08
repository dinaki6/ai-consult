import type { Metadata } from "next";
import Link from "next/link";
import { CaseCard } from "@/components/case-card";
import { ContactForm } from "@/components/contact-form";
import { ArrowRight, ArrowUpRight, Chart, Check, Funnel, Plug, Sparkles } from "@/components/icons";
import { SectionHeading } from "@/components/section-heading";
import { getAllCases } from "@/lib/cases";

export const metadata: Metadata = {
  title: "Услуги",
  description:
    "Внедрение ИИ под ключ: ассистенты, автоматизация продаж, аналитика и интеграции с CRM. Аудит процесса, пилот и запуск за 4–6 недель.",
};

const SERVICES = [
  {
    index: "01",
    icon: Sparkles,
    title: "ИИ-ассистенты",
    description:
      "Отвечают клиентам, квалифицируют лиды и закрывают типовые задачи поддержки — круглосуточно и без потери качества.",
    tags: ["Чат-боты", "База знаний", "Поддержка 24/7"],
  },
  {
    index: "02",
    icon: Funnel,
    title: "Автоматизация продаж",
    description:
      "Собираем воронку, где ИИ сам обрабатывает заявки, расставляет приоритеты и подсказывает менеджеру следующий шаг.",
    tags: ["Квалификация", "CRM", "Скоринг"],
  },
  {
    index: "03",
    icon: Chart,
    title: "Аналитика и отчётность",
    description:
      "Превращаем разрозненные данные в живые дашборды и автоматические сводки, на которые можно опереться в решениях.",
    tags: ["Дашборды", "Прогнозы", "Сводки"],
  },
  {
    index: "04",
    icon: Plug,
    title: "Интеграции и API",
    description:
      "Связываем ИИ с CRM, телефонией, почтой и внутренними системами — без замены привычных инструментов команды.",
    tags: ["API", "Webhooks", "Безопасность"],
  },
] as const;

const PIPELINE_STEPS = [
  { id: "01", title: "Заявка получена", meta: "сайт · форма", status: "done" },
  { id: "02", title: "ИИ-квалификация", meta: "0.8 сек", status: "active" },
  { id: "03", title: "Сделка в CRM", meta: "Битрикс24", status: "done" },
  { id: "04", title: "Отчёт руководителю", meta: "09:00", status: "done" },
] as const;

const APPROACH_STEPS = [
  {
    index: "01",
    time: "2–3 дня",
    title: "Аудит и гипотезы",
    text: "Разбираем процессы, находим узкие места и считаем потенциал автоматизации в часах и деньгах.",
  },
  {
    index: "02",
    time: "1–2 недели",
    title: "Прототип на реальных данных",
    text: "Собираем рабочий сценарий на ваших данных, чтобы вы увидели результат до финальных инвестиций.",
  },
  {
    index: "03",
    time: "4–6 недель",
    title: "Запуск и сопровождение",
    text: "Интегрируем решение в CRM и системы команды, обучаем сотрудников и остаёмся на поддержке.",
  },
] as const;

function PipelinePreview() {
  return (
    <div className="relative mx-auto w-full max-w-[440px]">
      <div className="absolute inset-10 rounded-full bg-wine/25 blur-[90px]" />

      <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-graphite-800/90 shadow-card backdrop-blur">
        <div className="flex items-center justify-between border-b border-white/[0.07] px-5 py-3.5">
          <div className="flex gap-1.5" aria-hidden="true">
            <span className="h-2 w-2 rounded-full bg-white/15" />
            <span className="h-2 w-2 rounded-full bg-white/15" />
            <span className="h-2 w-2 rounded-full bg-wine/60" />
          </div>
          <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-slate-500">sales_pipeline.ai</span>
        </div>

        <div className="p-6">
          <div className="flex items-center justify-between">
            <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-slate-500">Воронка · онлайн</span>
            <span className="flex items-center gap-1.5 font-mono text-[9px] uppercase tracking-[0.2em] text-wine-soft">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-wine-soft shadow-[0_0_8px_rgba(200,131,139,0.9)]" />
              live
            </span>
          </div>

          <div className="mt-5 space-y-2.5">
            {PIPELINE_STEPS.map((step) => {
              const isActive = step.status === "active";
              return (
                <div
                  key={step.id}
                  className={`flex items-center gap-4 rounded-xl border px-4 py-3 transition ${
                    isActive ? "border-wine/30 bg-wine/[0.06]" : "border-white/[0.06] bg-white/[0.02]"
                  }`}
                >
                  <span className={`font-mono text-[10px] ${isActive ? "text-wine-soft" : "text-slate-600"}`}>{step.id}</span>
                  <div className="min-w-0 flex-1">
                    <p className={`truncate text-[13px] ${isActive ? "text-white" : "text-slate-300"}`}>{step.title}</p>
                    <p className="mt-0.5 font-mono text-[9px] uppercase tracking-[0.12em] text-slate-500">{step.meta}</p>
                  </div>
                  {isActive ? (
                    <span className="flex items-center gap-1.5 font-mono text-[9px] uppercase tracking-[0.14em] text-wine-soft">
                      <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-wine-soft" />
                      run
                    </span>
                  ) : (
                    <Check className="h-3.5 w-3.5 text-wine-soft/50" />
                  )}
                </div>
              );
            })}
          </div>

          <div className="mt-5 flex items-end justify-between rounded-xl border border-wine/20 bg-wine/[0.05] px-4 py-4">
            <div>
              <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-wine-soft/80">Среднее время обработки</p>
              <p className="mt-2 text-2xl font-semibold tracking-tight text-white">
                35 <span className="text-sm font-normal text-slate-400">минут</span>
              </p>
            </div>
            <span className="rounded-full bg-wine px-2.5 py-1 font-mono text-[10px] font-bold text-white">−70%</span>
          </div>
        </div>
      </div>

      <div className="absolute -left-5 top-[38%] hidden items-center gap-2 rounded-lg border border-white/10 bg-graphite-700/95 px-3 py-2 font-mono text-[9px] uppercase tracking-[0.14em] text-slate-300 shadow-card backdrop-blur sm:flex">
        <span className="h-1.5 w-1.5 rounded-full bg-wine-soft shadow-[0_0_8px_rgba(200,131,139,0.9)]" />
        лид квалифицирован
      </div>
    </div>
  );
}

export default function HomePage() {
  const latestCases = getAllCases().slice(0, 3);

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-grid-lines bg-[size:56px_56px] [mask-image:radial-gradient(ellipse_75%_65%_at_50%_0%,#000_30%,transparent_100%)]" />
        <div className="pointer-events-none absolute -top-52 left-1/2 h-[520px] w-[820px] -translate-x-1/2 animate-pulse-soft rounded-full bg-wine/[0.22] blur-[130px]" />

        <div className="shell relative grid items-center gap-16 py-20 lg:grid-cols-[1.08fr_0.92fr] lg:py-28">
          <div className="animate-fade-up">
            <div className="inline-flex items-center gap-2.5 rounded-full border border-wine/20 bg-wine/[0.06] px-4 py-2 font-mono text-[10px] uppercase tracking-[0.18em] text-wine-soft">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-wine-soft opacity-70" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-wine-soft" />
              </span>
              Внедрение ИИ · под ключ
            </div>

            <h1 className="mt-7 text-[clamp(2.2rem,5.4vw,4.35rem)] font-semibold leading-[1.04] tracking-[-0.035em] text-white">
              ИИ-автоматизация{" "}
              <br />
              для{" "}
              <span className="relative inline-block text-wine-soft drop-shadow-[0_0_35px_rgba(200,131,139,0.25)]">
                бизнеса
                <span className="absolute -bottom-2 left-0 h-px w-full bg-gradient-to-r from-wine via-wine/50 to-transparent" />
              </span>
            </h1>

            <p className="mt-7 max-w-xl text-[16px] leading-7 text-slate-400">
              Проектируем и запускаем ИИ-системы, которые снимают рутину с команды, ускоряют продажи и дают данные для
              решений. Без хайпа — только измеримый результат.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link href="#contact" className="btn-primary">
                Получить консультацию
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/cases" className="btn-ghost">
                Смотреть кейсы
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>

            <dl className="mt-12 grid max-w-lg grid-cols-3 gap-6 border-t border-white/10 pt-7">
              <div className="flex flex-col-reverse gap-2">
                <dt className="font-mono text-[9px] uppercase leading-4 tracking-[0.14em] text-slate-500">меньше рутины</dt>
                <dd className="text-[21px] font-semibold tracking-tight text-white sm:text-[26px]">до 70%</dd>
              </div>
              <div className="flex flex-col-reverse gap-2 border-l border-white/10 pl-4 sm:pl-6">
                <dt className="font-mono text-[9px] uppercase leading-4 tracking-[0.14em] text-slate-500">к конверсии</dt>
                <dd className="text-[21px] font-semibold tracking-tight text-wine-soft sm:text-[26px]">+45%</dd>
              </div>
              <div className="flex flex-col-reverse gap-2 border-l border-white/10 pl-4 sm:pl-6">
                <dt className="font-mono text-[9px] uppercase leading-4 tracking-[0.14em] text-slate-500">до запуска</dt>
                <dd className="text-[21px] font-semibold tracking-tight text-white sm:text-[26px]">4–6 нед.</dd>
              </div>
            </dl>
          </div>

          <div className="animate-fade-up [animation-delay:150ms]">
            <PipelinePreview />
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="scroll-mt-24 border-t border-white/[0.06]">
        <div className="shell py-20 lg:py-28">
          <SectionHeading
            index="01"
            label="Услуги"
            title={
              <>
                Что мы <span className="text-wine-soft">внедряем</span>
              </>
            }
            description="Четыре направления, из которых собирается рабочая ИИ-система под ваш процесс — от первого сценария до поддержки."
          />

          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {SERVICES.map((service) => {
              const Icon = service.icon;
              return (
                <article
                  key={service.index}
                  className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition duration-300 hover:-translate-y-1 hover:border-wine/35 hover:bg-white/[0.035]"
                >
                  <span className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-wine/60 to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />

                  <div className="flex items-start justify-between">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-graphite-800 text-wine-soft transition duration-300 group-hover:border-wine/40 group-hover:shadow-[0_0_25px_-8px_rgba(200,131,139,0.8)]">
                      <Icon className="h-5 w-5" />
                    </span>
                    <span className="font-mono text-[10px] tracking-[0.2em] text-slate-600">{service.index}</span>
                  </div>

                  <h3 className="mt-7 text-[17px] font-semibold tracking-tight text-white">{service.title}</h3>
                  <p className="mt-3 text-[13px] leading-6 text-slate-400">{service.description}</p>

                  <div className="mt-auto flex flex-wrap gap-x-2 gap-y-1 pt-6 font-mono text-[9px] uppercase tracking-[0.1em] text-slate-500">
                    {service.tags.map((tag, i) => (
                      <span key={tag} className="flex items-center gap-2">
                        {i > 0 && <span className="h-0.5 w-0.5 rounded-full bg-wine/40" />}
                        {tag}
                      </span>
                    ))}
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* APPROACH */}
      <section id="approach" className="scroll-mt-24 border-y border-white/[0.06] bg-white/[0.015]">
        <div className="shell grid gap-12 py-20 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20 lg:py-24">
          <div>
            <div className="flex items-center gap-3">
              <span className="font-mono text-[11px] tracking-[0.18em] text-wine-soft">02</span>
              <span className="h-px w-7 bg-wine/40" />
              <span className="label-mono">Подход</span>
            </div>
            <h2 className="mt-5 text-[clamp(1.85rem,3.6vw,2.75rem)] font-semibold leading-[1.12] tracking-[-0.025em] text-white">
              От аудита до работающей системы
            </h2>
            <p className="mt-5 max-w-md text-[15px] leading-7 text-slate-400">
              Стартуем с маленького сценария, доказываем эффект на цифрах и только потом масштабируем. Никаких
              многомесячных внедрений «в стол».
            </p>
            <div className="mt-8 inline-flex items-center gap-2.5 rounded-full border border-white/10 px-4 py-2 font-mono text-[10px] uppercase tracking-[0.14em] text-slate-400">
              <Check className="h-3.5 w-3.5 text-wine-soft" />
              Фиксируем результат в договоре
            </div>
          </div>

          <ol className="divide-y divide-white/[0.07] border-t border-white/[0.07]">
            {APPROACH_STEPS.map((step) => (
              <li key={step.index} className="group grid grid-cols-[auto_1fr] gap-5 py-7 sm:grid-cols-[auto_1fr_auto] sm:items-start">
                <span className="font-mono text-[11px] tracking-[0.16em] text-wine-soft/70">{step.index}</span>
                <div>
                  <h3 className="text-lg font-semibold tracking-tight text-white">{step.title}</h3>
                  <p className="mt-2 max-w-md text-sm leading-6 text-slate-400">{step.text}</p>
                </div>
                <span className="col-start-2 mt-1 w-fit rounded-full border border-white/10 bg-graphite-800 px-3 py-1 font-mono text-[9px] uppercase tracking-[0.14em] text-slate-400 sm:col-start-3 sm:mt-1.5">
                  {step.time}
                </span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* CASES */}
      <section id="cases" className="scroll-mt-24">
        <div className="shell py-20 lg:py-28">
          <SectionHeading
            index="03"
            label="Кейсы"
            title={
              <>
                Результат, который можно <span className="text-wine-soft">посчитать</span>
              </>
            }
            description="Не «магия ИИ», а конкретные метрики: время, конверсия, стоимость обработки."
            action={
              <Link
                href="/cases"
                className="group inline-flex items-center gap-2 border-b border-white/15 pb-1.5 font-mono text-[10px] uppercase tracking-[0.16em] text-slate-400 transition hover:border-wine/60 hover:text-wine-soft"
              >
                Все кейсы
                <ArrowUpRight className="h-3.5 w-3.5 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>
            }
          />

          <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {latestCases.map((caseItem, index) => (
              <CaseCard key={caseItem.slug} caseItem={caseItem} index={index + 1} />
            ))}

            <Link
              href="#contact"
              className="group flex h-full min-h-[280px] flex-col justify-between rounded-2xl border border-dashed border-white/15 p-7 transition duration-300 hover:border-wine/50 hover:bg-wine/[0.03]"
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
                  Покажем, где ИИ окупится быстрее всего, и посчитаем эффект ещё до старта.
                </p>
                <span className="mt-6 inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.16em] text-wine-soft">
                  Обсудить проект
                  <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="relative scroll-mt-24 overflow-hidden border-t border-white/[0.06]">
        <div className="pointer-events-none absolute -bottom-40 right-0 h-[420px] w-[560px] rounded-full bg-wine/[0.16] blur-[120px]" />
        <div className="shell relative grid gap-12 py-20 lg:grid-cols-[1fr_0.9fr] lg:gap-20 lg:py-28">
          <div>
            <div className="flex items-center gap-3">
              <span className="font-mono text-[11px] tracking-[0.18em] text-wine-soft">04</span>
              <span className="h-px w-7 bg-wine/40" />
              <span className="label-mono">Заявка</span>
            </div>
            <h2 className="mt-5 text-[clamp(1.85rem,3.6vw,2.75rem)] font-semibold leading-[1.12] tracking-[-0.025em] text-white">
              Обсудим ваш процесс
            </h2>
            <p className="mt-5 max-w-md text-[15px] leading-7 text-slate-400">
              На 30-минутном разборе найдём 2–3 сценария автоматизации и честно скажем, где ИИ пока не нужен.
            </p>

            <ul className="mt-9 space-y-4">
              {[
                "Бесплатный разбор процесса — 30 минут",
                "Отвечаем в течение рабочего дня",
                "NDA и работа с вашими данными по запросу",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-slate-300">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-wine/25 bg-wine/[0.08] text-wine-soft">
                    <Check className="h-3 w-3" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-10 border-t border-white/[0.08] pt-6">
              <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-slate-500">Или напишите напрямую</p>
              <a href="mailto:ai-consult@yandex.ru" className="mt-3 inline-block text-lg font-medium text-white transition hover:text-wine-soft">
                ai-consult@yandex.ru
              </a>
            </div>
          </div>

          <div className="panel relative overflow-hidden p-6 shadow-card sm:p-8">
            <span className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-wine/60 to-transparent" />
            <div className="mb-6 flex items-center justify-between">
              <p className="text-sm font-semibold text-white">Оставить заявку</p>
              <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-slate-500">ответ ~2 часа</span>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
