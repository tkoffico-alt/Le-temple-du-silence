export default async function handler(req, res) {
  const { prompt } = req.body;
  const apiKey = process.env.GEMINI_API_KEY;
  
  // Le sésame de 2026 : la route v1beta avec le modèle flash simple
  const url = "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=" + apiKey;

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        contents: [{ parts: [{ text: "Tu es le Sage AYP. Réponds avec poésie et brièveté à : " + prompt }] }]
      })
    });

    const data = await response.json();
    
    if (data.error) {
      // Si l'erreur persiste, le Sage nous donnera le code d'erreur exact (403, 404, 429...)
      return res.status(200).json({ text: "Note du Sage : " + data.error.message });
    }

    if (data.candidates && data.candidates[0].content) {
      const result = data.candidates[0].content.parts[0].text;
      res.status(200).json({ text: result });
    } else {
      res.status(200).json({ text: "Le Sage médite... La réponse est encore dans le vide." });
    }

  } catch (error) {
    res.status(200).json({ text: "La vibration vacille... (Erreur : " + error.message + ")" });
  }
}
