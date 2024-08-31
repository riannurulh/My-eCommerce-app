import Image from "next/image";

const products = [
    { id: 1, name: 'Product 1', price: '$29.99' },
    { id: 2, name: 'Product 2', price: '$39.99' },
    { id: 3, name: 'Product 3', price: '$49.99' },
  ];
  
  export default function ProductList() {
    return (
      <section className="container mx-auto py-8">
        <h2 className="text-3xl font-bold mb-6">Featured Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map(product => (
            <div key={product.id} className="bg-white shadow-lg rounded-lg overflow-hidden">
              <Image width={70} height={48} src={`/path-to-your-product-image-${product.id}.jpg`} alt={product.name} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-semibold">{product.name}</h3>
                <p className="text-gray-500">{product.price}</p>
                <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">Add to Cart</button>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }
  