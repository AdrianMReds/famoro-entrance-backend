import dotenv from "dotenv";

dotenv.config();

const MONGODB_URI = process.env.MONGODB_URI;
const port = process.env.PORT;

const secret = process.env.JWT_SECRET;

export { MONGODB_URI, port, secret };
