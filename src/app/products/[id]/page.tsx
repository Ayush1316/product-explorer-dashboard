export const dynamic = "force-dynamic";

export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const res = await fetch(
    `https://fakestoreapi.com/products/${id}`,
    {
      cache: "no-store",
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch product");
  }

  const product = await res.json();

  return (
    <div className="max-w-4xl mx-auto p-6">
      <img
        src={product.image}
        alt={product.title}
        className="w-full max-w-md mx-auto"
      />

      <h1 className="text-2xl font-bold mt-4">{product.title}</h1>
      <p className="text-gray-600 mt-2">{product.description}</p>

      <div className="mt-4 flex gap-4 items-center">
        <span className="text-xl font-semibold">${product.price}</span>
        <span className="text-sm text-gray-500">{product.category}</span>
      </div>
    </div>
  );
}
