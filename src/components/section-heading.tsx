import type { ReactNode } from "react";

type SectionHeadingProps = {
  index: string;
  label: string;
  title: ReactNode;
  description?: string;
  action?: ReactNode;
};

export function SectionHeading({ index, label, title, description, action }: SectionHeadingProps) {
  return (
    <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
      <div className="max-w-2xl">
        <div className="flex items-center gap-3">
          <span className="font-mono text-[11px] tracking-[0.18em] text-wine-soft">{index}</span>
          <span className="h-px w-7 bg-wine/40" />
          <span className="label-mono">{label}</span>
        </div>
        <h2 className="mt-5 text-[clamp(1.85rem,3.6vw,2.75rem)] font-semibold leading-[1.12] tracking-[-0.025em] text-white">
          {title}
        </h2>
        {description && <p className="mt-5 max-w-xl text-[15px] leading-7 text-slate-400">{description}</p>}
      </div>
      {action && <div className="shrink-0">{action}</div>}
    </div>
  );
}
