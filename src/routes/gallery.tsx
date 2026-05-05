import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { useState, useEffect } from "react";

interface GalleryItem {
  id: string;
  createdAt: string;
  title: string;
  category: string;
  imageUrl: string;
}

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery · Flashshot" },
      {
        name: "description",
        content: "Explore our recently delivered work across various categories.",
      },
    ],
  }),
  component: GalleryPage,
});

function GalleryPage() {
  const [items, setItems] = useState<GalleryItem[]>([]);
  const [activeCategory, setActiveCategory] = useState<string>("all");

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("flashshot_gallery") || "[]");
    data.sort(
      (a: GalleryItem, b: GalleryItem) =>
        new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
    );
    setItems(data);
  }, []);

  const categories = ["all", "weddings", "party", "automotive", "food"];

  const filteredItems =
    activeCategory === "all" ? items : items.filter((item) => item.category === activeCategory);

  return (
    <div className="min-h-screen bg-surface">
      <Header />
      <main className="mx-auto max-w-7xl px-5 py-16">
        <h1 className="font-display text-4xl font-semibold mb-4">Our Work</h1>
        <p className="text-muted-foreground max-w-2xl mb-12">
          Browse through our latest shoots. Shot, edited, and delivered by our network of
          professionals.
        </p>

        {/* Filters */}
        <div className="flex flex-wrap items-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`rounded-full px-4 py-1.5 text-sm font-medium capitalize transition-colors ${
                activeCategory === cat
                  ? "bg-flash text-primary-foreground"
                  : "bg-card text-muted-foreground hover:bg-card/80 border border-border"
              }`}
            >
              {cat === "party" ? "Parties & Nightlife" : cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filteredItems.length === 0 ? (
            <div className="col-span-full py-20 text-center text-muted-foreground border border-border/50 rounded-2xl bg-card/50">
              No work posted yet for this category.
            </div>
          ) : (
            filteredItems.map((item) => (
              <div
                key={item.id}
                className="group overflow-hidden rounded-2xl bg-card border border-border/50 transition-all hover:-translate-y-1 hover:border-flash/30 hover:shadow-2xl hover:shadow-flash/10"
              >
                <div className="relative aspect-square overflow-hidden">
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <div className="absolute bottom-4 left-4 right-4 translate-y-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                    <h3 className="text-white font-medium text-lg leading-tight">{item.title}</h3>
                    <span className="inline-block mt-2 text-[10px] uppercase tracking-widest text-flash font-mono bg-black/50 px-2 py-0.5 rounded backdrop-blur-sm">
                      {item.category}
                    </span>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}
