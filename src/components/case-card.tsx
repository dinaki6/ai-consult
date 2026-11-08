import Link from "next/link";
import { ArrowUpRight } from "@/components/icons";
import { formatCaseDate, type Case } from "@/lib/cases";

type CaseCardProps = {
  caseItem: Case;
  index?: number;
};

export function CaseCard({ caseItem, index }: CaseCardProps) {
  const date = formatCaseDate(caseItem.date);
  const metrics = caseItem.metrics ?? [];

  return (
    <Link
      href={`/cases/${caseItem.slug}`}
      className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] p-7 transition duration-300 hover:-translate-y-1 hover:border-wine/40 hover:bg-white/[0.035] hover:shadow-card"
    >
      <span className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-wine/0 blur-3xl transition duration-500 group-hover:bg-wine/10" />

      <div className="flex items-start justify-between gap-4">
        <span className="font-mono text-[11px] tracking-[0.2em] text-slate-500">
          {typeof index === "number" ? String(index).padStart(2, "0") : "CASE"}
        </span>
        <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-slate-500 transition duration-300 group-hover:border-wine/40 group-hover:text-wine-soft">
          <ArrowUpRight className="h-4 w-4" />
        </span>
      </div>

      <div className="mt-8 flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.16em] text-wine-soft/70">
        <span className="h-1 w-1 rounded-full bg-wine-soft shadow-[0_0_8px_rgba(200,131,139,0.9)]" />
        {caseItem.client}
      </div>

      <h3 className="mt-3 text-[22px] font-semibold leading-snug tracking-tight text-white transition duration-300 group-hover:text-wine-soft">
        {caseItem.title}
      </h3>

      <div className="mt-auto pt-9">
        {metrics.length > 0 && (
          <div className="grid grid-cols-2 gap-5 border-t border-white/[0.08] pt-5">
            {metrics.map((metric) => (
              <div key={`${metric.label}-${metric.value}`}>
                <p className="font-mono text-[22px] font-medium tracking-tight text-white">{metric.value}</p>
                <p className="mt-1 text-[11px] leading-4 text-slate-500">{metric.label}</p>
              </div>
            ))}
          </div>
        )}

        <div className="mt-6 flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.14em] text-slate-500">
          <span>{date}</span>
          <span className="transition duration-300 group-hover:text-wine-soft">Читать кейс →</span>
        </div>
      </div>
    </Link>
  );
}
