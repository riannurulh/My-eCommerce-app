import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import Product, { ProductType } from "./db/models/Product";

export default async function Home() {
  const products = await dataProducts();
  // console.log(data,"di atas");

  // const products = [
  //   {
  //     id: 1,
  //     name: "Product 1",
  //     price: "$29.99",
  //     image: "/path-to-your-image.jpg",
  //     description: "A stylish jacket perfect for any occasion.",
  //   },
  //   {
  //     id: 2,
  //     name: "Product 2",
  //     price: "$39.99",
  //     image: "/path-to-your-image.jpg",
  //     description: "A stylish jacket perfect for any occasion.",
  //   },
  //   {
  //     id: 3,
  //     name: "Product 3",
  //     price: "$49.99",
  //     image: "/path-to-your-image.jpg",
  //     description: "A stylish jacket perfect for any occasion.",
  //   },
  // ];
  // console.log(products);

  return (
    <>
      {/* <header className="bg-gray-800 text-white">
        <div className="container mx-auto flex justify-between items-center p-4">
          <Link href="/" className="text-2xl font-bold">
            MyEcommerce
          </Link>
          <nav>
            <ul className="flex space-x-4">
              <li>
                <Link href="/shop">Shop</Link>
              </li>
              <li>
                <Link href="/about">About</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </nav>
        </div>
      </header> */}
      <header className="flex border-b py-4 px-4 sm:px-10 bg-white font-sans min-h-[70px] tracking-wide relative z-50">
        <div className="flex flex-wrap items-center gap-4 w-full">
          <a href="javascript:void(0)">
            <img
              src="https://readymadeui.com/readymadeui.svg"
              alt="logo"
              className="w-36"
            />
          </a>

          <div
            id="collapseMenu"
            className="lg:!flex lg:flex-auto lg:ml-12 max-lg:hidden max-lg:before:fixed max-lg:before:bg-black max-lg:before:opacity-50 max-lg:before:inset-0 max-lg:before:z-50"
          >
            <button
              id="toggleClose"
              className="lg:hidden fixed top-2 right-4 z-[100] rounded-full bg-white p-3"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 fill-black"
                viewBox="0 0 320.591 320.591"
              >
                <path
                  d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z"
                  data-original="#000000"
                ></path>
                <path
                  d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z"
                  data-original="#000000"
                ></path>
              </svg>
            </button>

            <div className="lg:!flex lg:flex-auto max-lg:fixed max-lg:bg-white max-lg:w-1/2 max-lg:min-w-[300px] max-lg:top-0 max-lg:left-0 max-lg:p-6 max-lg:h-full max-lg:shadow-md max-lg:overflow-auto z-50">
              <ul className="lg:flex lg:gap-x-8 max-lg:space-y-2">
                <li className="mb-6 hidden max-lg:block">
                  <a href="javascript:void(0)">
                    <img
                      src="https://readymadeui.com/readymadeui.svg"
                      alt="logo"
                      className="w-36"
                    />
                  </a>
                </li>
                <li className="max-lg:border-b max-lg:py-3">
                  <a
                    href="javascript:void(0)"
                    className="hover:text-[#007bff] text-[#007bff] block font-bold text-[15px]"
                  >
                    Home
                  </a>
                </li>
                <li className="max-lg:border-b max-lg:py-3">
                  <a
                    href="javascript:void(0)"
                    className="hover:text-[#007bff] text-gray-600 block font-bold text-[15px]"
                  >
                    Shop
                  </a>
                </li>
                <li className="max-lg:border-b max-lg:py-3">
                  <a
                    href="javascript:void(0)"
                    className="hover:text-[#007bff] text-gray-600 block font-bold text-[15px]"
                  >
                    Sale
                  </a>
                </li>
                <li className="max-lg:border-b max-lg:py-3">
                  <a
                    href="javascript:void(0)"
                    className="hover:text-[#007bff] text-gray-600 block font-bold text-[15px]"
                  >
                    Manage
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* <div className="border-l border-[#333] h-6 max-lg:hidden"></div> */}

          <div className="flex items-center ml-auto space-x-6">
            <a
              href="javascript:void(0)"
              className="hover:text-[#007bff] text-gray-600 block font-bold text-[15px]"
            >
              Sign up
            </a>
            <button className="px-4 py-2.5 text-sm rounded font-bold text-white border-2 border-[#1d294f] bg-[#1d294f] transition-all ease-in-out duration-300 hover:bg-transparent hover:text-[#1d294f]">
              Sign in
            </button>

            <button id="toggleOpen" className="lg:hidden">
              <svg
                className="w-7 h-7"
                fill="#000"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </header>

      <div className="flex my-20 flex-col items-center justify-center bg-gradient-to-tr from-orange-500 via-orange-400 to-yellow-200 font-sans min-h-[400px] max-w-6xl px-6 py-12 mx-auto rounded-md overflow-hidden relative shadow-xl">
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
      </div>

      <div className="font-[sans-serif] p-4 mx-auto lg:max-w-5xl md:max-w-3xl max-w-lg mb-20">
        <div className="flex justify-between">
          <h2 className="text-4xl font-extrabold text-gray-800 mb-12">
            Featured Products
          </h2>
          <h2 className="text-md text-blue-400 mb-12"><Link href={'/products'}>see all</Link></h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.slice(0, 6).map((product) => {
            return (
              <div className="bg-white border overflow-hidden rounded-2xl cursor-pointer hover:border-blue-600 transition-all relative">
                <div className="bg-gray-50 p-4 h-[250px] overflow-hidden mx-auto aspect-w-16 aspect-h-8 rounded-b-2xl">
                  <img
                    src={product.thumbnail}
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

    const data = await response.json() as ProductType[];

    return data;
  } catch (error) {
    console.log(error);

    return [];
  }
}
