"use client";

import { useProductContext } from "@/context/ProductContext";

export default function ProductFilters() {
  const { filters, setFilters } = useProductContext();

  return (
    <div className="flex flex-col md:flex-row gap-4 mb-6">
      <input
        type="text"
        placeholder="Search products..."
        className="border p-2 rounded w-full md:w-1/3"
        value={filters.search ?? ""}
        onChange={(e) =>
          setFilters(prev => ({
            ...prev,
            search: e.target.value,
          }))
        }
      />

      <select
        className="border p-2 rounded w-full md:w-1/4"
        value={filters.category}
        onChange={(e) =>
          setFilters(prev => ({
            ...prev,
            category: e.target.value,
          }))
        }
      >
        <option value="all">All Categories</option>
        <option value="electronics">Electronics</option>
        <option value="jewelery">Jewelery</option>
        <option value="men's clothing">Men&apos;s Clothing</option>
        <option value="women's clothing">Women&apos;s Clothing</option>
      </select>

      <label className="flex items-center gap-2">
        <input
          type="checkbox"
          checked={filters.showFavorites}
          onChange={() =>
            setFilters(prev => ({
              ...prev,
              showFavorites: !prev.showFavorites,
            }))
          }
        />
        Favorites only
      </label>
    </div>
  );
}
