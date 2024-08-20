// const express = require("express");
// const app = express();

// app.set("view engine", "ejs");

// // Rota principal
// app.get("/", (req, res) => {
//   res.render("api/index", { title: "Hello, Vercel!" });
// });

// // Inicia o servidor na porta 3000
// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => {
//   console.log(`Servidor rodando na porta ${PORT}`);
// });

import express from "express";
const port = process.env.PORT || 3000;

const app = express();

app.get("/", (req, res) => res.send("Express on Vercel"));

app.listen(port, () => console.log("Server ready on port 3000."));

export default app;
