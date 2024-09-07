import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.json({
     name: "Rezaul Karim",
     email: "swe.rezaul.karim@gmail.com",
     profession: "Software Engineer"  
  });
});
app.listen(80, () => {
  console.log("Server running...");
});
