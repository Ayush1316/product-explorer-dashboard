"use client";

import Image from "next/image";
import { Product } from "@/types/product";
import { useProductContext } from "@/context/ProductContext";

export default function ProductDetails({ product }: { product: Product }) {
  const { toggleFavorite, isFavorite } = useProductContext();

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <div className="grid md:grid-cols-2 gap-8">
        <div className="relative h-96 bg-white rounded-lg">
          <Image
            src={product.image}
            alt={product.title}
            fill
            className="object-contain p-6"
          />
        </div>

        <div>
          <h1 className="text-2xl font-bold mb-4">{product.title}</h1>
          <p className="text-gray-600 mb-4">{product.description}</p>

          <p className="font-semibold mb-2">
            Category: {product.category}
          </p>

          <p className="text-2xl font-bold text-blue-600 mb-4">
            ${product.price}
          </p>

          <button
            onClick={() => toggleFavorite(product)}
            className="px-4 py-2 bg-black text-white rounded"
          >
            {isFavorite(product.id) ? "Remove Favorite" : "Add to Favorites"}
          </button>
        </div>
      </div>
    </div>
  );
}
