import Link from "next/link";
import { ArrowUpRight } from "@/components/icons";
import { formatDate } from "@/lib/format";
import type { Guide } from "@/lib/knowledge";

type GuideRowProps = {
  guide: Guide;
};

export function GuideRow({ guide }: GuideRowProps) {
  return (
    <Link
      href={`/knowledge/${guide.slug}`}
      className="group grid gap-3 border-b border-white/[0.07] py-6 transition md:grid-cols-[150px_1fr_auto] md:items-start md:gap-6"
    >
      <div className="flex flex-wrap items-center gap-2 md:pt-1">
        <span className="rounded-full border border-wine/20 bg-wine/[0.05] px-2.5 py-1 font-mono text-[9px] uppercase tracking-[0.12em] text-wine-soft/80">
          {guide.category}
        </span>
        <span className="font-mono text-[9px] uppercase tracking-[0.12em] text-slate-600">{guide.level}</span>
      </div>

      <div>
        <h3 className="text-[17px] font-semibold leading-snug tracking-tight text-white transition duration-300 group-hover:text-wine-soft">
          {guide.title}
        </h3>
        <p className="mt-2 line-clamp-2 text-[13px] leading-6 text-slate-400">{guide.excerpt}</p>
        <div className="mt-3 flex flex-wrap items-center gap-2 font-mono text-[9px] uppercase tracking-[0.14em] text-slate-500">
          <span>{formatDate(guide.date)}</span>
          <span className="h-0.5 w-0.5 rounded-full bg-slate-600" />
          <span>{guide.readingTime}</span>
        </div>
      </div>

      <span className="hidden h-9 w-9 items-center justify-center rounded-full border border-white/10 text-slate-500 transition duration-300 group-hover:border-wine/40 group-hover:text-wine-soft md:flex">
        <ArrowUpRight className="h-4 w-4" />
      </span>
    </Link>
  );
}
