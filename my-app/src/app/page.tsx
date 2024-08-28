import Image from "next/image";
import Link from "next/link";
import Product, { ProductType } from "./db/models/Product";

export default async function Home() {
  const products = await dataProducts();

  return (
    <>
      {/* <div className="flex my-20 flex-col items-center justify-center bg-gradient-to-tr from-orange-500 via-orange-400 to-yellow-200 font-sans min-h-[400px] max-w-6xl px-6 py-12 mx-auto rounded-md overflow-hidden relative shadow-xl">
        <div className="text-center relative px-6 py-10 bg-white/70 rounded-[30px] w-full max-w-[550px] shadow-lg">
          <h6 className="text-gray-900 text-6xl max-sm:text-4xl font-extrabold leading-tight tracking-tight">
            Black
          </h6>
          <h2 className="text-gray-800 text-8xl max-sm:text-5xl font-extrabold leading-tight tracking-tight">
            Friday
          </h2>
          <div className="mt-6">
            <p className="text-lg text-gray-700">
              Discover amazing discounts and deals. Offers available for a
              limited time.
            </p>
          </div>
          <button
            type="button"
            className="bg-gradient-to-r from-gray-700 to-gray-900 hover:from-gray-600 hover:to-gray-800 text-white tracking-wide font-semibold text-sm py-4 px-10 rounded-full mt-8 transition-transform transform hover:scale-105 shadow-lg"
          >
            Get Started
          </button>
        </div>

        <div className="absolute -top-6 -left-6 w-24 h-24 rounded-full bg-blue-50 opacity-40 shadow-2xl"></div>
        <div className="absolute -bottom-6 -left-6 w-44 h-44 rounded-full bg-blue-50 opacity-40 shadow-2xl"></div>
        <div className="absolute -top-6 -right-6 w-24 h-24 rounded-full bg-blue-50 opacity-40 shadow-2xl"></div>
        <div className="absolute -bottom-6 -right-6 w-44 h-44 rounded-full bg-blue-50 opacity-40 shadow-2xl"></div>
      </div> */}
      <div className="relative mx-auto px-4 pt-16 sm:max-w-xl md:max-w-full md:px-8 lg:py-32 xl:px-20">
        <div className="mx-auto max-w-xl lg:max-w-screen-xl">
          <div className="mb-16 text-center lg:mb-0 lg:max-w-lg lg:text-left">
            <div className="mb-6 max-w-xl">
              <div>
                <p className="bg-teal-accent-400 mb-4 inline-block rounded-full bg-blue-200 px-3 py-px text-sm font-semibold tracking-wider text-green-900">
                  This is Beli
                </p>
              </div>
              <h2 className="mb-6 max-w-lg font-sans text-3xl font-bold tracking-tight text-slate-700 sm:text-5xl sm:leading-snug">
                The #1 Marketplace <br />
                in
                <span className="inline-block text-blue-500"> Wakanda</span>
              </h2>
              <p className="text-base text-gray-700 md:text-lg">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos,
                consequuntur quaerat! Optio.
              </p>
            </div>
            <div className="flex flex-col items-center justify-center space-y-2 sm:flex-row sm:space-y-0 sm:space-x-2 lg:justify-start">
              <Link
                href="/products"
                className="inline-flex h-12 w-full items-center justify-center rounded-full bg-blue-500 px-6 font-medium tracking-wide text-white shadow-md outline-none transition duration-200 hover:bg-blue-400 focus:ring sm:w-auto"
              >
                {" "}
                Start shopping{" "}
              </Link>
            </div>

            <div className="mt-6 flex justify-center -space-x-4 lg:justify-start">
              {/* <img
                className="h-12 w-12 rounded-full ring ring-white"
                src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              />
              <img
                className="h-12 w-12 rounded-full ring ring-white"
                src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              />
              <img
                className="h-12 w-12 rounded-full ring ring-white"
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
              />
              <div className="">
                <span className="pl-8 font-semibold">Customer Reviews</span>
                <div className="flex w-auto items-center justify-center space-x-1 pl-8">
                  <svg
                    className="h-auto w-5 fill-current text-yellow-500"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 576 512"
                  >
                    <path d="M381.2 150.3L524.9 171.5C536.8 173.2 546.8 181.6 550.6 193.1C554.4 204.7 551.3 217.3 542.7 225.9L438.5 328.1L463.1 474.7C465.1 486.7 460.2 498.9 450.2 506C440.3 513.1 427.2 514 416.5 508.3L288.1 439.8L159.8 508.3C149 514 135.9 513.1 126 506C116.1 498.9 111.1 486.7 113.2 474.7L137.8 328.1L33.58 225.9C24.97 217.3 21.91 204.7 25.69 193.1C29.46 181.6 39.43 173.2 51.42 171.5L195 150.3L259.4 17.97C264.7 6.954 275.9-.0391 288.1-.0391C300.4-.0391 311.6 6.954 316.9 17.97L381.2 150.3z" />
                  </svg>
                  <span className="text-sm font-medium text-slate-400">
                    {" "}
                    4.9 •{" "}
                    <a href="#" className="text-sm font-normal underline">
                      129 reviews
                    </a>{" "}
                  </span>
                </div>
              </div> */}
            </div>
          </div>
          <div className="hidden h-full justify-center overflow-hidden lg:absolute lg:bottom-0 lg:right-0 lg:flex lg:w-1/2 lg:items-end lg:justify-start">
            <svg
              className="h-full w-full"
              viewBox="0 0 200 200"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <pattern id="img1" x="0" y="0" width="1" height="1">
                  <image
                    x="0"
                    y="0"
                    width="100%"
                    height="100%"
                    preserveAspectRatio="xMaxYMax slice"
                    href="https://images.unsplash.com/photo-1575218823251-f9d243b6f720?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                  />
                </pattern>
              </defs>

              <path
                fill="url(#img1)"
                d="M40,-62.6C52.2,-54.5,62.5,-43.9,66.9,-31.4C71.3,-18.9,69.6,-4.6,65.9,8.3C62.2,21.1,56.4,32.5,49.2,45.2C42.1,57.9,33.7,72.1,22.2,75.3C10.7,78.5,-3.9,70.7,-14.8,62.1C-25.7,53.5,-32.8,44.1,-44.9,35.8C-57,27.5,-74,20.3,-82.1,7.7C-90.3,-4.8,-89.5,-22.7,-80.8,-34.8C-72,-46.9,-55.2,-53.3,-40.4,-60.2C-25.6,-67,-12.8,-74.3,0.6,-75.2C13.9,-76.1,27.9,-70.6,40,-62.6Z"
                transform="translate(100 100)"
              />
            </svg>
          </div>
        </div>
      </div>

      <div className="font-[sans-serif] p-4 mx-auto lg:max-w-5xl md:max-w-3xl max-w-lg mb-20">
        <div className="flex justify-between">
          <h2 className="text-4xl font-extrabold text-gray-800 mb-12">
            Featured Products
          </h2>
          <h2 className="text-md text-blue-400 mb-12">
            <Link href={"/products"}>see all</Link>
          </h2>
        </div>
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
          {products.slice(0, 6).map((product) => {
            return (
              <Link
                key={product._id.toString()}
                href={`/products/${product.slug}`}
                className="relative m-5 w-full max-w-xs overflow-hidden rounded-lg bg-white shadow-md"
              >
                {/* <a href="#"> */}
                <img
                  className="w-full h-auto rounded-t-lg object-cover"
                  src={product.thumbnail}
                  alt="product image"
                />
                {/* </a> */}
                <span className="absolute top-0 left-0 w-28 translate-y-4 -translate-x-6 -rotate-45 bg-black text-center text-sm text-white">
                  Sale
                </span>
                <div className="mt-4 px-5 pb-5">
                  {/* <a href="#"> */}
                  <h5 className="text-xl font-semibold tracking-tight text-slate-900">
                    {product.name}
                  </h5>
                  {/* </a> */}
                  <div className="mt-2.5 mb-5 flex items-center">
                    <span className="mr-2 rounded bg-yellow-200 px-2.5 py-0.5 text-xs font-semibold">
                      5.0
                    </span>
                    <svg
                      aria-hidden="true"
                      className="h-5 w-5 text-yellow-300"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                    <svg
                      aria-hidden="true"
                      className="h-5 w-5 text-yellow-300"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                    <svg
                      aria-hidden="true"
                      className="h-5 w-5 text-yellow-300"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                    <svg
                      aria-hidden="true"
                      className="h-5 w-5 text-yellow-300"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                    <svg
                      aria-hidden="true"
                      className="h-5 w-5 text-yellow-300"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-3md font-bold text-slate-900">
                        {new Intl.NumberFormat("id-ID", {
                          style: "currency",
                          currency: "IDR",
                        }).format(product.price)}
                      </span>
                      <div className="text-sm text-slate-900 line-through">
                        {new Intl.NumberFormat("id-ID", {
                          style: "currency",
                          currency: "IDR",
                        }).format(product.price * 1.2)}
                      </div>
                    </div>
                    <button
                      // onClick={}
                      className="flex items-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-thin text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300"
                    >
                      Add to wishlist
                    </button>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>

      <footer className="bg-gray-800 text-white py-4">
        <div className="container mx-auto text-center">
          <p>
            &copy; {new Date().getFullYear()} MyEcommerce. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
}

export async function dataProducts() {
  try {
    const response = await fetch("http://localhost:3000/api/products");

    if (!response.ok) {
      throw new Error(`Network response was not ok: ${response.statusText}`);
    }

    const data = (await response.json()) as ProductType[];

    return data;
  } catch (error) {
    console.log(error);

    return [];
  }
}
