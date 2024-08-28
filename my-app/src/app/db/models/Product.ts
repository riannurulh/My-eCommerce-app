import { db } from "../mongodb";
import { z } from "zod";

const ProductSchema = z.object({
  name: z.string(),
  slug: z.string(),
  description: z.string(),
  excerpt: z.string(),
  price: z.number(),
  tags: z.array(z.string()),
  thumbnail: z.string(),
  images: z.array(z.string()),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
});

export type ProductType = z.infer<typeof ProductSchema>;

class Product {
  static col() {
    return db.collection<ProductType>("Products");
  }

  static async findAll() {
    const result = await this.col().find().toArray();
    return result;
  }

  static async findBySlug(slug: string) {
    const result = await this.col().findOne({ slug: slug });
    return result;
  }

  //     static async addComment(id, comment) {

  //   comment.createdAt =comment.updatedAt = new Date().toISOString();
  //       let result = await this.col().updateOne(
  //         { _id: new ObjectId(id) },
  //         {
  //           $push: {
  //             comments: comment,
  //           },
  //         }
  //       );

  //       return comment;
  //     }

  // static async addLike(id, like) {
  //   like.createdAt = like.updatedAt = new Date().toISOString();
  //   let result = await this.col().updateOne(
  //     { _id: new ObjectId(id) },
  //     {
  //       $push: {
  //         likes: like,
  //       },
  //     }
  //   );

  //   return like;
  // }

  // static async deleteById(id) {
  //   await this.col().deleteOne({
  //     _id: new ObjectId(id),
  //   });
  // }
}

export default Product;
