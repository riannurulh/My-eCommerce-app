import { compare } from "bcryptjs";
import { z, ZodError } from "zod";
import { sign } from "jsonwebtoken";
import { User, UserType } from "@/app/db/models/User";
// import { User, UserType } from "@/db/models/user";

const LoginSchema = z.object({
  email: z.string().email(),
  password: z.string(),
});

export async function POST(request: Request) {
  try {
    const body = await request.json() as UserType;
    LoginSchema.parse(body);

    const user = await User.findOne({ email: body.email });
    if (!user) {
      throw new Error("Invalid email/password"); 
    }

    const isValid = await compare(body.password, user.password);
    if (!isValid) {
      throw new Error("Invalid email/password");
    }

    const { password, ...safeUser } = user; 
    const accessToken = sign(safeUser, process.env.NEXT_PUBLIC_JWT_SECRET); 
    // const accessToken = sign(safeUser, process.env.JWT_SECRET!); 

    // Optional: Set access token in a cookie
    // cookies().set("Authorization", `Bearer ${accessToken}`);

    return Response.json({ accessToken, id: user._id }); 
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