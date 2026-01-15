"use client";

import { Product } from "@/types/product";
import ProductCard from "./ProductCard";
import { useProductContext } from "@/context/ProductContext";

export default function ProductGrid({ products }: { products: Product[] }) {
  const { filters, favorites } = useProductContext();

  const filtered = products.filter((p) => {
    if (
      filters.showFavorites &&
      !favorites.includes(p.id)
    )
      return false;

    if (
      filters.category !== "all" &&
      p.category !== filters.category
    )
      return false;

    if (
      filters.search &&
      !p.title.toLowerCase().includes(filters.search.toLowerCase())
    )
      return false;

    return true;
  });

  if (!filtered.length)
    return <p className="text-center">No products found</p>;

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {filtered.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
