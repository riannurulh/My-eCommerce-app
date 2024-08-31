import { MongoClient, ServerApiVersion } from "mongodb"

const uri = process.env.NEXT_PUBLIC_DATABASE_URL
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

// const dbName = "Line";
export const db = client.db("e-commerce");
