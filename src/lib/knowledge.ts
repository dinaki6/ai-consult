import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { createExcerpt } from "@/lib/format";

const KNOWLEDGE_DIRECTORY = path.join(process.cwd(), "content", "knowledge");

export type GuideFrontmatter = {
  title: string;
  excerpt?: string;
  date: string;
  category?: string;
  level?: string;
  readingTime?: string;
  topics?: string[];
};

export type Guide = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  level: string;
  readingTime: string;
  topics: string[];
  content: string;
};

function isMdxFile(fileName: string): boolean {
  return /\.mdx$/.test(fileName);
}

function toStringArray(value: unknown): string[] {
  if (Array.isArray(value)) {
    return value.filter((item): item is string => typeof item === "string");
  }
  if (typeof value === "string" && value.trim()) {
    return [value.trim()];
  }
  return [];
}

function readGuideFile(fileName: string): Guide {
  const slug = fileName.replace(/\.mdx?$/, "");
  const fullPath = path.join(KNOWLEDGE_DIRECTORY, fileName);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);
  const frontmatter = data as Partial<GuideFrontmatter>;

  return {
    slug,
    title: frontmatter.title ?? slug,
    excerpt: frontmatter.excerpt?.trim() || createExcerpt(content),
    date: frontmatter.date ?? "",
    category: frontmatter.category ?? "Руководство",
    level: frontmatter.level ?? "Начальный",
    readingTime: frontmatter.readingTime ?? "6 мин",
    topics: toStringArray(frontmatter.topics),
    content,
  };
}

export function getAllGuides(): Guide[] {
  if (!fs.existsSync(KNOWLEDGE_DIRECTORY)) {
    return [];
  }

  return fs
    .readdirSync(KNOWLEDGE_DIRECTORY)
    .filter(isMdxFile)
    .map(readGuideFile)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getGuideBySlug(slug: string): Guide | null {
  if (!slug || slug.includes("/") || slug.includes("\\") || slug.includes("..")) {
    return null;
  }

  return getAllGuides().find((guide) => guide.slug === slug) ?? null;
}

export function getGuideSlugs(): string[] {
  return getAllGuides().map((guide) => guide.slug);
}

export function getGuidesByTopic(topicSlug: string): Guide[] {
  return getAllGuides().filter((guide) => guide.topics.includes(topicSlug));
}
