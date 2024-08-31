"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ProductType } from "../../db/models/Product";
import Card from "../../components/Card";
import InfiniteScroll from "react-infinite-scroll-component";

export default function Products() {
  const [products, setProducts] = useState<ProductType[]>([]);
  const [page, setPage] = useState<number>(1);
  const [hasMore, setHasMore] = useState<boolean>(true);
  const [searchQuery, setSearchQuery] = useState<string>("");

  const fetchProducts = async (pageNum: number, query: string = "") => {
    try {
      const response = await fetch(
        `/api/products?page=${pageNum}&limit=9&query=${query}`
      );
      if (!response.ok) throw new Error("Failed to fetch products");
      const data: ProductType[] = await response.json();
      if (data.length < 9) {
        setHasMore(false);
      }
      return data;
    } catch (error) {
      console.log(error, "<<<<< Error");
      throw new Error("Failed to fetch products");
    }
  };

  useEffect(() => {
    const loadInitialProducts = async () => {
      const initialProducts = await fetchProducts(1, searchQuery);
      setProducts(initialProducts);
      setPage(1);
      setHasMore(initialProducts.length === 9);
    };
    loadInitialProducts();
  }, [searchQuery]);

  const loadMoreProducts = async () => {
    const nextPage = page + 1;
    const newProducts = await fetchProducts(nextPage, searchQuery);
    setProducts((prevProducts) => {
      const filteredNewProducts = newProducts.filter(
        (product) =>
          !prevProducts.some((prevProduct) => prevProduct.slug === product.slug)
      );
      return [...prevProducts, ...filteredNewProducts];
    });
    setPage(nextPage);
  };

  // const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
  //     setSearchQuery(e.target.value);
  // };
  return (
    <div className="font-[sans-serif] p-4 mx-auto lg:max-w-5xl md:max-w-3xl max-w-lg mb-20">
      <div className="flex justify-between items-center flex-wrap">
        <div className="m-auto w-full max-w-screen-md">
          <form className="relative mx-auto flex w-full max-w-2xl items-center justify-between rounded-md border">
            <svg
              className="absolute left-2 block h-5 w-5 text-gray-400"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              // stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <circle cx="11" cy="11" r="8" className=""></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65" className=""></line>
            </svg>
            <input
              type="name"
              name="search"
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
              }}
              className="h-14 rounded-md py-4 pr-40 pl-12 outline-none focus:ring-2"
              placeholder="City, Address, Zip :"
            />
          </form>
        </div>
        <span className="text-4xl font-extrabold text-gray-800 mb-12">
          Products List
        </span>
        {/* <div> */}
        {/* </div> */}
      </div>
      {/* <div className="grid grid-cols-3 md:grid-cols-2 lg:grid-cols-3 gap-6"> */}
      {/* {products.map((product) => {
          return (
            <Card product={product} key={product._id}/>
            
          );
        })} */}
      <InfiniteScroll
        dataLength={products.length}
        next={loadMoreProducts}
        hasMore={hasMore}
        loader={
          <div className="min-h-60 flex flex-col bg-transparent shadow-sm rounded-xl items-center justify-center">
            <div className="flex flex-auto flex-col justify-center items-center p-4 md:p-5">
              <div className="flex justify-center">
                <div
                  className="animate-spin inline-block size-12 border-[4px] border-current border-t-transparent text-[#3f5bc1] rounded-full"
                  role="status"
                  aria-label="loading"
                >
                  <span className="sr-only">Loading...</span>
                </div>
              </div>
            </div>
          </div>
        }
        endMessage={
          <p className="text-center text-gray-500 p-5 font-montserrat-alternates text-xl font-bold">
            No more products to load.
          </p>
        }
      >
        <div className="grid grid-cols-3 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <Card key={product._id} product={product} />
          ))}
        </div>
      </InfiniteScroll>
      {/* </div> */}
    </div>
  );
}
