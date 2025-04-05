import axios from "axios";

export default async function handler(req, res) {
  const { query } = req.query; 
  const apiKey = process.env.TMDB_API_KEY;

  if (!query) {
    return res.status(400).json({ error: "Missing search query" });
  }

  try {
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${encodeURIComponent(query)}`;
    const response = await axios.get(url);
    res.status(200).json(response.data);
  } catch (error) {
    console.error("TMDB search error:", error.message);
    res.status(500).json({ error: "Failed to fetch search results" });
  }
}
