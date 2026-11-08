export type Topic = {
  slug: string;
  title: string;
  description: string;
};

export const TOPICS: Topic[] = [
  {
    slug: "automation",
    title: "Автоматизация",
    description: "Убрать ручную рутину: заявки, документы, отчёты и повторяющиеся сценарии.",
  },
  {
    slug: "strategy",
    title: "Стратегия",
    description: "Выбрать процесс, посчитать эффект и не потратить бюджет на пилот ради пилота.",
  },
  {
    slug: "analytics",
    title: "Аналитика",
    description: "Данные, дашборды и прогнозы, на которые можно опереться в решениях.",
  },
  {
    slug: "support",
    title: "Клиентский сервис",
    description: "Поддержка, квалификация лидов и коммуникации без потери человеческого тона.",
  },
];

export function getTopicBySlug(slug: string): Topic | null {
  return TOPICS.find((topic) => topic.slug === slug) ?? null;
}

export function getTopicsBySlugs(slugs: string[] = []): Topic[] {
  return slugs
    .map((slug) => getTopicBySlug(slug))
    .filter((topic): topic is Topic => topic !== null);
}
