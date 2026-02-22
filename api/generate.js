export default async function handler(req, res) {
  const { prompt } = req.body;
  const apiKey = process.env.GEMINI_API_KEY;
  
  // Utilisation de la version v1beta avec le suffixe -latest pour lever l'erreur de la Page 82
  const url = "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=" + apiKey;

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
      // Si l'erreur persiste, nous affichons le message brut de Google pour comprendre
      return res.status(200).json({ text: "Note du Sage : " + data.error.message });
    }

    if (!data.candidates || data.candidates.length === 0) {
      return res.status(200).json({ text: "Le Sage médite en silence... (Pas de réponse reçue)" });
    }

    const result = data.candidates[0].content.parts[0].text;
    res.status(200).json({ text: result });
  } catch (error) {
    res.status(200).json({ text: "La connexion au Temple est instable... (Erreur : " + error.message + ")" });
  }
}
