"use client";

import { redirect, useRouter } from "next/navigation";
import { cookies } from "next/headers";
import { FormEvent, MouseEventHandler, useEffect, useState } from "react";
import Swal from "sweetalert2";
import { WishlistType } from "../db/models/Wishlist";

export default function AddWishlist(props: any) {
  const router = useRouter();
  console.log(props, "pwl");

  function getCookie(name: string) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop()?.split(';').shift();
  }
  
   const kuki = getCookie('id');
   
   //---------------------
   
   
   //---------------------
   
   async function handleAddWishlist(e: any) {
     e.preventDefault();
     console.log(kuki);
    if (!props.products.kuki&&!kuki) {
      Swal.fire({
        icon: "error",
        title: "You have to login for add to wishlist",
      });
      router.push("/login");
    }
    console.log("masuk");
    Swal.fire({

      icon: 'success',
      title: 'added to wishlist'

    })
    const result = await fetch(`/api/wishlists`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        UserId: props.products.kuki||kuki,
        productId: props.products.product._id,
      }),
    });
    console.log(result, "hawsiiill");
  }
  return (
    <>
    
    {props.frompage?(
       <button
       onClick={handleAddWishlist}
                type="button"
                className="min-w-[200px] px-4 py-2.5 border border-gray-800 bg-transparent hover:bg-gray-50 text-gray-800 text-sm font-semibold rounded-md"
              >
                Add to wishlist
              </button> 
    ):(

    <button
      type="button"
      onClick={handleAddWishlist}
      className="flex items-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-thin text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300"
    >
      Add to wishlist
    </button>
    )}
    </>
  );
}

