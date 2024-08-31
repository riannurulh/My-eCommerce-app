import { Wishlist, WishlistType } from "@/app/db/models/Wishlist";
import { log } from "console";
import { cookies } from "next/headers";
import { z, ZodError } from "zod";

export async function GET(request: Request) {
  try {
    console.log('msk get wl api');
    const cekKuki = cookies().get('id')
    console.log(cekKuki,'model');
    
    const userId: any = cekKuki?.value
    if (!userId) {
      return Response.json({message:'Unauthorized'},{status:401})
    }
    // console.log(userId,'api userid');
    
    const wishlist = await Wishlist.findByUserLogin(userId)
    // console.log(wishlist,'wl di apiiii');
    
    return Response.json(wishlist,{status:200})
  } catch (error) {
    console.log(error,'error wl api get');
    return Response.json({message:'Failed to fetch wishlist'},{status:500})
  }
}

export async function POST(request: Request) {
  try {
    
    const body: WishlistType = await request.json();
    console.log(body,'body post wl api');
    // const cekKuki = cookies().get('id')
    // body.UserId = cekKuki?.value
    const result = await Wishlist.AddToWishlist(body);
console.log(result,'aaaaaa');

    return Response.json({ msg: result });
  } catch (error) {
    if (error instanceof ZodError) {
      const formatted = error.issues.map((issue) => ({
        field: issue.path[0],
        message: issue.message.toLowerCase(),
      }));
      return Response.json({ error: formatted }, { status: 400 });
    }

    if (error instanceof Error) {
      return Response.json({ error: error.message }, { status: 401 });
    }

    console.error("Internal Server Error:", error);
    return Response.json({ error: "Internal Server Error" }, { status: 500 });
  }
}

export async function DELETE(request: Request) {
  try {
    const body: any = await request.json();

    console.log(body,'bodydelete');
    
    const result = await Wishlist.DeleteWishList(body._id);

    return Response.json({ msg: "deleted" });
  } catch (error) {
    console.log(error);
  }
}