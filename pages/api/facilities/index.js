import connectDB from "@/db";
import Hotel from "@/models/hotelModel";

export default async function handler(req, res) {
  if (req.method === "GET") {
    connectDB();
    const facilities = await Hotel.find({}).distinct("facilities.name");
    res.status(200).json({ msg: "Ok!", facilities });
  }
}