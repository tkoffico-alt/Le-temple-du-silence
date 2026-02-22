export default async function handler(req, res) {
  const { prompt } = req.body;
  const apiKey = process.env.GEMINI_API_KEY;
  
  // Le sésame le plus pur : version stable v1 et modèle sans suffixe
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
      return res.status(200).json({ text: "Note du Sage : " + data.error.message });
    }

    if (data.candidates && data.candidates[0].content) {
      const result = data.candidates[0].content.parts[0].text;
      res.status(200).json({ text: result });
    } else {
      res.status(200).json({ text: "Le Sage médite... Vérifiez si votre clé API est bien active sur Google Cloud." });
    }

  } catch (error) {
    res.status(200).json({ text: "La vibration est instable... (Erreur : " + error.message + ")" });
  }
}
