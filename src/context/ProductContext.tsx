"use client";

import { createContext, useContext, useState, useEffect } from "react";

type Filters = {
  search: string;
  category: string;
  favoritesOnly: boolean;
};

type ProductContextType = {
  favorites: number[];
  toggleFavorite: (id: number) => void;
  filters: Filters;
  setFilters: React.Dispatch<React.SetStateAction<Filters>>;
};

const ProductContext = createContext<ProductContextType | null>(null);

export function ProductProvider({ children }: { children: React.ReactNode }) {
  const [favorites, setFavorites] = useState<number[]>([]);
  const [filters, setFilters] = useState<Filters>({
    search: "",
    category: "all",
    favoritesOnly: false,
  });

  useEffect(() => {
    const stored = localStorage.getItem("favorites");
    if (stored) setFavorites(JSON.parse(stored));
  }, []);

  const toggleFavorite = (id: number) => {
    setFavorites((prev) => {
      const updated = prev.includes(id)
        ? prev.filter((x) => x !== id)
        : [...prev, id];

      localStorage.setItem("favorites", JSON.stringify(updated));
      return updated;
    });
  };

  return (
    <ProductContext.Provider
      value={{ favorites, toggleFavorite, filters, setFilters }}
    >
      {children}
    </ProductContext.Provider>
  );
}

export function useProductContext() {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error("useProductContext must be used inside ProductProvider");
  }
  return context;
}
