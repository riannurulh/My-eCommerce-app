import Product from "@/app/db/models/Product"

export async function GET(request:Request) {
    console.log(request);
    
    const products = await Product.findAll()
    return Response.json(products)
}