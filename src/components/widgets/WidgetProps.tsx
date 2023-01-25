import { statsData } from "./StatsGridWidget";

export type WidgetProps = {
  type: "card" | "table" | "chart" | "calendar" | "custom" | "stats";
  title: string;
  content?: string;
  columns?: string[];
  rows?: string[][];
  data?: Record<string, any>[];
  events?: Record<string, any>[];
  stats?: statsData[];
};
