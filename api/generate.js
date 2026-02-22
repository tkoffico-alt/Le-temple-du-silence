export default async function handler(req, res) {
  const { prompt } = req.body;
  const apiKey = process.env.GEMINI_API_KEY;
  
  // Utilisation du modèle gemini-pro sur la route v1beta : la racine immuable
  const url = "https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=" + apiKey;

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
      // Si l'erreur persiste, le Sage nous révélera le code précis (403, 404, etc.)
      return res.status(200).json({ text: "Note du Sage : " + data.error.message });
    }

    if (data.candidates && data.candidates[0].content) {
      const result = data.candidates[0].content.parts[0].text;
      res.status(200).json({ text: result });
    } else {
      res.status(200).json({ text: "Le Sage médite... La vibration n'est pas encore manifestée." });
    }

  } catch (error) {
    res.status(200).json({ text: "La connexion vacille... (Erreur : " + error.message + ")" });
  }
}
