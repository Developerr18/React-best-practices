// server.js
import express from "express";
import axios from "axios";
import cors from "cors";

const app = express();
app.use(cors());

app.get("/api/search", async (req, res) => {
  try {
    const { query } = req.query;
    const response = await axios.get("https://api.unsplash.com/search/photos", {
      headers: {
        Authorization: "Client-ID EsV5tqz8tcF63AXm8LW4eqIgIq87Jxi7TC_oo5vTwpc",
      },
      params: { query },
    });

    res.json(response.data);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch from Unsplash" });
  }
});

app.listen(3001, () => {
  console.log("Server running on http://localhost:3001");
});
