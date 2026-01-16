export const dynamic = "force-dynamic";
import { getAllProducts } from "@/lib/api";
import { ProductProvider } from "@/context/ProductContext";
import ProductGrid from "@/components/ProductGrid";
import ProductFilters from "@/components/ProductFilters";
import Header from "@/components/Header";

export default async function HomePage() {
  const products = await getAllProducts();

  return (
    <ProductProvider>
      <Header />
      <main className="max-w-7xl mx-auto p-4">
        <ProductFilters />
        <ProductGrid products={products} />
      </main>
    </ProductProvider>
  );
}
