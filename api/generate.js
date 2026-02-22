export default async function handler(req, res) {
  const { prompt } = req.body;
  const apiKey = process.env.GEMINI_API_KEY;
  
  // Le sésame de 2026 pour briser le silence de la Page 82
  const url = "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash-exp:generateContent?key=" + apiKey;

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
