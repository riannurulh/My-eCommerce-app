import { z } from "zod";
import { db } from "../mongodb";

const WishlistSchema = z.object({
  userId: z.string(),
  productId: z.string(),
  createdAt: z.date().optional(),
  updateAt: z.date().optional(),
});

export type WishlistType = z.infer<typeof WishlistSchema>;

export class Wishlist {
  static col() {
    return db.collection<WishlistType>("Wishlist");
  }

  static async AddToWishlist(data: WishlistType) {
    data.createdAt = new Date();
    data.updateAt = new Date();

    await this.col().insertOne(data);
    return "success add to wishlist";
  }
}
