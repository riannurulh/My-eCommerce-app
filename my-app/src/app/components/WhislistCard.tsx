'use client'

import { revalidatePath } from "next/cache";
import { useRouter } from "next/navigation";
// import { useRouter } from "next/router";
import { useState } from "react";

export default function WLCard(props: any) {
    console.log(props,'-------------------cwl');
    const [list, setList] = useState(props)
    console.log(list,'lilis');
    const router = useRouter()
    const handleDelWishlist = async (_id: string) => {
        const form = {
          _id,
        };
        
    
        const response = await fetch(`/api/wishlists`, {
          method: "DELETE",
          body: JSON.stringify(form),
          headers: {
            "Content-Type": "application/json",
          },
        });
        props.fetch()
        // revalidatePath('/wishlists')
        router.push('/wishlists')
        return response.json();
      };
    return( <div className="grid grid-cols-3 items-center gap-4">
                <div className="col-span-2 flex items-center gap-4">
                  <div className="w-28 h-28 max-sm:w-24 max-sm:h-24  bg-gray-100 p-2 rounded-md">
                    <img
                      src={list.props.product.thumbnail}
                      className="w-full h-full object-contain"
                    />
                  </div>

                  <div className="flex flex-col ">
                    <h3 className="ml-20 text-base max-sm:text-sm font-bold text-gray-800">
                      {list.props.product.name}
                    </h3>
                  </div>
                </div>

                <div className="ml-auto">
                  <h4 className="text-lg font-bold text-gray-800">
                    {new Intl.NumberFormat("id-ID", {
                      style: "currency",
                      currency: "IDR",
                    }).format(list.props.product.price)}
                  </h4>

                  <button
                    onClick={() => {
                      handleDelWishlist(list.props._id);
                    }}
                    type="button"
                    className="mt-6 flex items-center px-3 py-1.5 border border-gray-300 text-gray-800 text-xs outline-none bg-transparent rounded-md"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-4 fill-current inline"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M19 7a1 1 0 0 0-1 1v11.191A1.92 1.92 0 0 1 15.99 21H8.01A1.92 1.92 0 0 1 6 19.191V8a1 1 0 0 0-2 0v11.191A3.918 3.918 0 0 0 8.01 23h7.98A3.918 3.918 0 0 0 20 19.191V8a1 1 0 0 0-1-1Zm1-3h-4V2a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v2H4a1 1 0 0 0 0 2h16a1 1 0 0 0 0-2ZM10 4V3h4v1Z"
                        data-original="#000000"
                      ></path>
                      <path
                        d="M11 17v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 2 0Zm4 0v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 2 0Z"
                        data-original="#000000"
                      ></path>
                    </svg>
                    REMOVE
                  </button>
                </div>
              </div> )
    
}
