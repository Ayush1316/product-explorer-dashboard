"use client";

type Props = {
  products: any[];
};

export default function ProductList({ products = [] }: Props) {
  if (!products.length) {
    return <p>No products found</p>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {products.map((product) => (
        <div key={product.id} className="border p-4 rounded">
          <p>{product.title}</p>
        </div>
      ))}
    </div>
  );
}
