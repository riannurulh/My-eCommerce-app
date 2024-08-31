import Product from "@/app/db/models/Product";

type secondParams = {
  params: {
    slug: string;
  };
};

export async function GET(request: Request, { params }: secondParams) {
  console.log(request);

  const product = await Product.findBySlug(params.slug);
  return Response.json(product);
}
