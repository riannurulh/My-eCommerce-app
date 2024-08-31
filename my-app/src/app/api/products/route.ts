// import Product from "@/app/db/models/Product";

// export async function GET(request: Request) {
//   try {
//     const url = new URL(request.url);
//     const page = parseInt(url.searchParams.get("page") || "1", 10);
//     const limit = parseInt(url.searchParams.get("limit") || "9", 10);
//     const query = url.searchParams.get("query") || undefined;

//     const products = await Product.findAll(page, limit, query);

//     return Response.json(products, { status: 200 });
//   } catch (error) {
//     console.error("Error in /api/products:", error);
//     return new Response(
//       JSON.stringify({ message: "Failed to fetch products" }),
//       { status: 500, headers: { "Content-Type": "application/json" } }
//     );
//   }
// }



import Product from "@/app/db/models/Product";
export const dynamic = "force-dynamic"
export async function GET(request: Request) {
  try {
    // Extract query parameters from the request
    const url = new URL(request.url);
    const page = parseInt(url.searchParams.get("page") || "1", 10);
    const limit = parseInt(url.searchParams.get("limit") || "9", 10);
    const query = url.searchParams.get("query") || undefined;

    // Fetch products using the query parameters
    const products = await Product.findAll(page, limit, query);

    return new Response(JSON.stringify(products), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error in /api/products:", error);
    return new Response(
      JSON.stringify({ message: "Failed to fetch products" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
