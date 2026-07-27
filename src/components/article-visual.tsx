"use client";

type ArticleVisualProps = {
  variant: "network" | "context" | "loop" | "release" | "report" | "world";
  label?: string;
};

export default function ArticleVisual({ variant, label }: ArticleVisualProps) {
  return (
    <div className={`article-visual article-visual--${variant}`} aria-hidden="true">
      <span className="article-visual__label">{label ?? "SOURCE NOTES"}</span>
      {variant === "network" && <div className="visual-network"><i /><i /><i /><i /><i /></div>}
      {variant === "context" && <div className="visual-context"><i /><i /><i /><i /><i /><i /></div>}
      {variant === "loop" && <div className="visual-loop"><i /><i /><i /></div>}
      {variant === "release" && <div className="visual-release"><i /><i /><i /></div>}
      {variant === "report" && <div className="visual-report"><i /><i /><i /><i /></div>}
      {variant === "world" && <div className="visual-world"><i /><i /><i /><i /><i /><i /><i /></div>}
    </div>
  );
}
