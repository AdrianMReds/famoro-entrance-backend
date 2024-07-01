import { connectDB } from "./db.js";
import app from "./app.js";
connectDB();
import { port } from "./config/environment/index.js";

try {
  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
} catch (error) {
  console.log(error);
}
