"use client";

import { createContext, useContext, useState, useEffect } from "react";

type Filters = {
  search: string;
  category: string;
  showFavorites: boolean;
};

type Product = {
  id: number;
  title: string;
  price: number;
  category: string;
  description: string;
  image: string;
};

 type ProductContextType = {
  favorites: Product[];
  toggleFavorite: (id: Product) => void;
  filters: Filters;
  setFilters: React.Dispatch<React.SetStateAction<Filters>>;
  isFavorite: (productId: number) => boolean;
};

const ProductContext = createContext<ProductContextType | null>(null);

export function ProductProvider({ children }: { children: React.ReactNode }) {
  const [favorites, setFavorites] = useState<Product[]>([]);
  const [filters, setFilters] = useState<Filters>({
    search: "",
    category: "all",
    showFavorites: false,
  });

const isFavorite = (productId: number) => {
  return favorites.some(p => p.id === productId); // compare by id
};


  useEffect(() => {
    const stored = localStorage.getItem("favorites");
    if (stored) setFavorites(JSON.parse(stored));
  }, []);

 const toggleFavorite = (product: Product) => {
  setFavorites(prev => {
    const exists = prev.some(p => p.id === product.id); // ✅ compare by id
    const updated = exists
      ? prev.filter(p => p.id !== product.id)
      : [...prev, product]; // ✅ add whole product object

    localStorage.setItem("favorites", JSON.stringify(updated)); // persist
    return updated;
  });
};
  return (
    <ProductContext.Provider
      value={{ favorites, toggleFavorite, filters, setFilters,isFavorite }}
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
