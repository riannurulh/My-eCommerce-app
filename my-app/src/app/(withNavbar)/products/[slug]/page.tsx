import { ResolvingMetadata } from "next";

export async function generateMetadata(props: any,parent: ResolvingMetadata) {
  // console.log(params,'param meta');
  console.log(parent, 'meta');
  
  
  const response = await fetch(
    `${process.env.BASE_URL}api/products/${props.params.slug}`
  );

  const data = await response.json();
  // console.log(data,'dalam meta');
  
  const parentTitle = (await parent).title?.absolute
  return {
      title: parentTitle + " - " + data?.slug,
      openGraph: {
          images: [data?.thumbnail]
      }
  }
}

export default async function ProductDetail({ params }:any) {
  console.log(params);
  const response = await fetch(
    `${process.env.BASE_URL}api/products/${params.slug}`
  );

  const product = await response.json();
  // console.log(product, "<<<inih");

  return (
    <div className="font-sans">
      <div className="p-4 lg:max-w-6xl max-w-2xl max-lg:mx-auto">
        <div className="grid items-start grid-cols-1 lg:grid-cols-2 gap-8 max-lg:gap-16">
          <div className="w-full lg:sticky top-0 text-center">
            <div className="lg:h-[560px]">
              <img
                src={product.thumbnail}
                alt="Product"
                className="lg:w-11/12 w-full h-full rounded-md object-cover object-top"
              />
            </div>

            <div className="flex flex-wrap gap-4 justify-center mx-auto mt-4">
              <img
                src={product.images[0]}
                alt="Product1"
                className="w-16 cursor-pointer rounded-md"
              />
              <img
                src={product.images[1]}
                alt="Product2"
                className="w-16 cursor-pointer rounded-md"
              />
              <img
                src={product.images[2]}
                alt="Product3"
                className="w-16 cursor-pointer rounded-md"
              />
              <img
                src={product.images[3]}
                alt="Product4"
                className="w-16 cursor-pointer rounded-md"
              />
            </div>
          </div>

          <div>
            <div className="flex flex-wrap items-start gap-4">
              <div>
                <h2 className="text-2xl font-bold text-gray-800">
                  {product.name}
                </h2>
                <p className="text-sm text-gray-500 mt-2">
                  {product.description}
                </p>
              </div>
            </div>

            <hr className="my-8" />

            <div className="flex flex-wrap gap-4 items-start">
              <div>
                <p className="text-gray-800 text-4xl font-bold">
                  {new Intl.NumberFormat("id-ID", {
                    style: "currency",
                    currency: "IDR",
                  }).format(product.price)}
                </p>
                <p className="text-gray-500 line-through text-sm mt-2">
                  
                    {new Intl.NumberFormat("id-ID", {
                      style: "currency",
                      currency: "IDR",
                    }).format(product.price * 1.2)}
                 {" "}
                  <span className="text-sm ml-1">Tax included</span>
                </p>
              </div>

              <div className="flex flex-wrap gap-4 ml-auto">
                <button
                  type="button"
                  className="px-2.5 py-1.5 bg-pink-100 text-xs text-pink-600 rounded-md flex items-center"
                >
                  <svg
                    className="w-3 mr-1"
                    fill="currentColor"
                    viewBox="0 0 14 13"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                  </svg>
                  4.8
                </button>
              </div>
            </div>

            <hr className="my-8" />

            <div>
              <h3 className="text-xl font-bold text-gray-800">Tags</h3>
              <div className="flex flex-wrap gap-4 mt-4">
                <button
                  type="button"
                  className="p-5 py-2 border hover:border-gray-800 font-semibold text-sm rounded-md flex items-center justify-center shrink-0"
                >
                  {product.tags[0]}
                </button>
                <button
                  type="button"
                  className="p-5 py-2 border hover:border-gray-800 font-semibold text-sm rounded-md flex items-center justify-center shrink-0"
                >
                  {product.tags[1]}
                </button>
                <button
                  type="button"
                  className="p-5 py-2 border hover:border-gray-800 font-semibold text-sm rounded-md flex items-center justify-center shrink-0"
                >
                  {product.tags[2]}
                </button>
              </div>
            </div>

            <hr className="my-8" />

            <div className="flex flex-wrap gap-4">
              <button
                type="button"
                className="min-w-[200px] px-4 py-3 bg-gray-800 hover:bg-gray-900 text-white text-sm font-semibold rounded-md"
              >
                Buy now
              </button>
              <button
                type="button"
                className="min-w-[200px] px-4 py-2.5 border border-gray-800 bg-transparent hover:bg-gray-50 text-gray-800 text-sm font-semibold rounded-md"
              >
                Add to wishlist
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// export async function dataProducts() {
//     try {

//       if (!response.ok) {
//         throw new Error(`Network response was not ok: ${response.statusText}`);
//       }

//       const data = await response.json();

//       return data;
//     } catch (error) {
//       console.log(error);

//       return [];
//     }
//   }
