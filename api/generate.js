export default async function handler(req, res) {
  const { prompt } = req.body;
  const apiKey = process.env.GEMINI_API_KEY;
  
  // Utilisation du sésame révélé par votre diagnostic : gemini-2.0-flash
  const url = "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=" + apiKey;

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
      return res.status(200).json({ text: "Note du Sage : " + data.error.message });
    }

    if (data.candidates && data.candidates[0].content) {
      const result = data.candidates[0].content.parts[0].text;
      res.status(200).json({ text: result });
    } else {
      res.status(200).json({ text: "Le Sage sourit en silence... Réessayez dans un instant." });
    }

  } catch (error) {
    res.status(200).json({ text: "La vibration vacille... (Erreur : " + error.message + ")" });
  }
}
