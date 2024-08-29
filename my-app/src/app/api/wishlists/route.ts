import { Wishlist, WishlistType } from "@/app/db/models/Wishlist";
import { z, ZodError } from "zod";

export async function POST(request: Request) {
  try {
    const body: WishlistType = await request.json();

    const result = await Wishlist.AddToWishlist(body);

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
