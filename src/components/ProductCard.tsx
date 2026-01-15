"use client";

import Link from "next/link";
import { Product } from "@/types/product";
import { useProductContext } from "@/context/ProductContext";

export default function ProductCard({ product }: { product: Product }) {
  const { favorites, toggleFavorite } = useProductContext();
  const isFav = favorites.some(fav => fav.id === product.id);

  return (
    <div className="bg-white border rounded-lg p-4 relative">
      <button
        onClick={() => toggleFavorite(product)}
        className="absolute top-2 right-2 text-xl"
      >
        {isFav ? "❤️" : "🤍"}
      </button>

      <Link href={`/products/${product.id}`}>
        <img
          src={product.image}
          alt={product.title}
          className="h-40 w-full object-contain mb-3"
        />
        <h3 className="text-sm font-medium line-clamp-2">
          {product.title}
        </h3>
        <p className="text-blue-600 font-bold">${product.price}</p>
      </Link>
    </div>
  );
}
