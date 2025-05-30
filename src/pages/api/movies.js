import axios from "axios";

export default async function handler(req, res) {
  const apiKey = process.env.TMDB_API_KEY;
  const api = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`;

  try {
    const response = await axios.get(api);
    res.status(200).json(response.data);
  } catch (error) {
    console.error("TMDB fetch error:", error.message);
    res.status(500).json({ error: "Failed to fetch data from TMDB" });
  }
}
