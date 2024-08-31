import { z } from "zod";
import { db } from "../mongodb";
import { ObjectId } from "mongodb";

const WishlistSchema = z.object({
  UserId: z.string(),
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
    // console.log(data, "ini data di model wl");

    const newData: any = {
      userId: new ObjectId(data.UserId),
      productId: new ObjectId(data.productId),
      createdAt: new Date(),
      updateAt: new Date(),
    };
    console.log(newData, "nd model addwl");

    await this.col().insertOne(newData);
    return "success add to wishlist";
  }
  static async findByUserLogin(userId: string) {
    try {
      console.log(userId, "model userid");

      const pipeline = [
        { $match: { userId: new ObjectId(userId) } },
        {
          $lookup: {
            from: "Products",
            localField: "productId",
            foreignField: "_id",
            as: "product",
          },
        },
        { $unwind: "$product" },
        {
          $project: {
            _id: 1,
            userId: 1,
            productId: 1,
            createdAt: 1,
            updatedAt: 1,
            "product.name": 1,
            "product.description": 1,
            "product.price": 1,
            "product.thumbnail": 1,
          },
        },
      ];
      const result = await this.col().aggregate(pipeline).toArray();
      // console.log(result, "wl model");

      return result;
    } catch (error) {
      console.error("Error fetching wishlist:", error);
      throw error;
    }
  }
  static async DeleteWishList(data: string) {
    return await this.col().deleteOne({ _id: new ObjectId(String(data)) });
  }
}
