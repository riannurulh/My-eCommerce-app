"use client";
import Link from "next/link";
import { dataProducts } from "../page";
import { useEffect, useState } from "react";
import { ProductType } from "../db/models/Product";
import Card from "../components/Card";

export default function Products() {
  const [products, setProducts] = useState<ProductType[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await dataProducts();
        setProducts(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  return (
    <div className="font-[sans-serif] p-4 mx-auto lg:max-w-5xl md:max-w-3xl max-w-lg mb-20">
      <div className="flex justify-between">
        <h2 className="text-4xl font-extrabold text-gray-800 mb-12">
          Products List
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => {
          return (
            <Card product={product} key={product._id}/>
            
          );
        })}
      </div>
    </div>
  );
}
