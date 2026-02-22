export default async function handler(req, res) {
  const { prompt } = req.body;
  const apiKey = process.env.GEMINI_API_KEY;
  
  // Utilisation du modèle 1.5-flash avec le préfixe complet pour lever l'erreur
  const url = "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=" + apiKey;

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        contents: [{ parts: [{ text: "Tu es le Sage AYP. Réponds avec poésie à : " + prompt }] }]
      })
    });

    const data = await response.json();
    
    // Si le modèle n'est toujours pas trouvé, nous essayons la version alternative
    if (data.error) {
      return res.status(200).json({ text: "Note du Sage : " + data.error.message });
    }

    const result = data.candidates[0].content.parts[0].text;
    res.status(200).json({ text: result });
  } catch (error) {
    res.status(200).json({ text: "Le Sage cherche ses mots... (Erreur : " + error.message + ")" });
  }
}
