import Link from "next/link";
import { ArrowRight } from "@/components/icons";

export default function NotFound() {
  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-grid-lines bg-[size:56px_56px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_40%,#000_20%,transparent_100%)]" />
      <div className="shell relative flex min-h-[62vh] flex-col items-center justify-center py-24 text-center">
        <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-wine-soft">error 404</p>
        <h1 className="mt-6 text-[clamp(2.4rem,6vw,4rem)] font-semibold tracking-[-0.03em] text-white">
          Страница не найдена
        </h1>
        <p className="mt-5 max-w-md text-[15px] leading-7 text-slate-400">
          Возможно, ссылка устарела или материал был перемещён. Вернитесь на главную или посмотрите кейсы и базу
          знаний.
        </p>
        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
          <Link href="/" className="btn-primary">
            На главную
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link href="/cases" className="btn-ghost">
            Все кейсы
          </Link>
          <Link href="/knowledge" className="btn-ghost">
            База знаний
          </Link>
        </div>
      </div>
    </section>
  );
}
