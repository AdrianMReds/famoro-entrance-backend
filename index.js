import { connectDB } from "./db.js";
import app from "./app.js";
connectDB();
import { port } from "./config/environment";

const start = async () => {
  try {
    await app.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
