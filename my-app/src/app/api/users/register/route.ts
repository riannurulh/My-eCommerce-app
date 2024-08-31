// import { User, UserType } from "@/app/db/models/User";
// import { z, ZodError } from "zod";

// const RegisterSchema = z.object({
//   name: z.string(),
//   username: z.string(),
//   email: z.string().email(),
//   password: z.string(),
// });

// export async function POST(request: Request) {
//   try {
//     const body = (await request.json()) as UserType;
//     RegisterSchema.parse(body);
//     console.log(body, "diregis");

//     const checkUser = await User.findOne({ email: body.email });
//     console.log(checkUser, "diregis2");

//     if (checkUser) {
//       console.log("masuk error");

//       throw new Error("Email must be unique");
//       // return Response.json({ error: "Email must be unique" }, { status: 400 });
//     }

//     await User.create(body);

//     return Response.json({ message: "Register successfully" }, { status: 201 });
//   } catch (error) {
//     if (error instanceof ZodError) {
//       const formattedErrors = error.issues.map((issue) => ({
//         field: issue.path[0],
//         message: issue.message.toLowerCase(),
//       }));

//       return {
//         error: formattedErrors,
//         status: 400,
//       };
//     }

//     if (error instanceof Error) {
//       return {
//         error: error.message,
//         status: 500,
//       };
//     }

//     console.error("Internal Server Error:", error);
//     return {
//       error: "Internal Server Error",
//       status: 500,
//     };
//   }
// }

import { User, UserType } from "@/app/db/models/User";
import { z, ZodError } from "zod";

const RegisterSchema = z.object({
  name: z.string(),
  username: z.string(),
  email: z.string().email(),
  password: z.string(),
});

export async function POST(request: Request): Promise<Response> {
  try {
    const body = await request.json() as UserType;
    RegisterSchema.parse(body);
    console.log(body, 'diregis');
    
    const checkUser = await User.findOne({ email: body.email });
    console.log(checkUser, 'diregis2');
    
    if (checkUser) {
      console.log('masuk error');
      // Return a Response with error message
      return new Response(
        JSON.stringify({ error: "Email must be unique" }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    await User.create(body);

    // Return a successful Response
    return new Response(
      JSON.stringify({ message: "Register successfully" }),
      { status: 201, headers: { 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    if (error instanceof ZodError) {
      const formattedErrors = error.issues.map((issue) => ({
        field: issue.path[0],
        message: issue.message.toLowerCase(),
      }));

      // Return a Response with validation errors
      return new Response(
        JSON.stringify({ error: formattedErrors }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    if (error instanceof Error) {
      // Return a Response with general error message
      return new Response(
        JSON.stringify({ error: error.message }),
        { status: 500, headers: { 'Content-Type': 'application/json' } }
      );
    }

    console.error("Internal Server Error:", error);
    // Return a generic internal server error Response
    return new Response(
      JSON.stringify({ error: "Internal Server Error" }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}
