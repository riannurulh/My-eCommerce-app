import { MongoClient, ServerApiVersion } from "mongodb"

const uri = "mongodb+srv://riannurul57:z7pZpD3LXHWl3Vym@rian.jgwik.mongodb.net/?retryWrites=true&w=majority&appName=Rian"
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

// const dbName = "Line";
export const db = client.db("e-commerce");
