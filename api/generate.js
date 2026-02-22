export default async function handler(req, res) {
  const { prompt } = req.body;
  const apiKey = process.env.GEMINI_API_KEY;
  
  // Utilisation de v1beta avec le modèle flash pur pour contourner l'erreur 404
  const url = "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=" + apiKey;

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        contents: [{ parts: [{ text: "Tu es le Sage AYP. Réponds avec une brièveté poétique à : " + prompt }] }]
      })
    });

    const data = await response.json();
    
    if (data.error) {
      // Affichage du message précis pour le diagnostic final
      return res.status(200).json({ text: "Note du Sage : " + data.error.message });
    }

    if (data.candidates && data.candidates[0].content) {
      const result = data.candidates[0].content.parts[0].text;
      res.status(200).json({ text: result });
    } else {
      res.status(200).json({ text: "Le Sage est en méditation profonde. Réessayez." });
    }

  } catch (error) {
    res.status(200).json({ text: "Le lien vacille... (Erreur : " + error.message + ")" });
  }
}
