const express = require("express");
const productsRouter = require("./routes/products.route");
const { dbConnect } = require("./config/dbConnect");

const app = express();

app.use(express.json())

app.get("/", (req, res) => {
  res.status(200).send("Welcome to my server");
});
app.use("/products", productsRouter);

async function start() {
  await dbConnect();

  app.listen(4000, () => {
    console.log("🚀 Server running on http://localhost:4000");
  });
}

start();
