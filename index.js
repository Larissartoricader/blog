const express = require("express");
const app = express();

// Configura o EJS como motor de template
app.set("view engine", "ejs");

// Rota principal
app.get("/", (req, res) => {
  res.render("index", { title: "Hello, Vercel!" });
});

// Inicia o servidor na porta 3000
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
