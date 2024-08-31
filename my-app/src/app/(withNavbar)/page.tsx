// "use server";

// import Image from "next/image";
// import Link from "next/link";
// import Product, { ProductType } from "../db/models/Product";
// import Card from "../components/Card";
// import Banner from "../components/Banner";
// import { cookies } from "next/headers";
// import { WishlistType } from "../db/models/Wishlist";

// export default async function Home() {
//   // console.log(process.env.BASE_URL,'iniiii');

//   const products: ProductType[] = await dataProducts();
//   // const wl: WishlistType[] = await fetchWishlist();
//   // console.log(wl, "wlwlwl");

//   const kuki = cookies().get('id')?.value;
//   console.log(kuki, "nikuki");
//   return (
//     <>
//       <Banner />
//       <div className="font-[sans-serif] p-4 mx-auto lg:max-w-5xl md:max-w-3xl max-w-lg mb-20">
//         <div className="flex justify-between">
//           <h2 className="text-4xl font-extrabold text-gray-800 mb-12">
//             Featured Products
//           </h2>
//           <h2 className="text-md text-blue-400 mb-12">
//             <Link href={"/products"}>see all</Link>
//           </h2>
//         </div>
//         <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
//           {products.slice(0, 6).map((product) => {
//             return (
//               <Card
//                 product={product}
//                 kuki={kuki}
//                 key={product._id.toString()}
//               />
//             );
//           })}
//         </div>
//       </div>

//       <footer className="bg-gray-800 text-white py-4">
//         <div className="container mx-auto text-center">
//           <p>&copy; {new Date().getFullYear()} BELI. All rights reserved.</p>
//         </div>
//       </footer>
//     </>
//   );
// }

// export async function dataProducts() {
//   try {
//     const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}api/products`);

//     if (!response.ok) {
//       throw new Error(`Network response was not ok: ${response.statusText}`);
//     }

//     const data = (await response.json()) as ProductType[];

//     return data;
//   } catch (error) {
//     console.log(error);

//     return [];
//   }
// }
// // export async function fetchWishlist() {
// //   try {
// //     const response = await fetch(`http://localhost:3000/api/wishlists`, {
// //       method: "GET",
// //       headers: {
// //         "Content-Type": "application/json",
// //       },
// //     });
// //     console.log(response,'coba');
// //     console.log(process.env.BASE_URL,'coba');

// //     if (!response.ok) {
// //       throw new Error("Failed to fetch wishlist");
// //     }

// //     const data = (await response.json()) as WishlistType[];
// //     console.log(data, "wl-----");
// //     return data;
// //   } catch (error) {
// //     console.log(error);

// //     return [];
// //   }
// // }

import Image from "next/image";
import Link from "next/link";
import Product, { ProductType } from "../db/models/Product";
import Card from "../components/Card";
import Banner from "../components/Banner";
import { cookies } from "next/headers";
import { WishlistType } from "../db/models/Wishlist";
// import ShopInfo from "../components/Shopinfo";
import Footer from "../components/Footer";

export default async function Home() {
  // Fetch data directly inside the component
  const products: ProductType[] = await dataProducts();

  const kuki = cookies().get("id")?.value;
  console.log(kuki, "nikuki");

  return (
    <>
      <Banner />
      <div className="font-[sans-serif] p-4 mx-auto lg:max-w-5xl md:max-w-3xl max-w-lg mb-20">
        <div className="flex justify-between">
          <h2 className="text-4xl font-extrabold text-gray-800 mb-12">
            Featured Products
          </h2>
          <h2 className="text-md text-blue-400 mb-12">
            <Link href={"/products"}>see all</Link>
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.slice(0, 6).map((product) => (
            <Card product={product} kuki={kuki} key={product._id.toString()} />
          ))}
        </div>
      </div>
      {/* <ShopInfo /> */}
      <Footer />
    </>
  );
}

async function dataProducts() {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}api/products`
    );

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
