import Link from "next/link";
import { MailIcon } from "@/components/icons";

export function SiteFooter() {
  return (
    <footer className="relative border-t border-white/[0.07]">
      <div className="shell py-14">
        <div className="grid gap-12 md:grid-cols-[1.4fr_0.7fr_0.9fr]">
          <div>
            <Link href="/" className="inline-flex items-baseline gap-3">
              <span className="text-[15px] font-bold tracking-[0.18em] text-white">AI consulting</span>
            </Link>
            <p className="mt-5 max-w-xs text-sm leading-6 text-slate-400">
              Проектируем и внедряем ИИ-системы, которые дают измеримый результат: меньше рутины, быстрее сделки, прозрачнее данные.
            </p>
            <div className="mt-6 flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em] text-slate-500">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-wine-soft shadow-[0_0_10px_rgba(200,131,139,0.9)]" />
              Принимаем проекты на Q1 2027
            </div>
          </div>

          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-slate-500">Навигация</p>
            <ul className="mt-5 space-y-3 text-sm">
              <li>
                <Link href="/services" className="text-slate-300 transition hover:text-wine-soft">
                  Услуги
                </Link>
              </li>
              <li>
                <Link href="/cases" className="text-slate-300 transition hover:text-wine-soft">
                  Кейсы
                </Link>
              </li>
              <li>
                <Link href="/articles" className="text-slate-300 transition hover:text-wine-soft">
                  Статьи
                </Link>
              </li>
              <li>
                <Link href="/knowledge" className="text-slate-300 transition hover:text-wine-soft">
                  База знаний
                </Link>
              </li>
              <li>
                <Link href="/topics" className="text-slate-300 transition hover:text-wine-soft">
                  Темы
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-slate-300 transition hover:text-wine-soft">
                  Блог
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-slate-500">Контакты</p>
            <ul className="mt-5 space-y-3 text-sm">
              <li>
                <a
                  href="mailto:ai-consult@yandex.ru"
                  className="inline-flex items-center gap-2.5 text-slate-300 transition hover:text-wine-soft"
                >
                  <MailIcon className="h-4 w-4 text-wine-soft/70" />
                  ai-consult@yandex.ru
                </a>
              </li>
              <li className="pt-1 font-mono text-[11px] leading-5 text-slate-500">
                Москва · работаем
                <br />
                по всей России и СНГ
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/[0.06] pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-slate-600">
            © {new Date().getFullYear()} Умные цифровые решения. Все права защищены
          </p>
          <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-slate-600">Built with Next.js + MDX</p>
        </div>
      </div>
    </footer>
  );
}
