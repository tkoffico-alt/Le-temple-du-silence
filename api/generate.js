export default async function handler(req, res) {
  const { prompt } = req.body;
  const apiKey = process.env.GEMINI_API_KEY;
  
  // Utilisation de gemini-pro sur la version v1 : le chemin le plus court
  const url = "https://generativelanguage.googleapis.com/v1/models/gemini-pro:generateContent?key=" + apiKey;

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        contents: [{ parts: [{ text: "Tu es le Sage AYP. Réponds avec poésie à : " + prompt }] }]
      })
    });

    const data = await response.json();
    
    if (data.error) {
      // Si une erreur persiste, le Sage nous en donne la raison précise
      return res.status(200).json({ text: "Note du Sage : " + data.error.message });
    }

    // Le moment de la révélation
    const result = data.candidates[0].content.parts[0].text;
    res.status(200).json({ text: result });

  } catch (error) {
    res.status(200).json({ text: "La connexion vacille... (Erreur : " + error.message + ")" });
  }
}
