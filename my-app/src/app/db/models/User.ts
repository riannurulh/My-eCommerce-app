import { ObjectId, WithId } from "mongodb";
import { db } from "../mongodb";
import { z, ZodError } from "zod";
import { hash } from "bcryptjs";

const UserSchema = z.object({
  name: z.string().optional(),
  username: z.string().refine(
    async (username) => {
      const existingUser = await db.collection("Users").findOne({ username });
      return !existingUser;
    },
    { message: "Username must be unique" }
  ),
  email: z
    .string()
    .email()
    .refine(
      async (email) => {
        const existingUser = await db.collection("Users").findOne({ email });
        return !existingUser;
      },
      { message: "Email must be unique" }
    ),
  password: z.string().min(5),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
});

export type UserType = WithId<z.infer<typeof UserSchema>>;

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

  static async create(newUser: UserType) {
    await UserSchema.parseAsync(newUser)
    newUser.password = await hash(newUser.password, 12)
    newUser.createdAt = newUser.updatedAt = new Date()
    const result = await this.collection().insertOne(newUser)
    const { password, ...userWithoutPassword } = newUser
    return {
        ...userWithoutPassword,
        id: result.insertedId
    }
}
}
