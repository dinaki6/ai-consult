import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { formatDate } from "@/lib/format";

const CASES_DIRECTORY = path.join(process.cwd(), "content", "cases");

export type CaseMetric = {
  label: string;
  value: string;
};

export type CaseFrontmatter = {
  title: string;
  client: string;
  date: string;
  metrics?: CaseMetric[];
};

export type Case = CaseFrontmatter & {
  slug: string;
  content: string;
};

function isMdxFile(fileName: string): boolean {
  return /\.mdx?$/.test(fileName);
}

function readCaseFile(fileName: string): Case {
  const slug = fileName.replace(/\.mdx?$/, "");
  const fullPath = path.join(CASES_DIRECTORY, fileName);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);
  const frontmatter = data as Partial<CaseFrontmatter>;

  return {
    slug,
    title: frontmatter.title ?? slug,
    client: frontmatter.client ?? "Клиент не указан",
    date: frontmatter.date ?? "",
    metrics: Array.isArray(frontmatter.metrics) ? frontmatter.metrics : [],
    content,
  };
}

export function getAllCases(): Case[] {
  if (!fs.existsSync(CASES_DIRECTORY)) {
    return [];
  }

  return fs
    .readdirSync(CASES_DIRECTORY)
    .filter(isMdxFile)
    .map(readCaseFile)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getCaseBySlug(slug: string): Case | null {
  // Защита от выхода за пределы папки content/cases.
  if (!slug || slug.includes("/") || slug.includes("\\") || slug.includes("..")) {
    return null;
  }

  return getAllCases().find((item) => item.slug === slug) ?? null;
}

export function getCaseSlugs(): string[] {
  return getAllCases().map((item) => item.slug);
}

export function formatCaseDate(date: string): string {
  return formatDate(date);
}
