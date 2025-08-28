const express = require("express");
const axios = require("axios");
const path = require("path");

const app = express();
const PORT = 3000;

// View engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.urlencoded({ extended: true }));

// Ana sayfa
app.get("/", (req, res) => {
  res.render("index");
});

// Form POST → /game/:id yönlendirme
app.post("/search", (req, res) => {
  const appId = req.body.appId;
  res.redirect(`/game/${appId}`);
});

// Game details
app.get("/game/:id", async (req, res) => {
  const appId = req.params.id;

  try {
    const response = await axios.get(
      `https://store.steampowered.com/api/appdetails?appids=${appId}`
    );

    const result = response.data[appId];

    if (!result.success || !result.data) {
      return res.render("game", { game: null });
    }

    res.render("game", { game: result.data });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Steam API isteğinde hata oluştu");
  }
});

app.listen(PORT, () => {
  console.log(`Steam Game API server: http://localhost:${PORT}`);
});
