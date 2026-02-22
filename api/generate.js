export default async function handler(req, res) {
  const { prompt } = req.body;
  const apiKey = process.env.GEMINI_API_KEY;
  
  // Utilisation de la version v1 (stable) pour éviter l'erreur de la Page 82
  const url = "https://generativelanguage.googleapis.com/v1/models/gemini-1.5-flash:generateContent?key=" + apiKey;

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
      return res.status(200).json({ text: "Le Sage murmure : " + data.error.message });
    }

    const result = data.candidates[0].content.parts[0].text;
    res.status(200).json({ text: result });
  } catch (error) {
    res.status(200).json({ text: "La connexion vacille... (Erreur : " + error.message + ")" });
  }
}
