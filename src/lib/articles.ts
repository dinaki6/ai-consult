import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { createExcerpt } from "@/lib/format";

const ARTICLES_DIRECTORY = path.join(process.cwd(), "content", "articles");

export type ArticleFrontmatter = {
  title: string;
  excerpt?: string;
  date: string;
  topics?: string[];
  readingTime?: string;
};

export type Article = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  topics: string[];
  readingTime: string;
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

function readArticleFile(fileName: string): Article {
  const slug = fileName.replace(/\.mdx?$/, "");
  const fullPath = path.join(ARTICLES_DIRECTORY, fileName);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);
  const frontmatter = data as Partial<ArticleFrontmatter>;

  return {
    slug,
    title: frontmatter.title ?? slug,
    excerpt: frontmatter.excerpt?.trim() || createExcerpt(content),
    date: frontmatter.date ?? "",
    topics: toStringArray(frontmatter.topics),
    readingTime: frontmatter.readingTime ?? "5 мин",
    content,
  };
}

export function getAllArticles(): Article[] {
  if (!fs.existsSync(ARTICLES_DIRECTORY)) {
    return [];
  }

  return fs
    .readdirSync(ARTICLES_DIRECTORY)
    .filter(isMdxFile)
    .map(readArticleFile)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getArticleBySlug(slug: string): Article | null {
  if (!slug || slug.includes("/") || slug.includes("\\") || slug.includes("..")) {
    return null;
  }

  return getAllArticles().find((article) => article.slug === slug) ?? null;
}

export function getArticleSlugs(): string[] {
  return getAllArticles().map((article) => article.slug);
}

export function getArticlesByTopic(topicSlug: string): Article[] {
  return getAllArticles().filter((article) => article.topics.includes(topicSlug));
}
