export default async function handler(req, res) {
  const { prompt } = req.body;
  const apiKey = process.env.GEMINI_API_KEY;
  
  // Le nom 'gemini-1.5-flash' est le sésame le plus pur pour v1beta
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
    
    // Si une erreur survient encore, nous la lisons avec attention
    if (data.error) {
      return res.status(200).json({ text: "Note du Sage : " + data.error.message });
    }

    // Extraction de la parole sacrée
    const result = data.candidates[0].content.parts[0].text;
    res.status(200).json({ text: result });

  } catch (error) {
    res.status(200).json({ text: "La vibration est instable... (Erreur : " + error.message + ")" });
  }
}
