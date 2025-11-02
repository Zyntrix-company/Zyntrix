import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio — Zyntrix Projects & Case Studies",
  description:
    "Explore Zyntrix's work: web apps, mobile apps, and full‑stack solutions delivering real business impact.",
  alternates: { canonical: "/portfolio" },
  openGraph: {
    url: "/portfolio",
    title: "Portfolio — Zyntrix Projects & Case Studies",
    description:
      "Selected projects across web, mobile, and platforms showcasing performance, UX, and results.",
  },
};

export default function PortfolioLayout({ children }: { children: React.ReactNode }) {
  return children;
}
