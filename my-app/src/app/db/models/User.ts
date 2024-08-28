import { ObjectId } from "mongodb";
import { db } from "../mongodb";
import { z } from "zod";
import { hash } from "bcryptjs";

const UserSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
  age: z.number().optional(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(), // Corrected typo here
});

export type UserType = z.infer<typeof UserSchema>;

export class User {
  private static collection() {
    return db.collection<UserType>("users");
  }

  static async findAll(): Promise<UserType[]> {
    return this.collection().find().toArray();
  }

  static async findByPk(id: string): Promise<UserType | null> {
    return this.collection().findOne({ _id: new ObjectId(id) }); 
  }

  static async findOne(filter: Partial<UserType>): Promise<UserType | null> {
    return this.collection().findOne(filter);
  }

  static async create(newUser: UserType): Promise<UserType> {
    newUser.password = await hash(newUser.password, 12);
    newUser.createdAt = newUser.updatedAt = new Date();

    const result = await this.collection().insertOne(newUser);

    const { password, ...userWithoutPassword } = newUser; 

    return {
        ...userWithoutPassword,
        _id: result.insertedId,
    };
  }
}