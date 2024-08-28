import Link from "next/link";
import { dataProducts } from "../page";

export default async function Products() {
    const products = await dataProducts()
    return(
        <div className="font-[sans-serif] p-4 mx-auto lg:max-w-5xl md:max-w-3xl max-w-lg mb-20">
        <div className="flex justify-between">
          <h2 className="text-4xl font-extrabold text-gray-800 mb-12">
            Products List
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => {
            return (
                <Link href={`/products/${product.slug}`}>

              <div className="bg-white border overflow-hidden rounded-2xl cursor-pointer hover:border-blue-600 transition-all relative">
                <div className="bg-gray-50 p-4 h-[250px] overflow-hidden mx-auto aspect-w-16 aspect-h-8 rounded-b-2xl">
                  <img
                    src={product.images[0]}
                    alt="sunglass1"
                    className="h-full w-full object-contain"
                  />
                </div>

                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-800">
                    {product.name}
                  </h3>
                  <div className="flex items-center justify-between mt-6">
                    <div className="w-10 h-10  bg-gray-100 flex items-center justify-center rounded-full">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18px"
                        className="fill-gray-800 inline-block"
                        viewBox="0 0 64 64"
                      >
                        <path
                          d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
                          data-original="#000000"
                        ></path>
                      </svg>
                    </div>
                    <h4 className="text-lg text-gray-800 font-bold">
                      {new Intl.NumberFormat("id-ID", {
                        style: "currency",
                        currency: "IDR",
                      }).format(product.price)}
                    </h4>
                  </div>
                </div>
              </div>
                </Link>
            );
          })}
        </div>
      </div>
    )
}