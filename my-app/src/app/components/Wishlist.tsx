"use client";

import { cookies } from "next/headers";
import { FormEvent, useEffect, useState } from "react";

export default function AddWishlist(props: any) {
    console.log(props,'pwl');
    
  async function handleAddWishlist() {
    console.log("masuk");
    const result = await fetch("http://localhost:3000/api/wishlists", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        UserId: props.products.kuki,
        productId: props.products.product._id,
      }),
    });
    console.log(result);
  }

  return (
    <button
      type="button"
      onClick={handleAddWishlist}
      className="flex items-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-thin text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300"
    >
      Add to wishlist
    </button>
  );
}
