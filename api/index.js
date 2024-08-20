import express from "express";
const port = process.env.PORT || 3000;

const app = express();

app.get("/", (req, res) => res.send("Express on Vercel"));

app.listen(port, () => console.log("Server ready on port 3000."));

export default app;
