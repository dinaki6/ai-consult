import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getGuideBySlug } from "@/lib/knowledge";

const slug = "roi-vnedreniya-ii-v-biznes";

export const metadata: Metadata = {
  title: "ROI внедрения ИИ: как рассчитать окупаемость для бизнеса",
  description: getGuideBySlug(slug)?.excerpt,
};

function anchor(title: string) {
  return title.toLowerCase().replace(/[^а-яёa-z0-9]+/gu, "-").replace(/-$/, "");
}

export default function RoiGuidePage() {
  const guide = getGuideBySlug(slug);
  if (!guide) notFound();
  const sections = Array.from(guide.content.matchAll(/^## (.+)$/gm), match => match[1]);
  const links = sections.map(title => (
    <li key={title}>
      <a href={`#${anchor(title)}`} className="block py-1 leading-snug text-slate-300 hover:text-wine-soft focus-visible:text-wine-soft">{title}</a>
    </li>
  ));

  return (
    <article className="shell py-10 lg:py-14">
      <Link href="/knowledge" className="text-sm text-wine-soft hover:underline">← База знаний</Link>
      <div className="mt-7 grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(16rem,20rem)] lg:gap-x-12">
        <h1 className="max-w-3xl text-[clamp(2rem,4vw,3.25rem)] font-semibold leading-[1.1] tracking-tight text-white">{guide.title}</h1>
        <nav aria-label="Содержание статьи" className="self-start rounded-2xl border border-white/10 bg-graphite-800 p-5 text-sm lg:sticky lg:top-24 lg:col-start-2 lg:row-span-2 lg:max-h-[calc(100dvh-7rem)] lg:overflow-y-auto">
          <details className="lg:hidden">
            <summary className="cursor-pointer font-semibold text-white">Содержание статьи</summary>
            <ul className="mt-3 space-y-1">{links}</ul>
          </details>
          <div className="hidden lg:block">
            <p className="mb-3 font-semibold text-white">Содержание статьи</p>
            <ul className="space-y-1">{links}</ul>
          </div>
        </nav>
        <div className="prose-case min-w-0 max-w-3xl lg:col-start-1 lg:row-start-2">
          <MDXRemote source={guide.content} components={{
            h2: ({ children }) => <h2 id={anchor(String(children))} className="scroll-mt-24">{children}</h2>,
          }} />
        </div>
      </div>
    </article>
  );
}
