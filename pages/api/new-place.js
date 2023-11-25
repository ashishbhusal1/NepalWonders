import { MongoClient } from "mongodb";

//api/new-meetup
async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;
    const client = await MongoClient.connect(
      "mongodb+srv://ashishbhusal:Nepal@nepal.dvmbtnu.mongodb.net/?retryWrites=true&w=majority"
    );
    const db = client.db();
    const placesCollection = db.collection("places");
    try {
      const result = await placesCollection.insertOne(data);
      console.log(result);
      res.status(201).json({ message: "Place Inserted!" });
    } catch (error) {
      console.error("Error inserting place:", error);
      res.status(500).json({ message: "Internal Server Error" });
    } finally {
      client.close();
    }
  }
}
export default handler;
