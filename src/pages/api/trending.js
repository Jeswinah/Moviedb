import axios from "axios";

export default async function handler(req, res) {
  const apiKey = process.env.TMDB_API_KEY;

  if (!apiKey) {
    return res.status(500).json({ error: "TMDB API key is missing" });
  }

  const url = `https://api.themoviedb.org/3/trending/movie/day?api_key=${apiKey}`;

  try {
    const response = await axios.get(url);
    res.status(200).json(response.data);
  } catch (error) {
    console.error("Trending API error:", error.message);
    res.status(500).json({ error: "Failed to fetch trending movies" });
  }
}
