import Link from "next/link";
import { ArrowUpRight } from "@/components/icons";
import type { Topic } from "@/lib/topics";

type TopicCardProps = {
  topic: Topic;
  count: number;
  index: number;
};

export function TopicCard({ topic, count, index }: TopicCardProps) {
  return (
    <Link
      href={`/topics/${topic.slug}`}
      className="group relative flex min-h-[200px] flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition duration-300 hover:-translate-y-1 hover:border-wine/35 hover:bg-white/[0.035]"
    >
      <div className="flex items-center justify-between">
        <span className="font-mono text-[10px] tracking-[0.2em] text-slate-600">{String(index).padStart(2, "0")}</span>
        <ArrowUpRight className="h-4 w-4 text-slate-500 transition duration-300 group-hover:text-wine-soft" />
      </div>

      <h3 className="mt-7 text-lg font-semibold tracking-tight text-white transition duration-300 group-hover:text-wine-soft">
        {topic.title}
      </h3>
      <p className="mt-2 line-clamp-3 text-[13px] leading-6 text-slate-400">{topic.description}</p>

      <div className="mt-auto flex items-center gap-2 pt-6 font-mono text-[9px] uppercase tracking-[0.14em] text-slate-500">
        <span className="h-1 w-1 rounded-full bg-wine/70" />
        {count} {count === 1 ? "материал" : count < 5 ? "материала" : "материалов"}
      </div>
    </Link>
  );
}
