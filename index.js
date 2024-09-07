import express from "express";
import { degree } from "./degree";

const app = express();

app.get("/", (req, res) => {
  res.json({
     name: "Rezaul Karim",
     email: "swe.rezaul.karim@gmail.com",
     profession: "Software Engineer"  
  });
});
app.get("/degree", (req, res) => {
  res.json(degree)
});
app.get("/degree/:id", (req, res) => {
  const id = req.params.id;
  const findDegree = degree.find((_, _id) => _id === id);
  res.json(findDegree);
})
app.listen(80, () => {
  console.log("Server running...");
});
