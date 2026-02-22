export default async function handler(req, res) {
  const { prompt } = req.body;
  const apiKey = process.env.GEMINI_API_KEY;
  
  // Utilisation du modèle racine sur la route de production
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
    
    // Si une erreur survient, nous affichons le code exact pour le diagnostic final
    if (data.error) {
      return res.status(200).json({ text: "Note du Sage : " + data.error.message + " (Code: " + data.error.code + ")" });
    }

    const result = data.candidates[0].content.parts[0].text;
    res.status(200).json({ text: result });

  } catch (error) {
    res.status(200).json({ text: "Le silence s'installe... (Erreur : " + error.message + ")" });
  }
}
