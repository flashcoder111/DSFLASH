"use client";

import { useMemo, useState } from "react";
import type { RadarItem } from "@/lib/blog-data";

type SortOrder = "stars" | "updated";
type SortDirection = "asc" | "desc";

function formatStars(stars: number) {
  return new Intl.NumberFormat("en-US", { notation: "compact", maximumFractionDigits: 1 }).format(stars);
}

function formatUpdated(updatedAt: string) {
  return new Intl.DateTimeFormat("en-US", {
    month: "short", day: "numeric", year: "numeric", hour: "2-digit", minute: "2-digit", timeZone: "UTC", timeZoneName: "short"
  }).format(new Date(updatedAt));
}

export default function RadarList({ items }: { items: RadarItem[] }) {
  const [sortOrder, setSortOrder] = useState<SortOrder>("stars");
  const [sortDirection, setSortDirection] = useState<SortDirection>("desc");
  const sortedItems = useMemo(() => [...items].sort((a, b) => {
    const comparison = sortOrder === "stars" ? a.stars - b.stars : Date.parse(a.updatedAt) - Date.parse(b.updatedAt);
    return sortDirection === "asc" ? comparison : -comparison;
  }), [items, sortDirection, sortOrder]);
  const setSort = (nextOrder: SortOrder) => {
    if (nextOrder === sortOrder) setSortDirection((current) => current === "asc" ? "desc" : "asc");
    else { setSortOrder(nextOrder); setSortDirection("desc"); }
  };
  const sortLabel = (order: SortOrder, label: string) => {
    const active = order === sortOrder;
    const arrow = active ? (sortDirection === "asc" ? "↑" : "↓") : "↕";
    const direction = active ? (sortDirection === "asc" ? "ascending" : "descending") : "descending";
    return <><span>{label}</span><span className="radar-sort__arrow" aria-hidden="true">{arrow}</span><span className="sr-only">, {direction}</span></>;
  };

  return <>
    <div className="radar-toolbar" aria-label="Sort GitHub Radar projects">
      <p>{items.length} projects tracked · Stars and update times checked July 27, 2026</p>
      <div className="radar-sort" role="group" aria-label="Sort projects">
        <span>Sort by</span>
        <button className={sortOrder === "stars" ? "is-active" : ""} type="button" onClick={() => setSort("stars")}>{sortLabel("stars", "Stars")}</button>
        <button className={sortOrder === "updated" ? "is-active" : ""} type="button" onClick={() => setSort("updated")}>{sortLabel("updated", "Latest update")}</button>
      </div>
    </div>
    <section className="article-list">
      {sortedItems.map((item) => <article className="article-list-item radar-item" key={item.href}>
        <div>
          <p className="eyebrow">{item.category}</p>
          <h2><a href={item.href} target="_blank" rel="noreferrer">{item.name} ↗</a></h2>
          <p>{item.description}</p>
        </div>
        <div className="article-list-item__meta radar-item__meta">
          <span className="radar-stars" aria-label={`${item.stars.toLocaleString("en-US")} GitHub stars`}>★ {formatStars(item.stars)}</span>
          <span>{item.license}</span>
          <time dateTime={item.updatedAt}>Updated {formatUpdated(item.updatedAt)}</time>
        </div>
      </article>)}
    </section>
  </>;
}
